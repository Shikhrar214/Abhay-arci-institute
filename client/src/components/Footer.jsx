import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Brand */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-orange-400">Aditya Rise</h1>
          <p className="text-gray-400 text-sm">
            Empowering students with quality computer education and practical skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "About", "Courses", "Gallery", "Contact"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5, color: "#f97316" }}
                className="cursor-pointer transition-colors duration-300"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-lg text-white mb-3">Contact</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Babhnan, Basti, UP</li>
            <li>PIN CODE: 272163</li>
            <li>Phone: 8467957047</li>
            <li>Email: info@adityarise.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-lg text-white mb-3">Follow Us</h2>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, color: "#f97316" }}
                className="text-gray-400 text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Aditya Rise Computer Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
