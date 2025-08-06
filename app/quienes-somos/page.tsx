export default function QuienesSomos() {
  return (
    <main className="min-h-screen bg-gray-50 font-[Montserrat]">
      {/* ✅ Hero Section con fondo elegante */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-[#0A1F4B] to-[#243B8F]">
        <div className="absolute inset-0 opacity-10 bg-[url('/Soluna.png.jpg')] bg-cover bg-center"></div>
        <h1 className="text-5xl font-extrabold z-10 drop-shadow-lg">Quiénes Somos</h1>
        <p className="mt-3 text-lg md:text-xl text-gray-200 z-10 max-w-2xl">
          Conectamos sueños con hogares, brindando confianza e innovación en bienes raíces.
        </p>
      </section>

      {/* ✅ Sección Descriptiva */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
          En <span className="font-bold text-[#0A1F4B]">Soluna Bienes Raíces</span> somos una empresa moderna que utiliza tecnología avanzada 
          para ofrecer una experiencia única al comprar, vender o construir propiedades.  
          Nuestra filosofía se basa en la confianza, innovación y resultados excepcionales.
        </p>

        {/* ✅ Tarjetas de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-bold text-[#0A1F4B] mb-4">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Brindar un servicio inmobiliario personalizado, enfocado en la excelencia y el uso de tecnología de punta 
              para ayudar a nuestros clientes a encontrar, vender o construir su propiedad ideal.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-bold text-[#0A1F4B] mb-4">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed">
              Ser líderes en innovación inmobiliaria en Honduras, reconocidos por nuestra transparencia, eficiencia 
              y compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Sección con logo decorativo */}
      <section className="py-10 bg-white flex justify-center">
        <img src="/Soluna.png.jpg" alt="Logo Soluna" className="w-40 opacity-90 hover:scale-105 transition duration-300" />
      </section>
    </main>
  );
}

