import { ClipboardCheck, Coffee, PartyPopper, Users } from "lucide-react";
import React, { useState } from "react";

import { motion } from "framer-motion";

const iconMap = { Users, ClipboardCheck, Coffee, PartyPopper };

// Number Localization
const getLocalizedNumber = (numStr, lang) => {
  const digits = {
    mr: ["०","१","२","३","४","५","६","७","८","९"],
    hi: ["०","१","२","३","४","५","६","७","८","९"],
    en: ["0","1","2","3","4","5","6","7","8","9"],
  };
  return numStr.split("").map((d) => digits[lang][parseInt(d)]).join("");
};

const servicesData = {
  mr: [
    { id: "01", icon: "Users", title: "मुख्य पुजारी", subtitle: "अभिजीत सुरेश मोकाशे — संपर्क: 7875256356" },
    { id: "02", icon: "ClipboardCheck", title: "नित्य पूजा व महाअभिषेक", subtitle: "सकाळी 8:30 • सायंकाळी 8:00 • कार्तिक मध्ये पहाटे 4:00" },
    { id: "03", icon: "Coffee", title: "अभिषेक सेवा", subtitle: "रूद्र अभिषेक, पूर्ण सिंहासन अभिषेक, पद्य पूजा अभिषेक" },
    { id: "04", icon: "PartyPopper", title: "पूजा व इतर सेवा", subtitle: "पानाची किरीट पूजा, जागरण, गोंधळ, पठ, बंधने, वारू/वाघ्या बनवणे, लंगर, तळी भरणे, जवळ काढणे, पुरणपोळी व दहीभात नेवेद्य" },
  ],
  hi: [
    { id: "01", icon: "Users", title: "मुख्य पुजारी", subtitle: "अभिजीत सुरेश मोकाशे — संपर्क: 7875256356" },
    { id: "02", icon: "ClipboardCheck", title: "दैनिक पूजा और महाअभिषेक", subtitle: "सुबह 8:30 • शाम 8:00 • कार्तिक में सुबह 4:00" },
    { id: "03", icon: "Coffee", title: "अभिषेक सेवाएं", subtitle: "रुद्र अभिषेक, पूर्ण सिंहासन अभिषेक, पद्य पूजा अभिषेक" },
    { id: "04", icon: "PartyPopper", title: "पूजा व अन्य सेवाएं", subtitle: "पान की किरीट पूजा, जागरण, गोंधळ, पठ, बंधने, वारू/वाघ्या बनाना, लंगर, तळी भरना, जवळ काढना, पुरणपोळी व दहीभात नेवैद्य" },
  ],
  en: [
    { id: "01", icon: "Users", title: "Head Priest", subtitle: "Abhijeet Suresh Mokashe — Contact: 7875256356" },
    { id: "02", icon: "ClipboardCheck", title: "Daily Worship & Maha Abhishek", subtitle: "Morning 8:30 • Evening 8:00 • Kartik special at 4:00 AM" },
    { id: "03", icon: "Coffee", title: "Abhishek Services", subtitle: "Rudra Abhishek, Full Singhasan Abhishek, Padya Pooja Abhishek" },
    { id: "04", icon: "PartyPopper", title: "Pooja & Other Rituals", subtitle: "Paan Kirti Pooja, Jagran, Gondhal, Path, Bandhane, Waru/Waghya tradition, Langar, Tali Bharna, Jawal Kadhne, Puranpoli & Curdrice offering" },
  ],
};

const sectionTitle = { mr: "मंदिर सेवा", hi: "मंदिर सेवाएं", en: "Temple Services" };
const sectionSubtitle = {
  mr: "अणदूर व नळदुर्ग मंदिर महाराष्ट्रातील प्रसिध्द जागृत देवस्थान. येथे नित्य पूजा, महाअभिषेक व पारंपरिक सेवा भक्तिभावाने पार पडतात.",
  hi: "अणदूर और नळदुर्ग मंदिर महाराष्ट्र का प्रसिद्ध जागृत देवस्थान है। यहाँ दैनिक पूजा, महाअभिषेक और परंपरागत सेवाएँ की जाती हैं।",
  en: "Anadur & Naldurg temples are well-known sacred places in Maharashtra. Daily worship, Maha Abhishek and various rituals are performed with devotion.",
};
const templeName = { mr: "श्री खंडोबा अणदूर", hi: "श्री खंडोबा अणदूर", en: "Shri Khandoba Temple, Anadur" };

const TempleServicesSection = () => {
  const [lang, setLang] = useState("mr");
  const services = servicesData[lang];

  return (
    <section className="relative bg-[#ffe7c9] text-gray-900 py-20 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[600px]">

      {/* Language Buttons */}
      <div className="flex justify-end mb-6 max-w-7xl mx-auto space-x-2">
        {["mr", "hi", "en"].map((lng) => (
          <button
            key={lng}
            onClick={() => setLang(lng)}
            className={`px-3 py-1 rounded font-semibold transition ${
              lang === lng
                ? "bg-red-700 text-white"
                : "bg-white text-red-700 border border-red-700 hover:bg-red-700 hover:text-white"
            }`}
          >
            {lng === "mr" ? "मराठी" : lng === "hi" ? "हिंदी" : "EN"}
          </button>
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,165,0,0.15)_0%,_transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
        
        <motion.p className="text-red-700 font-semibold uppercase text-sm tracking-wide">
          {sectionTitle[lang]}
        </motion.p>

        <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          {templeName[lang]}
        </motion.h2>

        <motion.p className="text-gray-700 mt-4 max-w-xl">
          {sectionSubtitle[lang]}
        </motion.p>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className="relative bg-red-700 border border-orange-400 rounded-2xl text-center py-12 px-6 shadow-lg shadow-red-700/40 hover:shadow-orange-500/50 transition duration-500"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-orange-400 flex items-center justify-center mx-auto bg-gradient-to-tr from-red-700 to-orange-400 relative">
                    <div className="absolute inset-[6px] rounded-full border-2 border-dotted border-orange-300 animate-spin-slow"></div>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <span className="absolute bottom-0 left-[52%] translate-x-[-50%] translate-y-[12px] bg-orange-400 text-white font-semibold text-xs rounded-full px-2 py-1">
                    {getLocalizedNumber(service.id, lang)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {service.subtitle}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TempleServicesSection;
