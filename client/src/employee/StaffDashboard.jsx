import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import {
  FaBookOpen,
  FaUserGraduate,
  FaMoneyBillWave,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";


function StaffDasgboard() {

  const studentName = "Shikhar Srivastav"; // dynamic later

  const dashboardItems = [
    {
      title: "Upload Media",
      icon: <FaBookOpen className="text-4xl text-orange-400" />,
      desc: "upload required video and image file.",
      link: "/Staff-media-upload",
    },
    {
      title: "Profile",
      icon: <FaUserGraduate className="text-4xl text-orange-400" />,
      desc: "Check and update your personal details.",
      link: "/staff-detail",
    },
    // {
    //   title: "Payments",
    //   icon: <FaMoneyBillWave className="text-4xl text-orange-400" />,
    //   desc: "Track fees, payments, and invoices.",
    //   link: "/payment",
    // },
    // {
    //   title: "Assignments",
    //   icon: <FaClipboardList className="text-4xl text-orange-400" />,
    //   desc: "Submit and review your assignments.",
    //   link: "/assignments",
    // },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 md:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400">
          Welcome, {studentName} 👋
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Manage your courses, progress, and account all in one place.
        </p>
      </motion.div>

      {/* Dashboard Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {dashboardItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:border-orange-400 transition-all duration-300"
          >
            {item.icon}
            <h2 className="text-2xl font-semibold mt-4 text-orange-300">
              {item.title}
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              {item.desc}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-4">
              <NavLink
                to={item.link}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full font-medium transition"
              >
                Go
              </NavLink>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Logout Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-center mt-16"
      >
        <button
          className="flex items-center justify-center gap-2 mx-auto bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full font-semibold transition-all duration-300 shadow-md"
          onClick={() => alert("Logged out successfully!")}
        >
          <FaSignOutAlt /> Logout
        </button>
      </motion.div>
    </div>
  )
}

export default StaffDasgboard;



