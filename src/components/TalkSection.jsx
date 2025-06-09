import React from 'react';

export default function TalkSection() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white py-16 ">
      {/* Left side text */}
      <div className="w-full md:w-1/2 items-start mt-12 mb-10 md:mb-0 p-4 font-serif leading-6">
        <h2 className="text-4xl font-bold text-black mb-4 text-center">Let's Talk</h2>
        <p className="text-3xl text-center">
          Growing Together: Reach Out to Us for Organic Farming Solutions!
        </p>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 bg-green-800 p-16">
        <form className="space-y-4">
          <div>
            <label className="text-white font-semibold">Name:</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 rounded-md bg-green-800 border border-white text-white focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-white font-semibold">Mobile No.:</label>
            <input
              type="tel"
              className="w-full px-4 py-2 mt-1 rounded-md bg-green-800 border border-white text-white focus:outline-none"
              placeholder="Enter your number"
            />
          </div>
          <div>
            <label className="text-white font-semibold">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 rounded-md bg-green-800 border border-white text-white focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-white font-semibold">Message:</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 mt-1 rounded-md bg-green-800 border border-white text-white focus:outline-none"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-white hover:text-black hover:border border-black transition font-serif"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
