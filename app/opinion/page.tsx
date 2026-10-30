import Image from "next/image";
import type { Metadata } from "next";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: "Tu opinión sobre Senti",
  description: "Cuéntanos cómo ha sido tu experiencia usando Senti.",
};

export default function OpinionPage() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-black px-4 py-20 font-sans">
      <div className="absolute top-6 right-6">
        <Image src="/Senti.png" alt="Logo" width={100} height={40} priority />
      </div>

      <main className="flex w-full max-w-lg flex-col gap-8 rounded-2xl border border-purple-900/50 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]">
        <section className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Hemos estado trabajando para ti
          </h1>
          <p className="text-sm text-zinc-400">
            Las actualizaciones siguen llegando y queremos que seas de los primeros en saberlo.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <div className="rounded-xl border border-purple-700/50 bg-purple-600/10 p-4">
            <span className="text-xs font-medium uppercase tracking-wide text-purple-400">
              Nuevo
            </span>
            <p className="mt-1 text-white">
              Se habilitará el módulo de <span className="font-medium">traslado entre bodegas y servicios</span>.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Próximamente
            </span>
            <ul className="mt-1 flex flex-col gap-1 text-zinc-300">
              <li>• Áreas de bodega</li>
              <li>• Reportes</li>
            </ul>
            <p className="mt-2 text-xs text-zinc-500">Para mejorar tu experiencia.</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-zinc-800 pt-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-white">Pero necesitamos tu opinión</h2>
            <p className="text-sm text-zinc-400">¿Cómo ha sido tu experiencia usando Senti?</p>
          </div>
          <FeedbackForm />
        </section>
      </main>
    </div>
  );
}
