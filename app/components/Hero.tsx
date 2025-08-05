export default function Hero() {
  return (
    <section
      className="relative h-[100vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Gradiente suave para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

      <div className="relative z-10 max-w-3xl px-4">
        {/* TÍTULO + BOTÓN */}
        <h1 className="flex flex-wrap justify-center items-center gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
          Haz tu próximo movimiento con{" "}
          <span className="text-white">Soluna.</span>

          {/* ✅ BOTÓN ELEGANTE LLAMAR */}
          <a
            href="tel:+50499999999"
            className="ml-3 bg-[#243B8F] px-5 py-2 rounded-full text-white text-lg font-semibold shadow-lg flex items-center gap-2 hover:bg-[#1A2D70] transition animate-heartbeat"
          >
            ☀️Llama Ahora
          </a>
        </h1>

        {/* SUBTÍTULO */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md">
          Compra, vende o construye propiedades con la plataforma inmobiliaria más moderna de Honduras.
        </p>

        {/* BUSCADOR */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar por ciudad o zona..."
            className="w-full max-w-md p-3 rounded-l-full text-black placeholder-gray-600 bg-white shadow-lg border border-gray-300 focus:border-[#243B8F] focus:ring-2 focus:ring-[#243B8F] transition"
          />
          <button className="bg-[#243B8F] text-white px-5 rounded-r-full hover:bg-[#1A2D70] transition shadow-md">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}

