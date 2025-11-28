import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

// ---------------- UPDATED SERVICES WITH EN + MR + HI ----------------
const services = [
  {
    title: { 
      en: "Daily Puja Service", 
      mr: "दैनंदिन पूजा सेवा",
      hi: "दैनिक पूजा सेवा"
    },
    description: {
      en: "Daily traditional puja performed by trained purohits.",
      mr: "प्रशिक्षित पुजाऱ्यांकडून दैनंदिन पारंपरिक पूजा.",
      hi: "प्रशिक्षित पुजारियों द्वारा दैनिक पारंपरिक पूजा।"
    },
    image: "/images/g11.jpeg",
    details: {
      en: "We offer daily puja including Aarti, Abhishek, Naivedya and chanting performed in authentic Vedic tradition.",
      mr: "आम्ही दैनंदिन आरती, अभिषेक, नैवेद्य आणि मंत्र पठणासह पारंपरिक वैदिक पद्धतीने पूजा करतो.",
      hi: "हम दैनिक आरती, अभिषेक, नैवेद्य और वेदिक मंत्रोच्चार के साथ पूजा करते हैं।"
    },
  },

  {
    title: { 
      en: "Special Festival Puja", 
      mr: "विशेष उत्सव पूजा",
      hi: "विशेष त्योहार पूजा"
    },
    description: {
      en: "Special puja arrangements for all temple festivals.",
      mr: "मंदिरातील सर्व उत्सवांसाठी विशेष पूजा व्यवस्था.",
      hi: "मंदिर के सभी त्योहारों के लिए विशेष पूजा व्यवस्था।"
    },
    image: "/images/g22.jpeg",
    details: {
      en: "Festival pujas such as Mahashivratri, Navratri, Ganeshotsav, Ram Navami and more with full decoration and rituals.",
      mr: "महाशिवरात्री, नवरात्री, गणेशोत्सव, राम नवमी इत्यादी उत्सवांसाठी संपूर्ण सजावट व विधींसह विशेष पूजा.",
      hi: "महाशिवरात्रि, नवरात्रि, गणेशोत्सव, राम नवमी आदि त्योहारों के लिए संपूर्ण सजावट और विधिवत पूजा।"
    },
  },

  {
    title: { 
      en: "Havan & Homam", 
      mr: "हवन व होम",
      hi: "हवन और होम"
    },
    description: {
      en: "Traditional havan performed for peace & prosperity.",
      mr: "शांती, समृद्धी व कल्याणासाठी वैदिक हवन.",
      hi: "शांति, समृद्धि और कल्याण के लिए वैदिक हवन।"
    },
    image: "/images/g43.jpeg",
    details: {
      en: "All types of Homam including Grah Shanti, Navagraha Homam, Vastu Shanti, and special sankalp homam.",
      mr: "गृहशांती, नवग्रह होम, वास्तुशांती आणि विशेष संकल्प होमसह सर्व प्रकारचे हवन.",
      hi: "गृहशांति, नवग्रह होम, वास्तुशांति और विशेष संकल्प होम सहित सभी प्रकार के हवन।"
    },
  },

  {
    title: { 
      en: "Abhishek Service", 
      mr: "अभिषेक सेवा",
      hi: "अभिषेक सेवा"
    },
    description: {
      en: "Abhishek with milk, water, panchamrut & more.",
      mr: "दूध, पाणी, पंचामृत इत्यादींसह अभिषेक सेवा.",
      hi: "दूध, पानी, पंचामृत आदि से अभिषेक सेवा।"
    },
    image: "/images/g34.jpeg",
    details: {
      en: "Daily or special day Abhishek for Shivling, Ganpati, Vishnu, Devi and other deities.",
      mr: "शिवलिंग, गणपती, विष्णू, देवी इत्यादी देवतांसाठी दैनंदिन किंवा विशेष दिवसाचा अभिषेक.",
      hi: "शिवलिंग, गणपति, विष्णु, देवी आदि देवताओं के लिए दैनिक या विशेष अभिषेक।"
    },
  },

  {
    title: { 
      en: "Prasad / Naivedya Service", 
      mr: "प्रसाद / नैवेद्य सेवा",
      hi: "प्रसाद / नैवेद्य सेवा"
    },
    description: {
      en: "Fresh naivedya preparation & distribution.",
      mr: "ताजा नैवेद्य तयार करणे व प्रसाद वितरण.",
      hi: "ताज़ा नैवेद्य तैयार करना और प्रसाद वितरण।"
    },
    image: "/images/g5.jpeg",
    details: {
      en: "Special naivedya items like fruits, sweets, panchamrut, jaggery, laddu and more prepared hygienically.",
      mr: "फळे, मिठाई, पंचामृत, गूळ, लाडू इत्यादी नैवेद्य स्वच्छतेने तयार करून अर्पण केले जाते.",
      hi: "फल, मिठाई, पंचामृत, गुड़, लड्डू आदि नैवेद्य स्वच्छता से तैयार किए जाते हैं।"
    },
  },

  {
    title: { 
      en: "Bhajan / Kirtan Seva", 
      mr: "भजन / कीर्तन सेवा",
      hi: "भजन / कीर्तन सेवा"
    },
    description: {
      en: "Organized devotional singing sessions.",
      mr: "संयोजित भक्तीगीत आणि कीर्तन सेवा.",
      hi: "संगठित भजन व कीर्तन सेवा।"
    },
    image: "/images/g16.jpeg",
    details: {
      en: "Bhajan Sandhya, Kirtan programs, Dhol-Tasha, and traditional devotional music arrangements.",
      mr: "भजन संध्या, कीर्तन, ढोल-ताशा व इतर पारंपरिक भक्तिमय संगीत कार्यक्रमाची व्यवस्था.",
      hi: "भजन संध्या, कीर्तन कार्यक्रम, ढोल-ताशा और अन्य भक्तिमय संगीत कार्यक्रम।"
    },
  },

  {
    title: { 
      en: "Pandit Booking Service", 
      mr: "पंडित बुकिंग सेवा",
      hi: "पंडित बुकिंग सेवा"
    },
    description: {
      en: "Book experienced purohits for all rituals.",
      mr: "सर्व धार्मिक विधीसाठी अनुभवी पुजारी बुकिंग.",
      hi: "सभी धार्मिक विधियों के लिए अनुभवी पंडित बुकिंग।"
    },
    image: "/images/g27.jpeg",
    details: {
      en: "Pandits available for Satyanarayan Pooja, Grah Pravesh, Marriage Puja, Vastu Shanti and more.",
      mr: "सत्यनारायण पूजा, गृहप्रवेश, विवाह पूजा, वास्तुशांती आणि इतर विधीसाठी पुजारी उपलब्ध.",
      hi: "सत्यनारायण पूजा, गृहप्रवेश, विवाह पूजा, वास्तुशांति आदि के लिए पंडित उपलब्ध।"
    },
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [lang, setLang] = useState("en");

  return (
    <section className="bg-gray-50">

      {/* ------------ LANGUAGE SWITCHER ------------ */}
      <div className="w-full text-center py-4 bg-white shadow-md flex justify-center gap-4">
        
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            lang === "en" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          English
        </button>

        <button
          onClick={() => setLang("mr")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            lang === "mr" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          मराठी
        </button>

        <button
          onClick={() => setLang("hi")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            lang === "hi" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          हिंदी
        </button>

      </div>

      {/* ------------ HERO ------------ */}
      <div
        className="h-96 w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('images/g1.jpeg')" }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          {lang === "en" ? "Temple Services" : lang === "mr" ? "मंदिर सेवा" : "मंदिर सेवाएँ"}
        </h1>
      </div>

      {/* ------------ SERVICES GRID ------------ */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title[lang]}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title[lang]}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description[lang]}
                </p>

               <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">

  <a
    href="https://wa.me/7875256356"
    target="_blank"
    className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
  >
    <FaWhatsapp />
    <span>
      {lang === "en"
        ? "Book Now"
        : lang === "mr"
        ? "बुक करा"
        : "बुक करें"}
    </span>
  </a>

</div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ------------ MODAL ------------ */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-700 text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {selectedService.title[lang]}
            </h3>

            <img
              src={selectedService.image}
              alt={selectedService.title[lang]}
              className="w-full h-64 object-cover rounded mb-4"
            />

            <p className="text-gray-700">{selectedService.details[lang]}</p>

          </div>
        </div>
      )}

    </section>
  );
};

export default Service;
