"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        {/* LOGO estilo Serhant */}
        <Link href="/" className="text-white text-3xl font-extrabold tracking-wider" style={{ fontFamily: "Montserrat, sans-serif" }}>
          SOLUNA.
        </Link>

        {/* LINKS */}
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

        {/* BOTÓN CONTACTO */}
        <Link
          href="/contacto"
          className="hidden md:inline-block bg-white text-[#243B8F] px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Contáctanos
        </Link>
      </div>
    </nav>
  );
}









