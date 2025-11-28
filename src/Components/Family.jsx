import React from "react";

const Family = () => {
  // Images and their names
  const images = [
     { src: "/P2.jpeg", name: "पणजोबा" },
    { src: "/P1.jpeg", name: "आजोबा" },
   
    { src: "/P3.jpeg", name: "वडील" },
    { src: "/P4.jpeg", name: "बंधु" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        माझ्या कुटुंबाचे सदस्य
      </h2>

      {/* Images Row */}
      <div className="flex flex-wrap justify-around items-center gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
            />
            <p className="mt-3 text-center text-lg font-medium text-gray-700">
              {img.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;
