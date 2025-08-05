"use client";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { propiedades } from "../data/propiedades";
import CitySelector from "../components/CitySelector";
import Link from "next/link";

export default function Propiedades() {
  const [filtroCiudad, setFiltroCiudad] = useState("");

  const propiedadesFiltradas = propiedades.filter((prop) =>
    filtroCiudad ? prop.ubicacion.toLowerCase().includes(filtroCiudad.toLowerCase()) : true
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 🔹 HERO con fondo dinámico */}
      <section
        className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-propiedades.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Encuentra tu próxima propiedad con <span className="text-white">Soluna.</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200">
            Explora propiedades exclusivas en todo el país.
          </p>
          <Link
            href="#selector-ciudades"
            className="mt-6 inline-block bg-[#243B8F] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#1A2D70] transition transform hover:scale-105"
          >
            Explorar Propiedades
          </Link>
        </div>
      </section>

      {/* 🔹 SELECTOR DE CIUDADES */}
      <div id="selector-ciudades">
        <CitySelector onSelectCiudad={(ciudad) => setFiltroCiudad(ciudad)} />
      </div>

      {/* 🔹 FILTRO MANUAL ADICIONAL */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
          <input
            type="text"
            placeholder="Buscar ciudad..."
            onChange={(e) => setFiltroCiudad(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F] focus:outline-none"
          />
          <select className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F] focus:outline-none">
            <option>Tipo de propiedad</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
          </select>
          <input
            type="number"
            placeholder="Precio máximo"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F] focus:outline-none"
          />
          <button className="bg-[#243B8F] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-[#1A2D70] transition">
            Buscar
          </button>
        </div>
      </section>

      {/* 🔹 LISTADO DE PROPIEDADES */}
      <section id="listado-propiedades" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#243B8F] mb-8 text-center">
          Propiedades en {filtroCiudad || "todas las ciudades"}
        </h2>

        {propiedadesFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesFiltradas.map((prop, index) => (
              <div key={index} className="transform hover:-translate-y-2 transition duration-300">
                <PropertyCard {...prop} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay propiedades en esta ciudad.</p>
        )}
      </section>
    </div>
  );
}
