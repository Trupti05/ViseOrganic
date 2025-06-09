import React from 'react';
import psb from '../image/psb.png';
import mylab from '../image/mylab.png';
import poshan from '../image/poshan.png';
import silk from '../image/silk.png';
import azoto from '../image/azoto.webp';
import mycorrhiza from '../image/myc.png';
import kmb from '../image/kmb.webp';
import secure from '../image/seacure.png';
import uphar from '../image/uphar.png';

const products = [
  { name: 'PSB Multiplier', img: psb },
  { name: 'MyLab', img: mylab },
  { name: 'Poshan', img: poshan },
  { name: 'Silk', img: silk },
  { name: 'Azotobacter Liquid Based', img: azoto },
  { name: 'Mycorrhiza 3000 IP', img: mycorrhiza },
  { name: 'Potash Mobilizing Microorganism', img: kmb },
  { name: 'Secure Power', img: secure },
  { name: 'Uphar', img: uphar },
];

export default function BestsellingSection() {
  return (
    <div className="py-16 px-20 md:px-40 bg-white ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Selling Products</h2>
        <a href="#" className="text-sm tracking-widest border-b-2 border-black hover:text-green-700">
          VIEW ALL PRODUCTS
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10 justify-center">
        {products.map((product, index) => (
          <div key={index} className="flex gap-4 overflow-hidden">
            <img src={product.img} alt={product.name} className="w-32 h-32 object-cover overflow-hidden
             transition-transform duration-300 transform hover:scale-105" />
            <p className="text-md text-gray-800 mt-4">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
