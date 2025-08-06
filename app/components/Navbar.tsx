"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 🔹 Detectar scroll para navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Cerrar menú si cambia a tamaño desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🔹 NAVBAR FIJO */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#243B8F]/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* ✅ LOGO */}
          <Link href="/" className="text-white text-3xl font-extrabold tracking-wider" style={{ fontFamily: "Montserrat, sans-serif" }}>
            SOLUNA.
          </Link>

          {/* ✅ LINKS Desktop */}
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

          {/* ✅ BOTÓN CONTACTO Desktop */}
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:inline-block bg-white text-[#243B8F] px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Contáctanos
          </button>

          {/* ✅ ICONO MENU Mobile */}
          <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* ✅ PANEL MOBILE MEJORADO */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#243B8F] to-[#1B2563] text-white shadow-2xl transform transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } z-[9999]`}
      >
        {/* Header del panel */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/20">
          <span className="text-2xl font-extrabold tracking-wide">SOLUNA.</span>
          <button className="text-3xl hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4 px-6 py-6 text-lg font-medium">
          {[
            { name: "Comprar", href: "/propiedades" },
            { name: "Vender", href: "/vende-con-nosotros" },
            { name: "Construye", href: "/construye" },
            { name: "Quiénes Somos", href: "/quienes-somos" }
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-gray-300 border-b border-white/10 pb-2 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Botón contacto */}
          <button
            onClick={() => {
              setMenuOpen(false);
              setShowModal(true);
            }}
            className="mt-6 bg-white text-[#243B8F] px-5 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* ✅ OVERLAY (oscurece fondo y bloquea clics) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* ✅ MODAL DE CONTACTO */}
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}











