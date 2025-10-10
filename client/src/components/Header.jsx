import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react"; 
import { logo } from "../assets/images";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = ["home", "about", "contact", "courses", "gallary", "register"];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="w-11">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item}`}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700"
                }`
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 border-t border-gray-200">
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item}`}
                onClick={() => setIsOpen(false)} // close menu after click
                className={({ isActive }) =>
                  `block transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
