import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 py-12 mt-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-orange-400 mb-6"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg w-full max-w-4xl mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-orange-300">Contact Details</h2>
        <ul className="space-y-2 text-gray-300">
          <li>
            <strong>📍 Local Address:</strong> Babhnan, Basti, Uttar Pradesh
          </li>
          <li>
            <strong>🏠 PIN Code:</strong> 272163
          </li>
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:8467957047"
              className="text-orange-400 hover:text-orange-500"
            >
              8467957047
            </a>
          </li>
          <li>
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:mailyourquery@example.com" //change mail 
              className="text-orange-400 hover:text-orange-500"
            >
              mailyourquery@example.com
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-800 rounded-3xl p-6 md:p-10 shadow-lg w-full max-w-4xl"
      >
        <h2 className="text-3xl font-semibold text-center text-orange-400 mb-8">
          Contact Us
        </h2>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />
        </div>

        {/* Message Field */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            rows="3"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400 outline-none transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}