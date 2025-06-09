import React from "react";
import crop from "../image/crop.webp";
import compost from "../image/compost.webp";
import cover from "../image/cover.webp";
import ipm from "../image/ipm.webp";
import seed from "../image/seed.webp";
import mech from "../image/mech.webp";

export default function HarvestSection() {
  const harvest = [
    {
      title: "Crop Rotation",
      image: crop,
      description:
        "Implementing crop rotation helps in maintaining soil fertility, reducing pest and disease pressure, and minimizing the need for external inputs like fertilizers and pesticides.",
    },
    {
      title: "Compost Production",
      image: compost,
      description:
        "Utilize on-farm resources by composting organic materials such as crop residues, animal manure, and kitchen scraps to create nutrient-rich compost for soil amendment, reducing the reliance on purchased fertilizers.",
    },
    {
      title: "Cover Cropping",
      image: cover,
      description:
        "Planting cover crops during off-seasons helps in suppressing weeds, improving soil structure, enhancing biodiversity, and reducing erosion, thereby cutting down costs associated with weed control and soil erosion management.",
    },
    {
      title: "Integrated Pest Management (IPM)",
      image: ipm,
      description:
        "Implement IPM strategies such as biological control, crop rotation, and habitat manipulation to manage pests and diseases effectively while minimizing the need for synthetic pesticides.",
    },
    {
      title: "Seed Saving",
      image: seed,
      description:
        "Save seeds from open-pollinated and heirloom varieties suited to local conditions, reducing the need to purchase seeds every season.",
    },
    {
      title: "Mechanization",
      image: mech,
      description:
        "Invest in appropriate farm machinery and equipment for tasks like weeding, harvesting, and cultivation to improve efficiency and reduce labor costs.",
    },
  ];

  return (
    <div className="relative">
      {/* Gray Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50 z-0" />

      {/* Green Section */}
      <div className="relative z-10 bg-green-800 text-white w-full h-screen pt-40 pb-48">
        <div className="flex flex-col md:flex-row justify-center px-6 md:px-32 md:space-x-10 items-center mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-gray-300">
              Harvesting Savings:
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium font-serif mb-6">
              Cultivating Cost-Effective Organic Farming
            </h2>
          </div>

          <div className="md:w-1/2">
            <p className="text-xl text-justify my-4 mx-4 md:mx-0 leading-relaxed">
              In organic farming, reducing costs while maintaining sustainability
              is key. Implementing practices such as crop rotation, compost
              production, and integrated pest management can significantly cut
              down expenses. Techniques like water management, seed saving, and
              utilizing livestock also contribute to cost reduction. By adopting
              these strategies, organic farmers can streamline operations,
              minimize reliance on external inputs, and enhance profitability
              while staying true to organic principles.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="relative z-20 -mt-36 px-6 md:px-20 pb-16 font-serif">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 max-w-7xl mx-auto">
          {harvest.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
              <img src={item.image} alt={item.title} className="mx-auto h-48 mb-8" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-700 text-sm text-justify leading-loose">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
