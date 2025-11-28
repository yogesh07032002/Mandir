import { Quote, Utensils } from "lucide-react";
import React, { useRef } from "react";

const ChevronLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const testimonials = [
  { name: "Priya Sharma", role: "Happy Bride", review: "They made our wedding reception magical. The food was exquisite, especially the Shahi Paneer. Service was flawless and professional from start to finish.", rating: 5 },
  { name: "David Chen", role: "Corporate Event Planner", review: "Handled our 300-person corporate gala without a hitch. The fine dine service was top-notch, and they expertly accommodated all our complex dietary requests.", rating: 5 },
  { name: "Rohit & Family", role: "Anniversary Host", review: "We used their theme-based catering for our anniversary, and the presentation was incredible! They truly brought the 'Regal India' theme to life through food and decor.", rating: 5 },
  { name: "Sarah Lee", role: "Office Manager", review: "Fantastic industrial tiffin service for our staff during busy periods. Healthy, fresh, and delivered on time every single day. A huge time-saver!", rating: 4 },
  { name: "Karan Jha", role: "Party Organizer", review: "Their outdoor catering service was seamless. Despite the challenging location, the quality of the buffet was outstanding and the team was incredibly efficient.", rating: 5 },
];

const TestimonialSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 text-gray-800 relative overflow-hidden">
      <style>
        {`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>

      <div className="text-center mb-12">
        <p className="text-red-700 uppercase font-semibold tracking-wide flex justify-center items-center gap-2">
          <Utensils className="text-red-700 w-5 h-5" /> Client Feedback
        </p>
        <h2 className="text-4xl font-bold mt-2 mb-3 text-red-900">
          Hear from our happy customers review
        </h2>
      </div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-600 transition"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-600 transition"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Scrollable Testimonials */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-scroll scrollbar-hide py-4 snap-x snap-mandatory"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[45%] lg:w-[31.33%] snap-center"
            >
              <div className="bg-[#330d0d] text-white border border-red-600 rounded-xl shadow-lg relative p-8 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                <Quote className="absolute top-4 right-4 text-orange-400 w-6 h-6 opacity-70" />

                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-orange-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-8 leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold text-lg">
                      {item.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                  </div>
                  <Quote className="text-orange-400 ml-auto w-5 h-5 transform rotate-180" />
                </div>

                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-700 opacity-20 rounded-full blur-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 md:hidden">
          <span className="text-red-700">Swipe &larr; &rarr;</span> to view all testimonials
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
