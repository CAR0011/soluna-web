export default function Propiedades() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold text-[#0A1F4B] text-center mb-6">
        Propiedades en Venta y Alquiler
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explora nuestras propiedades disponibles. Pronto podrás filtrarlas por tipo, zona y precio.
      </p>

      {/* Grid de propiedades */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="border border-[#0A1F4B]/30 rounded-lg p-4 shadow hover:shadow-lg hover:border-[#0A1F4B] transition duration-300"
          >
            <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
              Imagen {i}
            </div>
            <h2 className="text-xl font-semibold text-[#0A1F4B] mb-1">
              Propiedad {i}
            </h2>
            <p className="text-gray-500 mb-3">
              Descripción breve de la propiedad {i}...
            </p>
            <button className="w-full border-2 border-[#0A1F4B] text-[#0A1F4B] py-2 rounded hover:bg-[#0A1F4B] hover:text-white transition">
              Ver Detalles
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
