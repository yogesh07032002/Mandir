import React, { useState } from "react";

// Generate array of image paths g1.jpeg to g68.jpeg
const galleryImages = Array.from({ length: 50 }, (_, i) => `/images/g${i + 1}.jpeg`);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-gray-50 py-16">
      {/* Hero Section */}
      <div
        className="h-64 w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/gallery-hero.jpg')", // hero image
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          Our Gallery
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
