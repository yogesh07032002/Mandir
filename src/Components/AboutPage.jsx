// AboutPage.jsx

import React, { useState } from "react";

import { FaUtensils } from "react-icons/fa";

const copy = {
  mr: {
    heroTitle: "श्री खंडोबा — अणदूर व नळदुर्ग",
    subtitle: "अणदूर (तुळजापूर तालुका, धाराशिव) — नळदुर्ग किल्ल्याजवळील प्रसिद्ध जागृत मंदिर",
    para1: "अणदूर येथील खंडोबा मंदिर महाराष्ट्रातील एक प्रसिद्ध जागृत देवस्थान आहे. खंडोबा वर्षातून पावणे दोन महिने नळदुर्ग येथे मुक्कामी असतो आणि उरलेला काळ अणदूर येथेच राहतो — ही परंपरा लिहित करार आणि भक्तिपूर्ण रीतीने पाळली जाते.",
    para2: "नित्य पूजा सकाळी 8:30 व सायंकाळी 8:00. फक्त कार्तिक महिन्यात पहाटे 4:00 वाजता विशेष अभिषेक आणि पूजा.",
    cta1: "पूजा सेवा पाहा",
    cta2: "आमच्याशी संपर्क करा",
    stats1: "1500+ कार्यक्रम",
    stats2: "70000+ भक्त",
    stats3: "वर्षांचे परंपरा 30+",
  },
  hi: {
    heroTitle: "श्री खंडोबा — अणदूर व नळदुर्ग",
    subtitle: "अणदूर (तुलजापुर तहसील, धाराशिव) — नळदुर्ग किला के पास प्रसिद्ध जागृत मंदिर",
    para1: "अणदूर का खंडोबा मंदिर महाराष्ट्र का प्रसिद्ध जागृत देवस्थान है। मंदिर की परंपरा के अनुसार खंडोबा कुछ समय नळदुर्ग में रहते हैं और बाकी समय अणदूर में।",
    para2: "दैनिक पूजा सुबह 8:30 व शाम 8:00। केवल कार्तिक माह में सुबह 4:00 पर विशेष अभिषेक।",
    cta1: "पूजा सेवाएँ देखें",
    cta2: "संपर्क करें",
    stats1: "1500+ आयोजन",
    stats2: "70000+ भक्त",
    stats3: "30+ वर्षों की परंपरा",
  },
  en: {
    heroTitle: "Shri Khandoba — Anadur & Naldurg",
    subtitle: "Anadur (Tuljapur taluka, Dharashiv) — famous sacred temple near Naldurg fort",
    para1: "The Khandoba temple at Anadur is a renowned sacred site in Maharashtra. By tradition, Khandoba stays at Naldurg for about two months and the rest of the year at Anadur — a practice governed by a written agreement between the villages.",
    para2: "Daily pooja at 8:30 AM and 8:00 PM. During Kartik month there is a special abhishek at 4:00 AM.",
    cta1: "View Pooja Services",
    cta2: "Contact Us",
    stats1: "1500+ events",
    stats2: "70000+ devotees",
    stats3: "30+ years of tradition",
  }
};

