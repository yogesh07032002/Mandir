import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
  const [lang, setLang] = useState("mr");

  const content = {
    mr: {
      aboutTitle: "श्री खंडोबा अणदूर - नळदुर्ग",
      aboutDesc:
        "अणदूर (धाराशिव/उस्मानाबाद) येथील खंडोबा मंदिर हे एक जागृत क्षेत्र आहे. सकाळी 8.30 वाजता व सायंकाळी 08 वाजता नित्य पूजा व महाअभिषेक होतो. कार्तिक महिन्यात पहाटे 4 वाजता विशेष अभिषेक केला जातो.",
      services: [
        "१) रूद्र अभिषेक",
        "२) पूर्ण सिंहासन अभिषेक",
        "३) पद्य पूजा अभिषेक",
        "पानाची किरीट पूजा",
        "जागरण – गोंधळ व पठ",
        "वारू बनवणे / वाघ्या बनवणे",
        "लंगर – तळी भरणे / जवळ काढणे",
        "पुरणपोळी नेवैद्य",
        "दहीभात नेवैद्य",
      ],
      contactAddress: "अणदूर, तुळजापूर तालुका, धाराशिव जिल्हा",
      priest: "मुख्य पुजारी: अभिजीत सुरेश मोकाशे",
      phone: "7875256356",
      email: "diabhimokashe767@gmail.com",
    },

    en: {
      aboutTitle: "Shri Khandoba Temple – Andur / Naldurga",
      aboutDesc:
        "The Khandoba Temple at Andur (Dharashiv/Osmanabad) is one of Maharashtra’s sacred places. Daily Mahapuja is performed at 8:30 AM and 8:00 PM. In Kartik month, a special Abhishek is performed at 4 AM.",
      services: [
        "1) Rudra Abhishek",
        "2) Full Throne Abhishek",
        "3) Padya Puja Abhishek",
        "Leaf Crown Puja",
        "Jagran – Gondhal & Path",
        "Varu / Waghya Ritual",
        "Langar – Tali Bharat / Javal Ceremony",
        "Puran Poli Offering",
        "Curd Rice Offering",
      ],
      contactAddress: "Andur, Tuljapur Taluka, Dharashiv District",
      priest: "Head Priest: Abhijit Suresh Mokashe",
      phone: "7875256356",
      email: "diabhimokashe767@gmail.com",
    },

    hi: {
      aboutTitle: "श्री खंडोबा मंदिर – अणदूर / नलदुर्ग",
      aboutDesc:
        "अणदूर (धाराशिव/उस्मानाबाद) का खंडोबा मंदिर महाराष्ट्र के प्रमुख जागृत स्थानों में से एक है। प्रतिदिन सुबह 8:30 और शाम 8 बजे महाअभिषेक होता है। कार्तिक महीने में सुबह 4 बजे विशेष अभिषेक किया जाता है।",
      services: [
        "1) रुद्र अभिषेक",
        "2) पूर्ण सिंहासन अभिषेक",
        "3) पद्य पूजा अभिषेक",
        "पत्तों का किरीट पूजा",
        "जागर – गोंधल व पाठ",
        "वारू / वाघ्या बनाना",
        "लंगर – तली भरना / जवळ निकाल",
        "पुरणपोली नैवेद्य",
        "दही-भात नैवेद्य",
      ],
      contactAddress: "अणदूर, तुळजापुर तालुका, धाराशिव जिला",
      priest: "मुख्य पुजारी: अभिजीत सुरेश मोकाशे",
      phone: "7875256356",
      email: "diabhimokashe767@gmail.com",
    },
  };

  return (
    <footer
      className="bg-[#330d0d] text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔴 Language Buttons */}
      <div className="flex justify-center gap-4 py-4 bg-black/50">
        <button
          onClick={() => setLang("mr")}
          className={`px-4 py-1 rounded-lg ${
            lang === "mr" ? "bg-red-700 text-white" : "bg-white text-black"
          }`}
        >
          मराठी
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-1 rounded-lg ${
            lang === "en" ? "bg-red-700 text-white" : "bg-white text-black"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang("hi")}
          className={`px-4 py-1 rounded-lg ${
            lang === "hi" ? "bg-red-700 text-white" : "bg-white text-black"
          }`}
        >
          हिंदी
        </button>
      </div>

      <div className="bg-black/70 py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Temple */}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            {content[lang].aboutTitle}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {content[lang].aboutDesc}
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="bg-red-700 inline-block px-4 py-1 rounded-t-lg font-semibold mb-4">
            {lang === "mr" ? "सेवा" : lang === "hi" ? "सेवाएँ" : "Services"}
          </h3>

          <ul className="space-y-2 text-gray-300">
            {content[lang].services.map((s, i) => (
              <li key={i} className="hover:text-red-400 transition cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="bg-red-700 inline-block px-4 py-1 rounded-t-lg font-semibold mb-4">
            {lang === "mr" ? "संपर्क" : lang === "hi" ? "संपर्क करें" : "Contact"}
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="text-red-700 w-5 h-5 mt-1" />
              <span>{content[lang].contactAddress}</span>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="text-red-700 w-5 h-5" />
              {content[lang].phone}
            </li>

            <li className="flex items-center gap-2">
              <Mail className="text-red-700 w-5 h-5" />
              {content[lang].email}
            </li>

            <li className="flex items-start gap-2">
              <span className="text-red-500">{content[lang].priest}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-700 py-3 px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-white font-semibold">
          © {new Date().getFullYear()} Shri Khandoba Andur. All Rights Reserved
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a className="bg-white rounded-full p-2 hover:bg-red-100 transition">
            <Facebook className="text-red-700 w-4 h-4" />
          </a>
          <a className="bg-white rounded-full p-2 hover:bg-red-100 transition">
            <Twitter className="text-red-700 w-4 h-4" />
          </a>
          <a className="bg-white rounded-full p-2 hover:bg-red-100 transition">
            <Instagram className="text-red-700 w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
