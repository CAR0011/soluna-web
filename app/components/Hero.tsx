export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white px-6"
      style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Haz tu próximo movimiento con <span className="text-[#E2E646]">Soluna</span>
        </h1>

        <p className="mb-6 text-lg text-gray-100">
          Compra, vende o alquila propiedades con la plataforma inmobiliaria más moderna.
        </p>

        {/* Buscador */}
        <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto bg-white rounded-lg shadow-lg p-3">
          <input 
            type="text" 
            placeholder="Buscar propiedades, ciudades, zonas..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0A1F4B]"
          />
          <button className="bg-[#0A1F4B] text-white px-6 py-2 rounded-lg hover:bg-[#081637] transition">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
