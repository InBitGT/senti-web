import { Fragment } from "react";
import PrintButton from "../../atom/PrintButton/PrintButton";

export type Block =
  | { type: "p"; text: string }
  | { type: "sub"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Section = { title: string; blocks: Block[] };

type Props = {
  company: string;
  title: string;
  updatedAt: string;
  intro: string[];
  sections: Section[];
};

const EMAIL_REGEX = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

function LinkedText({ text }: { text: string }) {
  const parts = text.split(EMAIL_REGEX);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={`mailto:${part}`}
            className="text-blue-700 underline underline-offset-2 hover:text-blue-800 print:no-underline"
          >
            {part}
          </a>
        ) : (
          part.split("\n").map((line, j, arr) => (
            <Fragment key={`${i}-${j}`}>
              {line}
              {j < arr.length - 1 && <br />}
            </Fragment>
          ))
        ),
      )}
    </>
  );
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mb-2.5">
          <LinkedText text={block.text} />
        </p>
      );
    case "sub":
      return (
        <h3 className="mt-5 mb-1.5 text-base font-semibold text-gray-800 break-after-avoid print:text-[13px]">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mb-2.5 list-disc space-y-1 pl-6">
          {block.items.map((item, i) => (
            <li key={i}>
              <LinkedText text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="my-3 overflow-x-auto print:overflow-visible">
          <table className="w-full min-w-[520px] border-collapse text-sm print:min-w-0 print:text-[11px]">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 bg-gray-100 px-3 py-2 text-left align-top font-semibold [print-color-adjust:exact]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="break-inside-avoid">
                  {row.map((cell, j) => (
                    <td key={j} className="border border-gray-300 px-3 py-2 text-left align-top">
                      <LinkedText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function LegalDocument({
  company,
  title,
  updatedAt,
  intro,
  sections,
}: Props) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 print:min-h-0 print:bg-white">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white print:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
          <span className="text-base font-bold text-gray-900">{company}</span>
          <PrintButton />
        </div>
      </header>

      <main className="mx-auto max-w-3xl bg-white px-5 py-6 text-[15px] leading-relaxed sm:my-6 sm:rounded-xl sm:px-12 sm:py-10 sm:shadow-sm print:m-0 print:max-w-none print:p-0 print:text-xs print:leading-normal print:shadow-none">
        <h1 className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl print:text-[22px]">
          {title}
        </h1>
        <p className="mb-5 text-sm text-gray-500">Última actualización: {updatedAt}</p>

        {intro.map((t, i) => (
          <p key={i} className="mb-2.5">
            <LinkedText text={t} />
          </p>
        ))}

        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="mt-8 mb-2.5 border-b border-gray-200 pb-1.5 text-lg font-bold text-gray-900 break-after-avoid print:mt-6 print:text-[15px]">
              {section.title}
            </h2>
            {section.blocks.map((b, j) => (
              <RenderBlock key={j} block={b} />
            ))}
          </section>
        ))}
      </main>

    </div>
  );
}