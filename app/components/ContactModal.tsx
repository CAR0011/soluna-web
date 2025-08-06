"use client";
import { useEffect } from "react";
import { FiX, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function ContactModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-80 p-6 text-center relative animate-fadeIn">
        {/* Botón Cerrar */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={onClose}>
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold text-[#0A1F4B] mb-4">¡Conéctate con Soluna!</h2>
        <p className="text-gray-600 mb-6">Síguenos en nuestras redes sociales:</p>

        {/* Iconos Redes Sociales */}
        <div className="flex justify-center gap-5 text-3xl">
          <a href="#" target="_blank" className="text-blue-600 hover:scale-110 transition"><FiFacebook /></a>
          <a href="#" target="_blank" className="text-pink-500 hover:scale-110 transition"><FiInstagram /></a>
          <a href="#" target="_blank" className="text-black hover:scale-110 transition"><FaTiktok /></a>
          <a href="#" target="_blank" className="text-green-500 hover:scale-110 transition"><FaWhatsapp /></a>
          <a href="#" target="_blank" className="text-blue-700 hover:scale-110 transition"><FiLinkedin /></a>
        </div>
      </div>
    </div>
  );
}
