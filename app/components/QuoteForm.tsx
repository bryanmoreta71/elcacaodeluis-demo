"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#B2802B]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FBF7F1" strokeWidth="3">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#2B1B12]">Solicitud recibida</h3>
        <p className="mt-2 text-sm text-[#5B4A3F]">
          Nuestro equipo de exportación revisará tus requerimientos y responderá dentro de 1 día hábil.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Nombre de la empresa
          </label>
          <input
            required
            type="text"
            placeholder="Tu empresa"
            className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            País
          </label>
          <input
            required
            type="text"
            placeholder="País de operación"
            className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
          Correo de trabajo
        </label>
        <input
          required
          type="email"
          placeholder="tu@empresa.com"
          className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Producto de interés
          </label>
          <select className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] focus:border-[#B2802B] focus:outline-none">
            <option>Granos de Cacao</option>
            <option>Polvo de Cacao</option>
            <option>Manteca de Cacao</option>
            <option>Licor / Pasta de Cacao</option>
            <option>Aún no estoy seguro</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
            Volumen mensual estimado
          </label>
          <input
            type="text"
            placeholder="ej. 50 toneladas métricas"
            className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#5B4A3F]">
          Requerimientos
        </label>
        <textarea
          required
          rows={4}
          placeholder="Cuéntanos sobre tus necesidades de abastecimiento, certificaciones requeridas, tiempos de entrega..."
          className="w-full rounded-lg border border-black/10 bg-[#FBF7F1] px-4 py-2.5 text-[#2B1B12] placeholder:text-[#9C8A7C] focus:border-[#B2802B] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[#5B3A29] px-6 py-3 text-sm font-bold text-[#FBF7F1] transition-colors hover:bg-[#2B1B12]"
      >
        Enviar Solicitud de Cotización
      </button>
    </form>
  );
}
