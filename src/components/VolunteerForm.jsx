import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../Assests/image-hero.jpg";

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 5000);

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex flex-col w-full relative">
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-7xl font-extrabold mb-4 drop-shadow">Volunteer</h1>
          <p className="text-sm sm:text-lg">
            <Link to="/" className="hover:underline text-gray-200">
              <span className="text-yellow-400">Home &gt;</span>
            </Link>{" "}
            Volunteer
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-black-600 mb-6 text-center">
          Volunteer With Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-xl p-10 rounded-xl border border-yellow-100"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Why do you want to volunteer?"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition font-semibold text-lg"
          >
            Submit
          </button>
        </form>
      </section>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white text-yellow-600 px-10 py-8 rounded-xl shadow-2xl text-center max-w-md w-full animate-fade-in scale-95 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">🎉 Thank You!</h3>
            <p className="text-lg">We will contact you soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}
