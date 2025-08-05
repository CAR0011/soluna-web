"use client";
import React from "react";

const ciudades = [
  { nombre: "San Pedro Sula" },
  { nombre: "Cortés" },
  { nombre: "Choloma" },
  { nombre: "Villanueva" },
  { nombre: "Islas de la Bahia" },
];

export default function CitySelector({ onSelectCiudad }: { onSelectCiudad: (ciudad: string) => void }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      {/* 🔹 TÍTULO */}
      <h2 className="text-3xl font-extrabold text-[#243B8F] mb-10">Nuestras Ciudades</h2>

      {/* 🔹 GRID DE BOTONES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {ciudades.map((c, index) => (
          <button
            key={index}
            onClick={() => onSelectCiudad(c.nombre)}
            className="bg-white text-[#243B8F] font-semibold shadow-lg rounded-xl py-4 px-6
                      hover:bg-[#243B8F] hover:text-white transition transform hover:scale-105 
                      border border-gray-200"
          >
            {c.nombre}
          </button>
        ))}
      </div>
    </section>
  );
}