const AboutPage = () => {
  const [lang, setLang] = useState("mr");
  const t = copy[lang];

  return (
    <div className="bg-white text-gray-800">
      <div className="relative bg-fill bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: `url('/images/g36.jpeg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide leading-tight">{t.heroTitle}</h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">{t.subtitle}</p>

          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => setLang("mr")} className={`px-3 py-1 rounded ${lang==='mr' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`}>मराठी</button>
            <button onClick={() => setLang("hi")} className={`px-3 py-1 rounded ${lang==='hi' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`}>हिन्दी</button>
            <button onClick={() => setLang("en")} className={`px-3 py-1 rounded ${lang==='en' ? 'bg-red-700 text-white' : 'bg-white text-red-700'}`}>EN</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 mb-16 text-sm text-gray-600 px-6 md:px-20">
        <span className="font-bold text-gray-800 text-lg tracking-wide uppercase">{lang === "mr" ? "आमच्याबद्दल" : lang === "hi" ? "हमारे बारे में" : "About Us"}</span>
        <div className="text-gray-600">
          <a href="/" className="hover:text-red-600 font-medium">{lang === "mr" ? "मुख्यपृष्ठ" : lang === "hi" ? "मुख्य पृष्ठ" : "Home"}</a> &nbsp; &gt; &nbsp;
          <span className="text-red-700 font-semibold">{lang === "mr" ? "आमच्याबद्दल" : lang === "hi" ? "हमारे बारे में" : "About"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-20 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-red-900"> {lang === "mr" ? "सेवा, परंपरा आणि श्रद्धा" : lang === "hi" ? "सेवा, परंपरा और श्रद्धा" : "Service, Tradition & Devotion"} </h3>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">{t.para1}</p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{t.para2}</p>

          <div className="flex gap-4">
            <a href="/services" className="bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 rounded-full font-semibold">{t.cta1}</a>
            <a href="/contact" className="border border-red-700 text-red-700 px-6 py-3 rounded-full font-semibold">{t.cta2}</a>
          </div>

          <div className="mt-8 bg-red-50 p-6 rounded-2xl border border-red-100">
            <p className="font-semibold">{lang === "mr" ? "संपर्क" : lang === "hi" ? "संपर्क" : "Contact"}</p>
            <p className="mt-2">📞 <a href="tel:+917875256356" className="text-red-700">7875256356</a></p>
            <p>✉️ <a href="mailto:diabhimokashe767@gmail.com" className="text-red-700">diabhimokashe767@gmail.com</a></p>
            <p className="mt-2 text-sm text-gray-600">{lang === "mr" ? "स्थान: अणदूर गाव, तुळजापूर तालुका, धाराशिव (उस्मानाबाद)." : lang === "hi" ? "पता: अणदूर गांव, तुलजापुर तहसील, धाराशिव (उस्मानाबाद)." : "Location: Anadur village, Tuljapur taluka, Dharashiv (Osmanabad)."}</p>
          </div>
        </div>

        <div className="relative group w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/g66.jpeg" alt="Temple" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 text-center px-8 py-6 rounded-2xl shadow-xl border border-red-100">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-red-700 to-red-500 text-white p-4 rounded-full shadow-md mb-3">
                <FaUtensils size={24} />
              </div>
              <h4 className="text-xl font-bold text-red-800">{lang === "mr" ? "नित्य पूजा: 08:30 व 20:00" : lang === "hi" ? "दैनिक पूजा: 08:30 व 20:00" : "Daily Pooja: 8:30 AM & 8:00 PM"}</h4>
              <p className="text-gray-700 mt-2 text-sm">{lang === "mr" ? "कार्तिक महिन्यात पहाटे 4:00 व विशेष अभिषेक" : lang === "hi" ? "कार्तिक माह में सुबह 4:00 पर विशेष अभिषेक" : "Special Abhishek at 4:00 AM during Kartik month"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 py-16 px-6 md:px-20 text-center rounded-t-3xl shadow-inner">
        <h3 className="text-3xl font-bold text-red-900 mb-10">{lang === "mr" ? "आमची कामगिरी" : lang === "hi" ? "हमारी उपलब्धियाँ" : "Our Achievements"}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div><p className="text-5xl font-extrabold text-red-700">15000+</p><p className="text-gray-700 mt-2">{lang === "mr" ? "घटनांचा आयोजन" : lang === "hi" ? "आयोजनों" : "Events Catered"}</p></div>
          <div><p className="text-5xl font-extrabold text-red-700">70000+</p><p className="text-gray-700 mt-2">{lang === "mr" ? "आनंदी भक्त" : lang === "hi" ? "खुश भक्त" : "Happy Devotees"}</p></div>
          <div><p className="text-5xl font-extrabold text-red-700">300+</p><p className="text-gray-700 mt-2">{lang === "mr" ? "परंपरेचे वर्ष" : lang === "hi" ? "वर्षों की परंपरा" : "Years of Tradition"}</p></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
