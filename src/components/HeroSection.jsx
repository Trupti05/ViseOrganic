import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../image/logo2.webp";
import nutriPotato from "../image/product.webp";

export default function HeroSection() {
  return (
    <div className="bg-green-800 text-white justify-right">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-10 py-20 space-y-20 md:space-y-0 md:space-x-10">
        {/* Product Image */}
        <div className="flex ml-32">
          <img
            src={nutriPotato}
            alt="Nutri Products"
            className="h-64 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-gray-400">
            Vise Organic
          </h1>
          <h2 className="text-xl md:text-3xl font-medium font-serif mb-6">
            Providing Premium Farming Solutions
            <br /> for Growth and Sustainability.
          </h2>
          <p className="text-sm leading-loose">
            VISE Innovative Solution Enterprise Pvt Ltd, incorporated on
            February 7, 2017, is a pioneering force in the development of
            innovative and cost-effective agricultural products for Indian
            farmers. Recognized and supported by Startup India, Startup Gujarat,
            CIIE IIM Ahmedabad, and the Royal Academy of Engineering, London,
            UK, our company secured the National Award for Social Innovation in
            2017.
          </p>
        </div>
      </div>
    </div>
  );
}
