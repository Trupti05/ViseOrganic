import React, { useState, useEffect } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

export default function BackToTopButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-[1000]">
        {/* WhatsApp Icon */}
        <a href="https://wa.me/8401431440" target="_blank" rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center"
          aria-label="WhatsApp Icon"
        >
          <FaWhatsapp className="text-2xl text-white" />
        </a>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-green-800 p-4 rounded-full text-white shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      </div>
    )
  );
}
