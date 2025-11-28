import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useLang } from './LanguageContext.jsx';

// GLOBAL LANGUAGE CONTEXT

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLang();          // GLOBAL STATE

  const text = {
    mr: {
      location: "अणदूर, ता. तुळजापूर, जि. धाराशिव (उस्मानाबाद)",
      home: "मुख्य पान",
      about: "मंदिर माहिती",
      services: "पूजा सेवा",
      gallery: "छायाचित्रे",
      contact: "संपर्क",
      order: "बुकिंग करा",
      follow: "Follow us:",
    },
    hi: {
      location: "अनदूर, जिला धाराशिव (उस्मानाबाद)",
      home: "होम",
      about: "मंदिर जानकारी",
      services: "पूजा सेवाएँ",
      gallery: "गैलरी",
      contact: "संपर्क",
      order: "बुकिंग करें",
      follow: "हमसे जुड़ें:",
    },
    en: {
      location: "Anadur, Tuljapur Taluka, Dharashiv (Osmanabad)",
      home: "Home",
      about: "About Temple",
      services: "Puja Services",
      gallery: "Gallery",
      contact: "Contact",
      order: "Book Now",
      follow: "Follow us:",
    }
  };

  const navLinks = [
    { name: text[lang].home, path: "/" },
    { name: text[lang].about, path: "/about" },
    { name: text[lang].services, path: "/services", hasDropdown: true },
    { name: text[lang].gallery, path: "/gallery", hasDropdown: true },
    { name: text[lang].contact, path: "/contact" },
  ];

  const linkClasses = ({ isActive }) =>
    `flex items-center transition duration-150 ${
      isActive
        ? "text-red-700 border-b-2 border-red-700"
        : "text-gray-700 hover:text-red-700"
    }`;

  return (
    <header className="w-full sticky top-0 z-50 ">

      {/* Top Bar */}
      <div className="bg-red-700 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-sm" />
            <span>{text[lang].location}</span>
          </div>

          {/* Language Switch */}
          <div className="flex items-center space-x-3">
            <button onClick={() => setLang("mr")} className="px-2">मराठी</button>
            <button onClick={() => setLang("hi")} className="px-2">हिंदी</button>
            <button onClick={() => setLang("en")} className="px-2">EN</button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="font-semibold">{text[lang].follow}</span>
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
              <FaYoutube className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="relative z-50 bg-white shadow-md py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-0 px-0">

          {/* Logo */}
          <div className="flex items-center text-2xl font-bold">
            श्री खंडोबा अणदूर – नळदुर्ग
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-semibold">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClasses}>
                {link.name}
                {link.hasDropdown && (
                  <svg
                    className="ml-1 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" />
                  </svg>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Booking Button (UPDATED TO WHATSAPP) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/7875256356"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-200 uppercase"
            >
              {text[lang].order}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-red-700 text-2xl"
            >
              <FaBars />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 flex justify-end">
          <div className="w-3/4 sm:w-1/2 md:w-1/3 bg-white h-full shadow-xl flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <img src="/logo.png" alt="Temple Logo" className="w-20 h-20 object-contain" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-700 hover:text-red-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-6 py-4 overflow-y-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex justify-between items-center border font-semibold px-4 py-3 mb-3 ${
                      isActive
                        ? "text-red-700 border-red-700 bg-red-50"
                        : "text-gray-700 hover:text-red-700 hover:border-red-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Booking Button (UPDATED TO WHATSAPP) */}
              <a
                href="https://wa.me/7875256356"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-between items-center border font-semibold px-4 py-3 mb-3 text-gray-700 hover:text-red-700 hover:border-red-700"
              >
                {text[lang].order}
              </a>
            </nav>

            {/* Social */}
            <div className="border-t px-6 py-4">
              <p className="font-semibold mb-3">{text[lang].follow}</p>
              <div className="flex space-x-3">
                <FaFacebookF className="w-8 h-8 p-2 border rounded-full hover:bg-red-700 hover:text-white" />
                <FaTwitter className="w-8 h-8 p-2 border rounded-full hover:bg-red-700 hover:text-white" />
                <FaLinkedinIn className="w-8 h-8 p-2 border rounded-full hover:bg-red-700 hover:text-white" />
                <FaYoutube className="w-8 h-8 p-2 border rounded-full hover:bg-red-700 hover:text-white" />
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
