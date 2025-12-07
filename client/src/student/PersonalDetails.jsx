import React, { useState } from "react";
import {Link } from "react-router"
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const [studentPhoto, setStudentPhoto] = useState(null);
  const [registrationData, setRegistrationData ] = useState(null);

  // Handle photo upload and size validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileSizeKB = file.size / 1024;
    if (fileSizeKB < 50 || fileSizeKB > 100) {
      alert("File size must be between 50KB and 100KB.");
      e.target.value = null;
      return;
    }

    setStudentPhoto(file);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted");
    alert("Form submitted successfully!");
    console.log(registrationData);
    
    // Navigate to home
    navigate("/payments");
  };

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6 md:px-20">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-orange-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Personal Details Form
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 space-y-10 border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Identification Section */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            1️⃣ Identification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
            type="text" 
            placeholder="Full Name" 
            
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="date" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <select className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input 
            type="text" 
            placeholder="Nationality" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="text" 
            placeholder="Government ID (Aadhaar / Passport)" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none md:col-span-2" />

            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-300">Upload Passport Photo (50-100KB)</label>
              <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
              {studentPhoto && <p className="mt-2 text-green-400 text-sm">Selected File: {studentPhoto.name}</p>}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            2️⃣ Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
            type="text" 
            placeholder="Residential Address" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none md:col-span-2" />
            <input 
            type="tel" 
            placeholder="Phone Number" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="text" 
            placeholder="Emergency Contact Name" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="tel" 
            placeholder="Emergency Contact Number" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            
          </div>
        </section>

        {/* Parent/Guardian Info */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            3️⃣ Parent / Guardian Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="text" 
            placeholder="Relationship to Student" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="tel" 
            placeholder="Phone Number" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none" />
            <input 
            type="text" 
            placeholder="Address (if different from student)" 
            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none md:col-span-2" />
          </div>
        </section>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto px-8 py-3 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
        >
          Submit Details
        </motion.button>

        <Link 
        className="ml-8 border text-blue-900 border-orange-900 rounded-full md:w-full sm:w-full p-3 bg-amber-300"
        to={"/login"}
        >Student? Login</Link>
      </motion.form>
    </div>
  );
};

export default PersonalDetails;
