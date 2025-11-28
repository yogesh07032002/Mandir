import React, { useState } from "react";

const FunFactsSection = () => {
  const [lang, setLang] = useState("mr");

  const content = {
    mr: {
      sub: "🛕 विशेष माहिती",
      title: "का आहे श्री खंडोबा मंदिर इतकं विशेष?",
      desc:
        "अणदूर – नळदुर्ग येथील श्री खंडोबा मंदिर हे जागृत क्षेत्र असून येथे दररोज महाअभिषेक, पानाची किरीट पूजा, जागरण-गोंधळ आणि विविध पारंपरिक विधी भक्तीभावाने केले जातात.",
      card1Title: "भक्तांची उपस्थिती",
      card1Text: "दरवर्षी हजारो भाविक नवस आणि दर्शनासाठी येतात.",
      card2Title: "परंपरा आणि गाभारा",
      card2Text: "नळदुर्ग – अणदूर परंपरा आजही अत्यंत श्रद्धेने पाळली जाते.",
      c1number: "10,000+",
      c2number: "300+",
      btn1: "पूजा पाहा",
      btn2: "अभिषेक बुकिंग",
      msg1: "नमस्कार, मला पूजा बद्दल माहिती हवी आहे.",
      msg2: "नमस्कार, मला अभिषेक बुकिंग करायचे आहे.",
    },

    en: {
      sub: "🛕 Special Facts",
      title: "Why is Shri Khandoba Temple so Unique?",
      desc:
        "The Andoor–Naldurg Shri Khandoba Temple is known as a powerful sacred place where daily Mahabhishek, Panachi Kirti Puja, Jagran–Gondhal and traditional rituals are performed with devotion.",
      card1Title: "Devotees Every Year",
      card1Text: "Thousands visit yearly for darshan, naivedya and blessings.",
      card2Title: "Traditional System",
      card2Text: "The Naldurg–Andoor traditional agreement is still followed.",
      c1number: "10,000+",
      c2number: "300+",
      btn1: "View Puja",
      btn2: "Book Abhishek",
      msg1: "Hi, I want to know about the Puja.",
      msg2: "Hi, I want to book Abhishek.",
    },

    hi: {
      sub: "🛕 विशेष जानकारी",
      title: "श्री खंडोबा मंदिर इतना प्रसिद्ध क्यों है?",
      desc:
        "अणदूर–नलदुर्ग का श्री खंडोबा मंदिर एक जागृत क्षेत्र है जहाँ प्रतिदिन महाअभिषेक, पान की किरीट पूजा, जागरण–गोंधळ और पारंपरिक विधियाँ की जाती हैं।",
      card1Title: "भक्तों की संख्या",
      card1Text: "हर साल हज़ारों भक्त दर्शन और नवस के लिए आते हैं।",
      card2Title: "परंपरा और व्यवस्था",
      card2Text: "नलदुर्ग–अणदूर की पुरानी परंपरा आज भी निभाई जाती है।",
      c1number: "10,000+",
      c2number: "300+",
      btn1: "पूजा देखें",
      btn2: "अभिषेक बुक करें",
      msg1: "नमस्ते, मुझे पूजा के बारे में जानकारी चाहिए।",
      msg2: "नमस्ते, मुझे अभिषेक बुक करना है।",
    },
  };

  const phone = "7875256356";
  const createWhatsAppLink = (msg) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <section className="relative bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 py-24 overflow-hidden">

      {/* Language Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          className={`px-4 py-2 rounded-full border ${
            lang === "mr" ? "bg-red-600 text-white" : "bg-white"
          }`}
          onClick={() => setLang("mr")}
        >
          मराठी
        </button>

        <button
          className={`px-4 py-2 rounded-full border ${
            lang === "en" ? "bg-red-600 text-white" : "bg-white"
          }`}
          onClick={() => setLang("en")}
        >
          English
        </button>

        <button
          className={`px-4 py-2 rounded-full border ${
            lang === "hi" ? "bg-red-600 text-white" : "bg-white"
          }`}
          onClick={() => setLang("hi")}
        >
          हिंदी
        </button>
      </div>

      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-2xl animate-ping"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h4 className="text-red-700 uppercase font-semibold mb-3 tracking-widest">
            {content[lang].sub}
          </h4>

          <h2 className="text-4xl md:text-5xl font-extrabold text-red-900 mb-6 leading-snug">
            {content[lang].title}
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-md">
            {content[lang].desc}
          </p>

          {/* WhatsApp Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={createWhatsAppLink(content[lang].msg1)}
              target="_blank"
              className="bg-gradient-to-r from-red-700 to-red-500 text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {content[lang].btn1}
            </a>

            <a
              href={createWhatsAppLink(content[lang].msg2)}
              target="_blank"
              className="border border-red-700 text-red-700 px-8 py-3 font-semibold rounded-full hover:bg-red-50 transition-colors duration-300"
            >
              {content[lang].btn2}
            </a>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="grid sm:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-4xl font-extrabold">
                {content[lang].c1number}
              </span>
            </div>
            <h3 className="mt-14 text-xl font-bold text-red-800 mb-1">
              {content[lang].card1Title}
            </h3>
            <p className="text-gray-500 text-sm">{content[lang].card1Text}</p>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center border border-yellow-100 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-4xl font-extrabold">
                {content[lang].c2number}
              </span>
            </div>
            <h3 className="mt-14 text-xl font-bold text-yellow-800 mb-1">
              {content[lang].card2Title}
            </h3>
            <p className="text-gray-500 text-sm">{content[lang].card2Text}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
