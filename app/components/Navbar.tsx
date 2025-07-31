"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav
        className={`flex justify-between items-center w-[98%] max-w-7xl px-10 py-5 rounded-full transition-all duration-300 ${
          scrolled ? "bg-[#0A1F4B] shadow-2xl" : "bg-transparent"
        }`}
      >
        {/* Logo que lleva a Home */}
        <Link href="/">
          <span className="text-3xl font-extrabold text-white tracking-wider cursor-pointer">
            SOLUNA
          </span>
        </Link>

        {/* Menú */}
        <ul className="flex flex-wrap gap-5 items-center text-lg">
          {[
            { name: "Comprar", href: "/propiedades" },
            { name: "Alquilar", href: "/propiedades" },
            { name: "Vender", href: "/vende-con-nosotros" },
            { name: "Quiénes Somos", href: "/quienes‑somos" }
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="text-white px-5 py-2 rounded-full hover:bg-white hover:text-[#0A1F4B] transition font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="bg-white text-[#0A1F4B] px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

