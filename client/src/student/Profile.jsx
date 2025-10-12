import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaEnvelope, FaPhone, FaBook, FaCalendarAlt } from "react-icons/fa";

const Profile = () => {
  // Dummy student data (can be fetched dynamically later)
  const student = {
    name: "Shikhar Srivastav",
    rollNo: "STU2025MCA001",
    course: "Master of Computer Applications (MCA)",
    year: "2nd Year",
    email: "shikhar@example.com",
    phone: "+91 9876543210",
    dob: "15 July 2003",
    address: "Ayodhya, Uttar Pradesh, India",
    profilePic:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Placeholder avatar
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-orange-400">
          Student Profile 🎓
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          View and manage your personal and academic details.
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-8"
      >
        {/* Top section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Profile Image */}
          <motion.img
            src={student.profilePic}
            alt="Profile"
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-lg"
          />

          {/* Basic Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-orange-300">{student.name}</h2>
            <p className="text-gray-400 mt-1 font-medium">{student.course}</p>
            <p className="text-gray-400">{student.year}</p>
            <p className="text-gray-400 mt-2">Roll No: {student.rollNo}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Personal Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 bg-opacity-60 border border-gray-700 rounded-xl p-6 shadow-md hover:border-orange-400 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Personal Information
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" /> {student.email}
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-orange-400" /> {student.phone}
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarAlt className="text-orange-400" /> DOB: {student.dob}
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-orange-400" /> Address: {student.address}
              </li>
            </ul>
          </motion.div>

          {/* Academic Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 bg-opacity-60 border border-gray-700 rounded-xl p-6 shadow-md hover:border-orange-400 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Academic Details
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaUserGraduate className="text-orange-400" /> Course: {student.course}
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-orange-400" /> Year: {student.year}
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-orange-400" /> Roll No: {student.rollNo}
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-orange-400" /> Status:{" "}
                <span className="text-green-400 font-medium">Active</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
