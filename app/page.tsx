"use client";

import { useState } from "react";
import Image from "next/image";

// 👉 Reemplaza esto con la URL de tu Web App de Apps Script
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-PpydeMgjDZvHvWI6E0gop5B7OE2tQFINVbsHzxIXnCRZFHc3Nr-615Y2cFauaVIy/exec"

function mananaISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [dia, setDia] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const minDate = mananaISO();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nombre.trim() || !dia) {
      setError("Completa tu nombre y el día de capacitación.");
      return;
    }
    if (dia < minDate) {
      setError("El día debe ser a partir de mañana.");
      return;
    }

    setError("");
    setEnviando(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ nombre, dia }),
      });
      setEnviado(true);
    } catch (err) {
      setError("Hubo un problema al enviar tu confirmación. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="relative flex flex-col flex-1 items-center justify-center bg-black">
        <div className="absolute top-6 right-6">
        <Image src="/Senti.png" alt="Logo" width={120} height={40} priority />       
       </div>
        <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-purple-900/50 bg-gradient-to-b from-zinc-900 to-black p-10 text-center shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600/20 text-2xl">
            ✓
          </div>
          <h1 className="text-2xl font-semibold text-white">
            ¡Confirmación recibida!
          </h1>
          <p className="text-zinc-400">
            Gracias, <span className="font-medium text-purple-400">{nombre}</span>. Quedaste
            agendado/a para la capacitación el{" "}
            <span className="font-medium text-purple-400">{dia}</span>.
          </p>
          <button
            onClick={() => {
              setEnviado(false);
              setNombre("");
              setDia("");
            }}
            className="mt-2 rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Confirmar otra persona
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-black font-sans">
      <div className="absolute top-6 right-6">
        <Image src="/Senti.png" alt="Logo" width={100} height={40} priority />       
      </div>
      <main className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-purple-900/50 bg-gradient-to-b from-zinc-900 to-black p-10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Confirma tu día de capacitación
          </h1>
          <p className="text-sm text-zinc-400">
            Selecciona el día en que asistirás. Solo están disponibles fechas
            a partir de mañana.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="text-sm font-medium text-zinc-200">
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. María Pérez"
              className="rounded-lg border border-purple-900/60 bg-black/60 px-3 py-2 text-white placeholder:text-zinc-600 outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="dia" className="text-sm font-medium text-zinc-200">
              Día de capacitación
            </label>
            <input
              id="dia"
              type="date"
              min={minDate}
              value={dia}
              onChange={(e) => setDia(e.target.value)}
              className="rounded-lg border border-purple-900/60 bg-black/60 px-3 py-2 text-white outline-none focus:border-purple-500 [color-scheme:dark]"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={enviando}
            className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-purple-600 px-5 text-base font-medium text-white transition-colors hover:bg-purple-500 disabled:opacity-60"
          >
            {enviando ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </form>
      </main>
    </div>
  );
}