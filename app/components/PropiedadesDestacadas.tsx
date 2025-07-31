export default function PropiedadesDestacadas() {
  const propiedades = [1, 2, 3];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#0A1F4B] mb-10">
        Propiedades Destacadas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {propiedades.map((i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
              Imagen {i}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#0A1F4B] mb-2">Propiedad {i}</h3>
              <p className="text-gray-600 mb-3">Descripción breve de la propiedad {i}...</p>
              <button className="w-full bg-[#0A1F4B] text-white py-2 rounded hover:bg-[#081637] transition">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
