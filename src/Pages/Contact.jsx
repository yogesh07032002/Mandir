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
    console.log(formData);
    alert("Thank you! Your message has been submitted.");
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

      {/* Info & Form Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-16">

        {/* Left - Temple Contact Info */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-red-900">Contact the Temple</h3>

          <p className="text-gray-700 text-lg">
            For temple inquiries, daily rituals, festival events, donations, or special pooja bookings, 
            please reach out using the details below.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <p className="text-gray-700">
                Shree Khandoba Mandir,<br />
                Andur Village, Tuljapur Taluka,<br />
                Dharashiv (Osmanabad) District, Maharashtra, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <p className="text-gray-700">+91 78752 56356</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500 text-xl" />
              <p className="text-gray-700">diabhimokashe767@gmail.com</p>
            </div>

            <div className="mt-3 bg-red-50 p-4 rounded-xl shadow">
              <h4 className="text-xl font-semibold text-red-700">
                Chief Priest
              </h4>
              <p className="text-gray-700 mt-1">
                Abhijit Suresh Mokashe<br />
                (Shree Khandoba’s Main Priest)
              </p>
            </div>

          </div>

          {/* Temple Information */}
          <div className="mt-6 bg-red-50 p-5 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-red-700">About the Temple</h4>
            <p className="text-gray-700 mt-3">
              Shree Khandoba Temple, Andur, located near Naldurg Fort, is one of the
              well-known spiritual places in Maharashtra. Khandoba stays in Naldurg for
              almost 1.75 months every year as per an age-old written agreement between
              the two villages. Devotees believe that Andur’s Khandoba fulfills wishes
              and protects his followers.
            </p>
          </div>

          {/* Temple Ritual Timings */}
          <div className="mt-6 bg-red-50 p-5 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-red-700">Daily Ritual Timings</h4>
            <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-1">
              <li>Morning Mahabhishek – 8:30 AM</li>
              <li>Evening Pooja – 8:00 PM</li>
              <li>During Kartik Month: Special Abhishek at 4:00 AM</li>
            </ul>
          </div>

          {/* Pooja Services */}
          <div className="mt-6 bg-red-50 p-5 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-red-700">Available Pooja Services</h4>
            <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-1">
              <li>Rudra Abhishek</li>
              <li>Purna Sinhasan Abhishek</li>
              <li>Padya Pooja Abhishek</li>
              <li>Panachi Kirti Pooja</li>
              <li>Jagran & Gondhal</li>
              <li>Path Bandhane</li>
              <li>Varu / Waghya Rituals</li>
              <li>Langar Services</li>
              <li>Offering Puran Poli Naivedya</li>
              <li>Offering Dahi Bhath Naivedya</li>
            </ul>
          </div>

        </div>

        {/* Right - Contact Form */}
        <div className="bg-red-50 p-8 rounded-2xl shadow-xl">
          <h4 className="text-2xl font-semibold text-red-700 mb-6">Send a Message</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg border border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none h-32 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-400 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-80 md:h-96 bg-gray-200">
        <iframe
          title="Shree Khandoba Temple Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3470181161616!2d73.85674371432942!3d18.519568787362184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0e43b8f8e7%3A0x17e75d4b4c8c1f25!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1699635467890!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
