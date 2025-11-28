import React, { useState } from "react";

const slidesData = {
  mr: [
    {
      id: 1,
      tagline: "श्री खंडोबा अणदूर – नळदुर्ग",
      title: "जागृत देवस्थान – Daily Mahapuja & Abhishek",
      description:
        "अणदूर खंडोबा हे महाराष्ट्रातील प्रसिध्द जागृत देवस्थान आहे. सकाळी 8.30 वाजता महाअभिषेक आणि सायंकाळी 8 वाजता पूजा होते. कार्तिक महिन्यात पहाटे 4 वाजता विशेष अभिषेक केला जातो.",
      image: "/images/g1.jpeg",
    },
    {
      id: 2,
      tagline: "शतकांपासून चालत आलेली परंपरा",
      title: "Anadur – Naldurg Devsthan Tradition",
      description:
        "खंडोबा वर्षातून पावणे दोन महिने नळदुर्ग येथे मुक्कामी असतो व उर्वरित काळ अणदूर येथे राहतो. दोन्ही गावांमध्ये यासंदर्भात लिखित करार आहे. भाविकांच्या मते अणदूरचा खंडोबा नवसाला पावतो.",
      image: "/images/g22.jpeg",
    },
    {
      id: 3,
      tagline: "मुख्य पुजारी – अभिजीत सुरेश मोकाशे",
      title: "Puja • Abhishek • Gondhal Seva",
      description:
        "मंदिरात रूद्राभिषेक, पूर्ण सिंहासन अभिषेक, पद्य पूजा, पानाची किरीट पूजा तसेच जागरण–गोंधळ, पठ, बंधने, वारू बनवणे, वाघ्या बनवणे अशा सेवा उपलब्ध आहेत. पुरणपोळी व दहीभात नेवेद्याचीही सुविधा आहे.",
      image: "/images/g51.jpeg",
    },
  ],
  hi: [
    {
      id: 1,
      tagline: "श्री खंडोबा अणदूर – नळदुर्ग",
      title: "जागृत देवस्थान – Daily Mahapuja & Abhishek",
      description:
        "अणदूर खंडोबा महाराष्ट्र का प्रसिद्ध जागृत देवस्थान है। सुबह 8.30 बजे महाअभिषेक और शाम 8 बजे पूजा होती है। कार्तिक माह में सुबह 4 बजे विशेष अभिषेक किया जाता है।",
      image: "/images/g1.jpeg",
    },
    {
      id: 2,
      tagline: "सदियों से चली आ रही परंपरा",
      title: "Anadur – Naldurg Devsthan Tradition",
      description:
        "खंडोबा साल में डेढ़ दो महीने नळदुर्ग में रहते हैं और बाकी समय अणदूर में। दोनों गांवों के बीच लिखित करार है। भक्तों के अनुसार अणदूर का खंडोबा नवस पूर्ण करता है।",
      image: "/images/g22.jpeg",
    },
    {
      id: 3,
      tagline: "मुख्य पुजारी – अभिजीत सुरेश मोकाशे",
      title: "Puja • Abhishek • Gondhal Seva",
      description:
        "मंदिर में रूद्राभिषेक, पूर्ण सिंहासन अभिषेक, पद्य पूजा, पान की किरीट पूजा और जागरण–गोंधळ, पठ, बंधने, वारू बनाना, वाघ्या बनाना जैसी सेवाएं उपलब्ध हैं। पुरणपोळी और दहीभात नेवेद्य की सुविधा भी है।",
      image: "/images/g51.jpeg",
    },
  ],
  en: [
    {
      id: 1,
      tagline: "Shri Khandoba Anadur – Naldurg",
      title: "Awake Temple – Daily Mahapuja & Abhishek",
      description:
        "Anadur Khandoba is a famous awake temple in Maharashtra. Mahapuja is held at 8:30 AM and evening puja at 8 PM. During Kartik month, a special Abhishek is performed at 4 AM.",
      image: "/images/g1.jpeg",
    },
    {
      id: 2,
      tagline: "Tradition Going on for Centuries",
      title: "Anadur – Naldurg Devsthan Tradition",
      description:
        "Khandoba stays at Naldurg for about one and a half months every year and the rest of the time at Anadur. There is a written agreement between the two villages. Devotees believe Khandoba fulfills vows at Anadur.",
      image: "/images/g22.jpeg",
    },
    {
      id: 3,
      tagline: "Chief Priest – Abhijeet Suresh Mokashe",
      title: "Puja • Abhishek • Gondhal Seva",
      description:
        "The temple offers Rudrabhishek, Purna Simhasan Abhishek, Padya Puja, Paan Ki Kirti Puja, and services like Jagaran-Gondhal, Path, Bandhane, Varu making, Waghya making. Puranpoli and curd-rice offering is also available.",
      image: "/images/g22.jpeg",
    },
  ],
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [lang, setLang] = useState("mr");

  const slides = slidesData[lang];

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="relative bg-[#ffe7c9] min-h-[600px] flex flex-col-reverse md:flex-row items-center w-full px-6 md:px-20 overflow-hidden">
      
      {/* Text Content */}
      <div className="w-full md:max-w-xl flex flex-col justify-center h-auto md:h-[630px] z-20 pt-8 md:pt-0 md:pr-10">
        <p className="text-red-600 text-lg md:text-xl font-light mb-2 font-[Poiret One], cursive">
          {slides[current].tagline}
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-snug md:leading-[1.1] font-sans">
          {slides[current].title}
        </h1>
        <p className="text-gray-900 max-w-full md:max-w-md mb-6 md:mb-8 font-sans leading-relaxed text-sm md:text-base">
          {slides[current].description}
        </p>

        {/* Language Buttons */}
        <div className="flex space-x-2 mb-4">
          <button onClick={() => setLang("mr")} className="px-3 py-1 bg-red-600 text-white rounded">मराठी</button>
          <button onClick={() => setLang("hi")} className="px-3 py-1 bg-red-600 text-white rounded">हिंदी</button>
          <button onClick={() => setLang("en")} className="px-3 py-1 bg-red-600 text-white rounded">EN</button>
        </div>

        {/* Booking Button — UPDATED TO WHATSAPP */}
        <a
          href="https://wa.me/7875256356"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white font-bold uppercase py-3 px-6 rounded-md inline-flex items-center shadow-md hover:bg-red-700 transition duration-300 w-full md:w-fit justify-center md:justify-start"
        >
          PUJA / ABHISHEK BOOKING
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Image */}
      <div className="relative flex-1 w-full h-[300px] md:h-[500px] flex items-center justify-center">
        <div
          className="rounded-[120px_120px_0_0] md:rounded-[220px_0_0_220px] overflow-hidden w-full md:w-[660px] h-full md:h-[500px] shadow-xl"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Vertical Slide Numbers */}
      <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-1 text-gray-900 font-mono text-xs md:text-sm select-none">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`cursor-pointer ${index === current ? "text-red-600 font-bold" : "opacity-50"}`}
            onClick={() => setCurrent(index)}
          >
            0{slide.id}
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full border-t border-red-600 opacity-30" />

      {/* Arrows */}
      <div className="absolute bottom-4 right-5 md:right-8 flex space-x-6 text-gray-900 text-xl md:text-2xl">
        <button aria-label="Previous Slide" onClick={prevSlide} className="hover:text-red-600 transition">
          &#8592;
        </button>
        <button aria-label="Next Slide" onClick={nextSlide} className="hover:text-red-600 transition">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
