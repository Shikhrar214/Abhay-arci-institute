import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router"

const Login = () => {

  const navigate = useNavigate();
  const adminLogin = () => {

    alert("papa")
    navigate("/secure-admin-dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-10"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-orange-400">
          admin Login
        </h2>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Unique ID */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Unique ID</label>
            <input
              type="text"
              placeholder="Enter your ID"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none placeholder-gray-400 text-white transition duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none placeholder-gray-400 text-white transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
            whileTap={{ scale: 0.95 }}
            onClick={adminLogin}
            className="w-full py-3 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-5">
          <Link
            to="#"
            className="text-sm text-gray-400 hover:text-orange-400 transition"
          >
            Forgot your password?
          </Link>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>
      
        
      </motion.div>
    </div>
  );
};

export default Login;
