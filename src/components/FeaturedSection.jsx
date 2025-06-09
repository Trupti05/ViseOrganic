import React from "react";
import product1 from "../image/psb.png";
import product2 from "../image/mylab.png";
import product3 from "../image/kmb.png";
import product4 from "../image/myc.png";
import ProductCard from "./PRoductCard";

export default function FeaturedSection() {
  const featuredProducts = [
    { name: "PSB Multiplier", image: product1 },
    { name: "MyLab", image: product2 },
    { name: "Azotobacter Liquid Based", image: product3 },
    { name: "Mycorrhiza 3000 IP", image: product4 },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <p className=" tracking-widest">FEATURED PRODUCTS</p>
        <h2 className="text-4xl mt-2">Our Featured Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
}
