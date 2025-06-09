import { useState } from "react";
import product1 from "../image/psb.png";
import product2 from "../image/mylab.png";
import product3 from "../image/poshan.png";
import product4 from "../image/silk.png";
import product5 from "../image/myc.png";
import product6 from "../image/kmb.png";
import product7 from "../image/seacure.png";
import product8 from "../image/uphar.png";
import ProductCard from "./PRoductCard";

export default function ProductSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const products = [
    {
      name: "PSB Multiplier",
      image: product1,
    },
    {
      name: "MyLab",
      image: product2,
    },
    {
      name: "Poshan",
      image: product3,
    },
    {
      name: "Silk",
      image: product4,
    },
    {
      name: "Mycorrhiza 3000 IP",
      image: product5,
    },
    {
      name: "Potash Mobilizing Microorganism",
      image: product6,
    },
    {
      name: "Seacure Powder",
      image: product7,
    },
    {
      name: "Uphar",
      image: product8,
    },
  ];

  return (
    <div className="py-16 px-6 bg-white">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10 text-gray-700">
        {["NEW ARRIVAL", "TRENDING", "BEST SELLING"].map((tab, idx) => (
          <button
            key={tab}
            className={`pb-1 transition-colors ${
              selectedTab === idx
                ? "border-b-2 border-black font-semibold"
                : "hover:border-b border-black"
            }`}
            onClick={() => setSelectedTab(idx)}
            style={{ minWidth: 120 }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
}
