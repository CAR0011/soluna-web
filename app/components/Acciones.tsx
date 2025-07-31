export default function Acciones() {
  const acciones = [
    { nombre: "Comprar", color: "from-[#0A1F4B] to-[#1D3C7A]" },
    { nombre: "Vender", color: "from-[#E2E646] to-[#C8D000]" },
    { nombre: "Alquilar", color: "from-[#0A1F4B] to-[#081637]" }
  ];

  return (
    <section className="py-10 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0A1F4B] mb-6">
        ¿Qué deseas hacer?
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {acciones.map((a) => (
          <button 
            key={a.nombre} 
            className={`px-8 py-3 rounded-full bg-gradient-to-r ${a.color} text-white font-semibold shadow-lg hover:scale-105 transition`}
          >
            {a.nombre}
          </button>
        ))}
      </div>
    </section>
  );
}
