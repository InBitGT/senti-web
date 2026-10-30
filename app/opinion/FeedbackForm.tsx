"use client";

import { useState } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKFo90n7FyaxEh7t1wh7XAkbbxE41PrhXZa_sgCttEllcOX_hEeg5W4AK-jEMdXYi_/exec"

const ETIQUETAS = ["Muy mala", "Mala", "Regular", "Buena", "Excelente"];

export default function FeedbackForm() {
  const [nombre, setNombre] = useState("");
  const [calificacion, setCalificacion] = useState(0);
  const [comentario, setComentario] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nombre.trim() || !calificacion) {
      setError("Escribe tu nombre y selecciona una calificación.");
      return;
    }

    setError("");
    setEnviando(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          tipo: "Opinion",
          nombre,
          calificacion,
          etiqueta: ETIQUETAS[calificacion - 1],
          comentario,
          fecha: new Date().toISOString(),
        }),
      });
      setEnviado(true);
    } catch (err) {
      setError("Hubo un problema al enviar tu opinión. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600/20 text-2xl text-white">
          ✓
        </div>
        <p className="text-lg font-semibold text-white">¡Gracias por tu opinión!</p>
        <p className="text-sm text-zinc-400">
          <span className="font-medium text-purple-400">{nombre}</span>, tus comentarios nos ayudan
          a seguir mejorando Senti.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre" className="text-sm font-medium text-zinc-200">
          Nombre
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

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-zinc-200">Tu experiencia</span>
        <div className="flex gap-2" role="radiogroup" aria-label="Calificación">
          {ETIQUETAS.map((etiqueta, i) => {
            const valor = i + 1;
            const activo = valor <= calificacion;
            return (
              <button
                key={valor}
                type="button"
                role="radio"
                aria-checked={calificacion === valor}
                aria-label={etiqueta}
                onClick={() => setCalificacion(valor)}
                className={`text-3xl transition-colors ${activo ? "text-purple-400" : "text-zinc-700 hover:text-zinc-500"}`}
              >
                ★
              </button>
            );
          })}
        </div>
        {calificacion > 0 && (
          <p className="text-xs text-purple-400">{ETIQUETAS[calificacion - 1]}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="comentario" className="text-sm font-medium text-zinc-200">
          Cuéntanos más <span className="text-zinc-500">(opcional)</span>
        </label>
        <textarea
          id="comentario"
          rows={4}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="¿Qué te ha gustado? ¿Qué podemos mejorar?"
          className="resize-none rounded-lg border border-purple-900/60 bg-black/60 px-3 py-2 text-white placeholder:text-zinc-600 outline-none focus:border-purple-500"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-purple-600 px-5 text-base font-medium text-white transition-colors hover:bg-purple-500 disabled:opacity-60"
      >
        {enviando ? "Enviando..." : "Enviar opinión"}
      </button>
    </form>
  );
}
