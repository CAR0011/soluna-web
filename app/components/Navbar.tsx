"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#243B8F]/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* ✅ LOGO estilo Serhant */}
        <Link href="/" className="text-white text-3xl font-extrabold tracking-wider" style={{ fontFamily: "Montserrat, sans-serif" }}>
          SOLUNA.
        </Link>

        {/* ✅ LINKS en desktop */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          {[
            { name: "Comprar", href: "/propiedades" },
            { name: "Vender", href: "/vende-con-nosotros" },
            { name: "Construye", href: "/construye" },
            { name: "Quiénes Somos", href: "/quienes-somos" }
          ].map((link, i) => (
            <li key={i}>
              <Link href={link.href} className="hover:text-gray-200 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ BOTÓN CONTACTO (solo en desktop) */}
        <Link
          href="/contacto"
          className="hidden md:inline-block bg-white text-[#243B8F] px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Contáctanos
        </Link>

        {/* ✅ ICONO MENÚ (solo en móviles) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ✅ PANEL DESPLEGABLE animado */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#243B8F] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cerrar menú */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        {/* Enlaces en móvil */}
        <div className="mt-16 flex flex-col space-y-6 px-6 text-lg font-medium">
          {[
            { name: "Comprar", href: "/propiedades" },
            { name: "Vender", href: "/vende-con-nosotros" },
            { name: "Construye", href: "/construye" },
            { name: "Quiénes Somos", href: "/quienes-somos" },
            { name: "Contáctanos", href: "/contacto" }
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-gray-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Fondo oscuro al abrir el menú */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}










