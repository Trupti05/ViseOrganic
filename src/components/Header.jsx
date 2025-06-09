import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import logo from "../image/logo2.webp";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const offset = window.scrollY;
    setShowHeader(offset > 100);
  };

  handleScroll(); 
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  if (!showHeader) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-center px-10 py-2 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Vise Organic" className="h-10 w-auto" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-[70%] ml-4 relative">
        <input
          type="text"
          placeholder="Search Product For"
          className="px-4 py-2 w-3/5 text-black border-4 border-gray-200 rounded-l-full outline-none"
        />
        <div className="relative w-1/5">
          <p
            className="border-l px-4 py-3 text-black bg-gray-50 cursor-pointer flex items-center justify-between"
            onClick={() => setDropDown(!dropDown)}
          >
            All Categories <FaAngleDown className="inline ml-2" />
          </p>
          {dropDown && (
            <div className="absolute left-0 top-full w-full bg-white shadow-lg rounded-md z-50">
              <ul className="py-2">
                <li className="px-4 py-1 hover:bg-gray-100">All Categories</li>
                <li className="px-4 py-1 hover:bg-gray-100">Plant Growth Promoter</li>
                <li className="px-4 py-1 hover:bg-gray-100">Bacteria Multiplier</li>
                <li className="px-4 py-1 hover:bg-gray-100">MyLab Technology</li>
                <li className="px-4 py-1 hover:bg-gray-100">Nutri Range</li>
                <li className="px-4 py-1 hover:bg-gray-100">Organic Fertilizers</li>
                <li className="px-4 py-1 hover:bg-gray-100">Organic Fungicides & Pesticides</li>
                <li className="px-4 py-1 hover:bg-gray-100">Products From Biogas Slurry</li>
                <li className="px-4 py-1 hover:bg-gray-100">Spread Adjuvant</li>

              </ul>
            </div>
          )}
        </div>
        <button className="bg-black px-4 py-4 rounded-r-full text-white hover:bg-gray-800 transition-colors duration-300">
          <IoSearchSharp />
        </button>
      </div>
    </div>
  );
}
