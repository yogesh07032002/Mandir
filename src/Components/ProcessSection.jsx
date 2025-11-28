import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

const languageData = {
  marathi: [
    {
      title: "रूद्र अभिषेक",
      img: "/images/g25.jpeg",
      description:
        "श्री खंडोबाच्या मूर्तीवर मंत्रोच्चारांसह जल, पंचामृत व बिल्वपत्रांचा पवित्र अभिषेक केला जातो. नवस सिद्धीसाठी अत्यंत प्रभावी सेवा.",
    },
    {
      title: "पूर्ण सिंहासन अभिषेक",
      img: "/images/g29.jpeg",
      description:
        "श्री खंडोबाचे पूर्ण सिंहासन, मूर्ती व वेदीचे विशेष पूजन व अभिषेक. मोठ्या नवसासाठी व उत्सवासाठी करण्यात येणारी खास सेवा.",
    },
    {
      title: "पद्य पूजा अभिषेक",
      img: "/images/g35.jpeg",
      description:
        "श्री खंडोबाच्या चरणांची पवित्र पाद्यपूजा. देवाच्या आशीर्वादासाठी व मनोकामना पूर्णतेसाठी भक्तीभावाने केली जाते.",
    },
    {
      title: "पानाची किरीट पूजा",
      img: "/images/g44.jpeg",
      description:
        "श्री खंडोबास पानाची किरीट अर्पण करून विशेष पूजा केली जाते. गृहप्रवेश, विवाह व नवीन कार्याच्या शुभारंभासाठी उत्तम पूजा.",
    },
    {
      title: "जागरण गोंधळ",
      img: "/images/g50.jpeg",
      description:
        "भाविकांच्या नवसासाठी जागरण, गोंधळ, पठ, बंधने तसेच वारू व वाघ्या बनवणे या पारंपरिक सेवा केल्या जातात.",
    },
    {
      title: "लंगर सेवा",
      img: "/images/g35.jpeg",
      description:
        "तळी भरणे, प्रसाद वाटप, अन्नदान यांची पवित्र सेवा. भक्तांसाठी मोफत भोजनाची व्यवस्था.",
    },
    {
      title: "पुरणपोळी नेवैद्य",
      img: "/images/g41.jpeg",
      description:
        "श्री खंडोबाचा आवडता नेवैद्य—पुरणपोळी भक्तिभावाने तयार करून अर्पण केली जाते. नवस बोलण्यासाठी विशेष मानला जातो.",
    },
    {
      title: "दहीभात नेवैद्य",
      img: "/images/g27.jpeg",
      description:
        "समाधान, शांतता आणि मंगलकार्य सिद्धीसाठी दहीभाताचा नेवैद्य अर्पण केला जातो.",
    },
  ],

  english: [
    {
      title: "Rudra Abhishek",
      img: "/images/g25.jpeg",
      description:
        "A sacred ritual performed with holy water, Panchamrut, and Bilva leaves along with Vedic mantras, offered to Lord Khandoba for blessings and wish fulfillment.",
    },
    {
      title: "Full Throne Abhishek",
      img: "/images/g29.jpeg",
      description:
        "A special Abhishek and worship of Lord Khandoba’s entire throne, idol, and sacred altar. Performed for major vows and festivals.",
    },
    {
      title: "Padya Pooja Abhishek",
      img: "/images/g35.jpeg",
      description:
        "A devotional ritual offering worship to the divine feet of Lord Khandoba, done for blessings, peace, and fulfillment of desires.",
    },
    {
      title: "Pan Crown Pooja",
      img: "/images/g24.jpeg",
      description:
        "A special ritual where a sacred crown made of betel leaves is offered to Lord Khandoba. Ideal for housewarming, weddings, and new beginnings.",
    },
    {
      title: "Jagran Gondhal",
      img: "/images/g28.jpeg",
      description:
        "Traditional devotional rituals including jagran, gondhal, path, bandhan, making Waru & Waghya, performed for vow completion.",
    },
    {
      title: "Langer Service",
      img: "/images/g35.jpeg",
      description:
        "Sacred service including food donation, distribution of prasad, and serving meals to devotees.",
    },
    {
      title: "Puran Poli Naivedya",
      img: "/images/g31.jpeg",
      description:
        "Lord Khandoba’s favorite offering—Puran Poli—prepared with devotion and offered for special vows.",
    },
    {
      title: "Curd Rice Naivedya",
      img: "/images/g27.jpeg",
      description:
        "A calm and auspicious offering of curd rice, believed to bring peace, satisfaction, and positivity.",
    },
  ],

  hindi: [
    {
      title: "रुद्र अभिषेक",
      img: "/images/g25.jpeg",
      description:
        "भगवान खंडोबा पर जल, पंचामृत और बेलपत्र के साथ वैदिक मंत्रों द्वारा किया जाने वाला पवित्र अभिषेक। मनोकामना पूर्ति के लिए विशेष रूप से प्रभावशील।",
    },
    {
      title: "पूर्ण सिंहासन अभिषेक",
      img: "/images/g29.jpeg",
      description:
        "भगवान खंडोबा के संपूर्ण सिंहासन, मूर्ति और वेदी का विशेष पूजन और अभिषेक। बड़े नवस और उत्सवों में किया जाने वाला विशेष विधि।",
    },
    {
      title: "पाद्य पूजा अभिषेक",
      img: "/images/g35.jpeg",
      description:
        "भगवान खंडोबा के पवित्र चरणों की पूजा। आशीर्वाद, शांति और मनोकामना पूर्ति के लिए की जाने वाली भक्तिमय सेवा।",
    },
    {
      title: "पान किरीट पूजा",
      img: "/images/g24.jpeg",
      description:
        "भगवान खंडोबा को पान से बनी किरीट अर्पित कर किया जाने वाला विशेष पूजन। गृह प्रवेश, विवाह और नए कार्य के शुभारंभ के लिए श्रेष्ठ।",
    },
    {
      title: "जागरन गोंधळ",
      img: "/images/g28.jpeg",
      description:
        "नवस के लिए जागरण, गोंधळ, पाठ, बंधन तथा वारू और वाघ्या बनाना जैसी परंपरागत सेवाएँ की जाती हैं।",
    },
    {
      title: "लंगर सेवा",
      img: "/images/g35.jpeg",
      description:
        "प्रसाद वितरण, तली भरना और अन्नदान की पवित्र सेवा। भक्तों के लिए मुफ्त भोजन की व्यवस्था।",
    },
    {
      title: "पुरणपोली नैवेद्य",
      img: "/images/g41.jpeg",
      description:
        "भगवान खंडोबा का प्रिय नैवेद्य—पुरणपोली—भक्ति से तैयार कर अर्पित किया जाता है। विशेष नवस के लिए महत्वपूर्ण।",
    },
    {
      title: "दही-भात नैवेद्य",
      img: "/images/g27.jpeg",
      description:
        "शांति, संतोष और मंगल कार्य की सिद्धि के लिए दही-भात का नैवेद्य अर्पित किया जाता है।",
    },
  ],
};

