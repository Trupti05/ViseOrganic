import React from 'react';
import logo2 from '../image/logo3.webp';
import bg_img from '../image/bg_img.jpg';

export default function HeaderSection() {
  return (
    <div id="headersection"
      className="relative h-screen bg-cover bg-center text-white"
      style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '75vh',
        }}
    >
      {/* Navbar */}
      <div className="flex space-x-28 justify-center items-center px-10 py-5 ">
        <img src={logo2} alt="Logo" className="h-12 mr-20" />
        <ul className="flex space-x-8 text-sm">
          <li className="hover:text-green-400 cursor-pointer">HOME</li>
          <li className="hover:text-green-400 cursor-pointer">PRODUCT</li>
          <li className="hover:text-green-400 cursor-pointer">R & D</li>
          <li className="hover:text-green-400 cursor-pointer">GALLERY</li>
          <li className="hover:text-green-400 cursor-pointer">BLOG</li>
          <li className="hover:text-green-400 cursor-pointer">CONTACT US</li>
        </ul>
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-0 left-20 transform -translate-y-1/3 p-6">
        <h1 className="text-5xl font-bold mb-4 text-shadow-lg">DISCOVER</h1>
        <p className="text-sm mb-4">premium organic agriculture products from our trusted</p>
        <p className="text-base leading-relaxed mb-6">
          We offer a wide range of certified inputs to enhance your farming practices.
          From seeds to fertilizers, our reliable solutions are tailored to
          <br /> meet your
          needs and promote healthy, thriving crops. Elevate your farming experience with
          our top-rated products and dependable service.
        </p>
        <button className="bg-green-800 hover:bg-green-600 px-6 py-4 rounded text-white font-semibold shadow-lg">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
