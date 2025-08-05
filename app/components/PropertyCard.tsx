export default function PropertyCard({ title, image, price, location }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-[1.02]">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-bold text-[#243B8F]">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-lg font-semibold text-[#243B8F] mt-2">{price}</p>

        <button className="mt-4 w-full bg-[#243B8F] text-white py-2 rounded-lg font-medium shadow hover:bg-[#1A2D70] transition">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}
