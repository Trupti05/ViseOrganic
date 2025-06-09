import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import footer_bg from "../image/footer_bg.jpeg";
import logo from "../image/logo3.webp";
import post1 from "../image/post1.webp";
import post2 from "../image/post2.webp";
import post3 from "../image/post3.webp";

export default function Footer() {
  return (
    <>
      <footer className="relative text-white pt-10">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${footer_bg})` }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 mt-16">
          {/* Left Section */}
          <div className="justfiy-between">
            <img src={logo} alt="Vise Organic" className="mb-8 w-50 h-16" />
            <p className="mb-2 text-lg">Got Questions ? Call us 24/7!</p>
            <p className="text-xl font-semibold mb-4">+918401431440</p>
            <p>
              <strong>Address :</strong>
            </p>
            <p className="mb-2">
              A10, PRIME INDUSTRY ESTATE, Manjusar, Gujarat 391775
            </p>
            <p>
              <strong>Email :</strong>
            </p>
            <p className="mb-4">viseinnovation@gmail.com</p>
            <div className="flex space-x-4 text-xl mt-8">
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Middle Section - Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-8">PRODUCT CATEGORY</h3>
            <ul className="space-y-2">
              <li>Plant Growth Promoter</li>
              <li>Bacteria Multiplier</li>
              <li>MyLab Technology</li>
              <li>Nutri Range</li>
              <li>Organic Fertilizer</li>
              <li>Organic Fungicide & Pesticides</li>
              <li>Products From Biogas Slurry</li>
              <li>Spread Adjuvant</li>
            </ul>
          </div>

          {/* Right Section - Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-8">RECENT POST</h3>
            <ul className="space-y-4">
              <li className="flex space-x-4 items-start">
                <img
                  src={post1}
                  alt="Post 1"
                  className="w-16 h-12 object-cover"
                />
                <div>
                  <a
                    href="https://www.viseorganic.com/how-does-liquid-npk-contribute-to-balanced-nutrient-management-in-crops-2"
                    className="text-sm font-medium"
                  >
                    How Does Liquid NPK Contribute to Balanced Nu..
                  </a>
                  <p className="text-xs">May 15 - 2024</p>
                </div>
              </li>
              <li className="flex space-x-4 items-start">
                <img
                  src={post2}
                  alt="Post 2"
                  className="w-16 h-12 object-cover"
                />
                <div>
                  <a
                    href="https://www.viseorganic.com/what-benefits-does-rhizobium-liquid-based-provide-for-nitrogen-fixation-in-leguminous-crops"
                    className="text-sm font-medium"
                  >
                    What Benefits Does Rhizobium Liquid-Based Pro..
                  </a>
                  <p className="text-xs">May 14 - 2024</p>
                </div>
              </li>
              <li className="flex space-x-4 items-start">
                <img
                  src={post3}
                  alt="Post 3"
                  className="w-16 h-12 object-cover"
                />
                <div>
                  <a
                    href="https://www.viseorganic.com/how-does-eco-safe-contribute-to-effective-pest-and-disease-management-in-organic-farming"
                    className="text-sm font-medium"
                  >
                    How Does Eco Safe Contribute to Effective Pes..
                  </a>
                  <p className="text-xs">May 13 - 2024</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 bg-green-900 text-center text-sm py-3 border-y border-white leading-loose">
          Copyright © 2023 Vise Organic | All right reserved
        </div>
      </footer>
      {/* <div className="bg-white p-10"></div> */}
    </>
  );
}
