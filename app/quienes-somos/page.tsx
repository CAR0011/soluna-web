export default function QuienesSomos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sección principal */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16 gap-10">
        
        {/* Texto */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#0A1F4B] mb-2">Quiénes Somos</h1>
          <div className="h-1 w-24 bg-[#0A1F4B] mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            En Soluna Bienes Raíces conectamos personas con el hogar de sus sueños. 
            Somos una empresa moderna, que utiliza tecnología avanzada para ofrecer 
            una experiencia eficiente al comprar, vender o alquilar propiedades.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro compromiso es brindar un servicio personalizado, apoyado en confianza, 
            innovación y resultados para nuestros clientes.
          </p>
        </div>

        {/* Imagen decorativa */}
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/hero-bg.jpg" alt="Soluna Quiénes Somos" className="w-full h-[400px] object-cover" />
          </div>
        </div>

      </section>
    </main>
  );
}
