import React from 'react';
import plantnew from '../image/plantnew.webp';
export default function DownloadSection() {
  return (
    <>
    <div className="bg-green-800 text-white w-full py-24 px-30 md:px-32 flex flex-col md:flex-row items-center">
      {/* Left Text Section */}
      <div className="text-left mb-16 md:mb-0 md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-300 mb-4">
          Vise Organic:
        </h1>
        <p className="text-xl md:text-2xl font-serif leading-relaxed">
          Check out Vise Organic's revolutionary
          <br />
          agricultural solutions in our product brochure!
        </p>
      </div>

      {/* Right Button Section */}
      <div>
        <button className="bg-white text-black px-6 py-3 rounded-md shadow-md hover:text-green-800 transition duration-300 items-center ml-72">
          Download
        </button>
      </div>
    </div>
    
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-24 py-12 bg-white">
      {/* Left Image */}
      <div className="mb-10 md:mb-0 md:mr-28">
        <img
          src={plantnew}
          alt="Plant"
          className="rounded-2xl shadow-xl max-w-md md:max-w-md"
        />
      </div>

      {/* Right Form */}
      <div className="text-center md:text-center md:items-center max-w-xl">
        <p
          className="text-4xl md:text-4xl font-bold text-green-800 mb-4"
          style={{ textShadow: '0 20px 20px rgba(0,0,0,0.15)' }}
        >
          Download Our Product booklet
        </p>
        <p className="text-lg text-gray-600 mb-6">Submit Whatsapp Number</p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 justify-center md:justify-center">
          <input
            type="text"
            value="+91"
            readOnly
            className="w-20 px-4 py-2 border border-gray-300 rounded-md text-center bg-white shadow-sm"
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>

        <div className="flex justify-center md:justify-center">
          <button className="bg-green-800 text-white px-10 pb-3 pt-2 text-xl rounded-lg drop-shadow-md hover:bg-white
           hover:text-green-800 hover:border-2 border-green-800 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  
    </>
  );
}
