import React, { useState } from "react";
import icon1 from "../image/fertilizer.webp";
import icon2 from "../image/pestiside.webp";
import icon3 from "../image/plant.webp";
import icon4 from "../image/spread.webp";
import { FaCheck } from "react-icons/fa";

export default function InterestSection() {
  const [checked, setChecked] = useState([false, false, false, false]);
  const icons = [
    {
      image: icon1,
      name: "Fertilizer",
    },
    {
      image: icon2,
      name: "Pesticides",
    },
    {
      image: icon3,
      name: "Plant Growth Promoter",
    },
    {
      image: icon4,
      name: "Spread Adjuvents",
    },
  ];
  return (
    <div className="bg-white p-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 shadow-lg border border-black rounded-3xl">
      <p className="text-2xl font-semibold text-center mb-1">
        Select Your Interested Product Category
      </p>
      <p className="text-xl font-semibold text-center mb-4">
        आपके प्रोडक्ट रूचि को सेलेक्ट करे
      </p>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-md"
          >
            <img
              src={icon.image}
              alt={icon.name}
              className="px-8 py-4 mb-2 object-contain"
            />
            <p className="text-lg">{icon.name}</p>
            <div
              className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full mt-10 mb-2 cursor-pointer hover:shadow hover:shadow-blue-300"
              onClick={() => {
                const newChecked = [...checked];
                newChecked[index] = !newChecked[index];
                setChecked(newChecked);
              }}
            >
              {checked[index] && (
                <FaCheck className="h-12 w-12 p-2 rounded-full bg-green-800 text-white" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-red-600 text-white px-12 py-3 text-2xl font-semibold rounded-xl">
          Submit
        </button>
      </div>
    </div>
  );
}
