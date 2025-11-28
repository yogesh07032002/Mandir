import React, { useState } from "react";

const contentData = {
  mr: {
    title: "श्री खंडोबा देवस्थान, अणदूर",
    subtitle: "हे महाराष्ट्रातील प्रसिध्द आणि जागृत देवस्थान आहे. देवाची नित्य पूजा, महाअभिषेक आणि विविध धार्मिक परंपरा येथे अत्यंत भक्तिभावाने पार पाडल्या जातात. येथे येणाऱ्या प्रत्येक भाविकाला दर्शनाचा एक अद्भुत व पवित्र अनुभव मिळतो.",
    button: "अधिक जाणून घ्या",
  },
  hi: {
    title: "श्री खंडोबा देवस्थान, अणदूर",
    subtitle: "यह महाराष्ट्र का प्रसिद्ध जागृत देवस्थान है। यहाँ भगवान की दैनिक पूजा, महाअभिषेक और विभिन्न धार्मिक परंपराएँ भक्तिभाव से निभाई जाती हैं। यहाँ आने वाले प्रत्येक भक्त को दर्शन का एक अद्भुत और पवित्र अनुभव प्राप्त होता है।",
    button: "और जानें",
  },
  en: {
    title: "Shri Khandoba Temple, Anadur",
    subtitle: "Shri Khandoba Temple is a famous and revered temple in Maharashtra. Daily worship, Mahapuja, and various religious traditions are performed here with devotion. Every devotee visiting experiences a sacred and unforgettable darshan.",
    button: "Learn More",
  },
};

const AboutSection = () => {
  const [lang, setLang] = useState("mr"); 
  const content = contentData[lang];

  return (
    <section className="bg-[#fff8f0] py-16 px-6 md:px-12">

      {/* Language Buttons */}
      <div className="flex justify-end mb-6 space-x-2 max-w-6xl mx-auto">
        <button onClick={() => setLang("mr")} className="px-3 py-1 bg-red-600 text-white rounded">मराठी</button>
        <button onClick={() => setLang("hi")} className="px-3 py-1 bg-red-600 text-white rounded">हिंदी</button>
        <button onClick={() => setLang("en")} className="px-3 py-1 bg-red-600 text-white rounded">EN</button>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">

        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/g1.jpeg"
            alt="Shri Khandoba Temple"
            className="rounded-xl shadow-lg object-cover w-full h-[350px] md:h-[400px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4 font-sans">
            {content.title}
          </h2>

          <p className="text-gray-900 text-lg md:text-xl mb-6 leading-relaxed font-sans">
            {content.subtitle}
          </p>

          {/* UPDATED BUTTON → WhatsApp Redirect */}
          <a
            href="https://wa.me/7875256356"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold uppercase py-3 px-6 rounded-md shadow-md hover:bg-red-700 transition duration-300 inline-block"
          >
            {content.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