const ServicesSlider = () => {
  const scrollContainerRef = useRef(null);
  const [language, setLanguage] = useState("marathi");
  const servicesData = languageData[language];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (currentRef) currentRef.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollHandler = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector(".service-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Language Buttons */}
      <div className="flex justify-center gap-4 pt-10 pb-6">
        <button
          onClick={() => setLanguage("marathi")}
          className={`px-5 py-2 rounded-full font-semibold ${
            language === "marathi"
              ? "bg-red-700 text-white"
              : "bg-white border border-red-700 text-red-700"
          }`}
        >
          मराठी
        </button>

        <button
          onClick={() => setLanguage("english")}
          className={`px-5 py-2 rounded-full font-semibold ${
            language === "english"
              ? "bg-red-700 text-white"
              : "bg-white border border-red-700 text-red-700"
          }`}
        >
          English
        </button>

        <button
          onClick={() => setLanguage("hindi")}
          className={`px-5 py-2 rounded-full font-semibold ${
            language === "hindi"
              ? "bg-red-700 text-white"
              : "bg-white border border-red-700 text-red-700"
          }`}
        >
          हिंदी
        </button>
      </div>

      <section className="py-10 w-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
            {language === "marathi" && "आमच्या पूजा सेवा"}
            {language === "english" && "Our Ritual Services"}
            {language === "hindi" && "हमारी पूजा सेवाएँ"}
          </h2>

          <div className="relative">
            <button
              onClick={() => scrollHandler("left")}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-red-700 text-white rounded-full hidden md:block"
            >
              <MdChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scrollHandler("right")}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-red-700 text-white rounded-full hidden md:block"
            >
              <MdChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-scroll scrollbar-hide p-4 w-full"
            >
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="service-card flex-shrink-0 w-full sm:w-3/4 md:w-1/3 lg:w-1/3 bg-white rounded-2xl shadow-2xl border border-gray-100"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-base text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>

                   <a
  href="https://wa.me/7875256356"
  target="_blank"
  className="text-center block w-full py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-600"
>
  WhatsApp संपर्क
</a>

                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6 md:hidden">
              <span className="text-red-700">Swipe ← →</span> सर्व सेवा पाहण्यासाठी
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSlider;
