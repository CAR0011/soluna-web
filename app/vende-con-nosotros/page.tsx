export default function VendeConNosotros() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto px-6 py-16 gap-10">
        
        {/* Texto */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#0A1F4B] mb-2">Vende con Nosotros</h1>
          <div className="h-1 w-24 bg-[#0A1F4B] mb-6"></div>
          <p className="text-gray-600 mb-8">
            Publica tus propiedades con Soluna y llega a cientos de clientes potenciales.  
            Pronto podrás gestionar directamente tus anuncios desde esta plataforma.
          </p>

          {/* Formulario elegante */}
          <form className="space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full border border-gray-300 p-3 rounded focus:border-[#0A1F4B] outline-none" />
            <input type="email" placeholder="Correo electrónico" className="w-full border border-gray-300 p-3 rounded focus:border-[#0A1F4B] outline-none" />
            <textarea placeholder="Cuéntanos sobre tu propiedad..." className="w-full border border-gray-300 p-3 rounded focus:border-[#0A1F4B] outline-none"></textarea>
            <button className="bg-[#0A1F4B] text-white px-6 py-3 rounded hover:bg-[#081637] shadow-md hover:shadow-lg transition">
              Enviar Solicitud
            </button>
          </form>
        </div>

        {/* Imagen */}
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/zona1.jpg" alt="Vende con Soluna" className="w-full h-[400px] object-cover" />
          </div>
        </div>

      </section>
    </main>
  );
}
