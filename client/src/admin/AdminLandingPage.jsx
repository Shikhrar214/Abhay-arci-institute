import React from 'react'
import { NavLink } from 'react-router';
import { motion } from "framer-motion";
import { FaBookOpen, FaUserGraduate, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa';
function AdminLandingPage() {

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
        {
          title: "Payments",
          icon: <FaMoneyBillWave className="text-4xl text-orange-400" />,
          desc: "Track fees, payments, and invoices.",
          link: "/payment",
        },
        {
          title: "Assignments",
          icon: <FaClipboardList className="text-4xl text-orange-400" />,
          desc: "Submit and review your assignments.",
          link: "/assignments",
        },
      ];
    
    const name = "Shikhar"
  return (
    <div className='min-w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
        <h1 className='text-amber-400 font-extrabold text-3xl text-center pt-4'>Welcome, {`${name}`}</h1>
        <p className='text-center'>Manage everything in one place.</p>
        {dashboardItems.map((item, index)=>{
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
            
          </motion.div>
        })}
    </div>
  )
}

export default AdminLandingPage