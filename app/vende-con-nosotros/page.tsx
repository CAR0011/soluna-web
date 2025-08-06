"use client";
import { useState } from "react";
import { FaHome, FaDollarSign, FaCamera } from "react-icons/fa";

export default function VendeConNosotros() {
  const [form, setForm] = useState({
    nombre: "",
    identidad: "",
    telefono: "",
    email: "",
    ubicacion: "",
    tipo: "",
    precio: "",
    descripcion: "",
    imagen: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Solicitud enviada con éxito. (Simulación)");
    console.log(form);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 🔹 HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-vender.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Vende tu propiedad con Soluna.</h1>
          <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
            Agenda una cita y deja que nuestro equipo se encargue de todo el proceso de venta.
          </p>
        </div>
      </section>

      {/* 🔹 FORMULARIO */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#0A1F4B] mb-6">📋 Registra tu Propiedad</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="nombre" onChange={handleChange} placeholder="Nombre completo" className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" required />
            <input name="identidad" onChange={handleChange} placeholder="Número de Identidad" className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" required />
            <input name="telefono" onChange={handleChange} placeholder="Teléfono" className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" required />
            <input name="email" type="email" onChange={handleChange} placeholder="Correo electrónico" className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" required />
            <input name="ubicacion" onChange={handleChange} placeholder="Ubicación de la propiedad" className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" required />

            <select name="tipo" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]">
              <option>Tipo de propiedad</option>
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Terreno</option>
              <option>Comercial</option>
            </select>

            <input name="precio" type="number" onChange={handleChange} placeholder="Precio estimado" className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" required />
            <input name="imagen" type="file" accept="image/*" onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" />
            
            <textarea name="descripcion" onChange={handleChange} placeholder="Descripción breve..." className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#243B8F]" rows={4}></textarea>

            <button className="md:col-span-2 bg-[#243B8F] text-white py-3 rounded-lg font-semibold hover:bg-[#1A2D70] shadow-lg transition">
              ☀️ Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* 🔹 BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold text-center text-[#0A1F4B] mb-8">¿Por qué vender con Soluna?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaHome className="text-4xl text-[#243B8F] mx-auto mb-3" />
            <p className="font-semibold">Exposición en toda la web</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaDollarSign className="text-4xl text-[#243B8F] mx-auto mb-3" />
            <p className="font-semibold">Mejores ofertas garantizadas</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <FaCamera className="text-4xl text-[#243B8F] mx-auto mb-3" />
            <p className="font-semibold">Fotografía profesional incluida</p>
          </div>
        </div>
      </section>
    </main>
  );
}

