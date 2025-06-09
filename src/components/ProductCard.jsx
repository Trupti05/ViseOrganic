// components/ProductCard.jsx

export default function ProductCard({ name, image }) {
  return (
    <div className="text-center bg-white overflow-hidden">
      <div className="w-[400px] h-[400px] mx-auto overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <p className="mt-4 mb-4 text-gray-500 hover:text-green-800">{name}</p>
      <button className="mt-2 w-full bg-green-800 hover:bg-white hover:text-green-700 hover:border border-green-800 text-white py-2 px-6 transition-colors duration-300">
        View More
      </button>
    </div>
  );
}
