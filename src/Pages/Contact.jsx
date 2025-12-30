import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Contact Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/917875256356?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-800">

      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/contact-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white z-10 drop-shadow-lg">
          Contact <span className="text-red-500">Us</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-red-900">Contact the Temple</h3>

          <div className="space-y-6">

            {/* Address + Google Business */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <div>
                <p className="text-gray-700">
                  Shree Khandoba Mandir,<br />
                  Andur Village, Tuljapur Taluka,<br />
                  Dharashiv (Osmanabad), Maharashtra
                </p>

                <a
                  href="https://share.google/SwO5GO7ajJSKijdkz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-red-600 font-semibold hover:underline"
                >
                  <FaMapMarkerAlt />
                  View on Google Map
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <p className="text-gray-700">+91 78752 56356</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500 text-xl" />
              <p className="text-gray-700">diabhimokashe767@gmail.com</p>
            </div>

            {/* Google Map Button */}
            <a
              href="https://share.google/SwO5GO7ajJSKijdkz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-red-700 transition"
            >
              <FaMapMarkerAlt className="text-xl" />
              View Temple on Google Map
            </a>

          </div>
        </div>

        {/* RIGHT SIDE – Form */}
        <div className="bg-red-50 p-8 rounded-2xl shadow-xl">
          <h4 className="text-2xl font-semibold text-red-700 mb-6">
            Send a Message
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400 h-32"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white py-3 rounded-full font-semibold"
            >
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-full h-80 md:h-96 bg-gray-200">
        <iframe
          title="Shree Khandoba Temple Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15195.12061737655!2d76.2932996!3d17.8493903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc51f6b8d1bd5c5%3A0x6fd4160c1c7f2d54!2sShree%20Khandoba%20Temple%20Andur!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

