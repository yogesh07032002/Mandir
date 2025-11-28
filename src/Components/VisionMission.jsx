import { FaBullseye, FaEye } from "react-icons/fa";
import React, { useState } from "react";

const VisionMission = () => {
  const [lang, setLang] = useState("mr");

  const content = {
    mr: {
      title: "श्री खंडोबा मंदिराचे ध्येय & कार्य",
      desc:
        "अणदूर – नळदुर्ग येथील श्री खंडोबा मंदिर हे परंपरा, भक्ती, विश्वास आणि सेवांचा संगम आहे. मंदिराचे ध्येय भक्तांना आध्यात्मिक शांतता देणे आणि प्राचीन परंपरा पुढील पिढ्यांपर्यंत पोहोचवणे आहे.",
      visionTitle: "मंदिराचे ध्येय",
      vision:
        "भक्तांना आध्यात्मिक उन्नती मिळावी, मंदिरातील परंपरा जपल्या जाव्यात, आणि श्री खंडोबाची कृपा अधिकाधिक भक्तांपर्यंत पोहोचावी हे मंदिराचे ध्येय आहे.",
      missionTitle: "मंदिराचे कार्य",
      mission:
        "मंदिरात दररोज महा अभिषेक, पानाची किरीट पूजा, जागरण-गोंधळ, लंगर सेवा आणि विविध विधी भक्तांच्या सहभागाने साजरे केले जातात. परंपरा आणि भक्ती जपणे हीच मंदिराची खरी सेवा आहे.",
    },

    en: {
      title: "Vision & Mission of Shri Khandoba Temple",
      desc:
        "Shri Khandoba Temple of Andoor–Naldurg is a sacred place blending tradition, devotion, faith, and service. The temple aims to offer spiritual peace to devotees and preserve ancient rituals.",
      visionTitle: "Temple Vision",
      vision:
        "To uplift devotees spiritually, preserve ancient traditions, and spread the blessings of Lord Khandoba to as many devotees as possible.",
      missionTitle: "Temple Mission",
      mission:
        "Daily Mahabhishek, Panachi Kirti Puja, Jagran–Gondhal, Langar services, and various rituals are performed with devotion. Preserving tradition and serving devotees is the temple’s true mission.",
    },

    hi: {
      title: "श्री खंडोबा मंदिर का उद्देश्य और कार्य",
      desc:
        "अणदूर–नलदुर्ग का श्री खंडोबा मंदिर परंपरा, भक्ति और सेवा का पवित्र संगम है। मंदिर का उद्देश्य भक्तों को आध्यात्मिक शांति देना और प्राचीन परंपराओं को आगे ले जाना है।",
      visionTitle: "मंदिर का उद्देश्य",
      vision:
        "भक्तों की आध्यात्मिक उन्नति, परंपराओं का संरक्षण और श्री खंडोबा की कृपा अधिक भक्तों तक पहुँचना यही मंदिर का उद्देश्य है।",
      missionTitle: "मंदिर का कार्य",
      mission:
        "मंदिर में प्रतिदिन महाअभिषेक, पान की किरीट पूजा, जागरण-गोंधळ, लंगर सेवा तथा विभिन्न धार्मिक विधियाँ होती हैं। परंपरा और भक्ति की सेवा ही मंदिर का मुख्य कार्य है।",
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-yellow-50 via-red-50 to-yellow-50 overflow-hidden">

      {/* Language Buttons */}
      <div className="flex justify-center gap-4 mb-8">
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

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-900 mb-6 tracking-wide">
          {content[lang].title}
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
          {content[lang].desc}
        </p>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="relative bg-white shadow-lg rounded-2xl p-10 border border-yellow-200">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <FaEye className="text-white text-3xl" />
            </div>
            <h3 className="mt-10 text-2xl font-semibold text-yellow-800">
              {content[lang].visionTitle}
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {content[lang].vision}
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-white shadow-lg rounded-2xl p-10 border border-red-200">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <FaBullseye className="text-white text-3xl" />
            </div>
            <h3 className="mt-10 text-2xl font-semibold text-red-800">
              {content[lang].missionTitle}
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {content[lang].mission}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
