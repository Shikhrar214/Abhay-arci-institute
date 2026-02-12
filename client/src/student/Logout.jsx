import { motion } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await axios.post(
        "/api/student-logout",
        {},
        { withCredentials: true }
      );

      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 text-center"
      >
        <FaSignOutAlt className="text-orange-400 text-5xl mx-auto mb-6" />

        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Logout
        </h2>

        <p className="text-gray-300 mb-8">
          Are you sure you want to log out from your account?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/profile")}
            className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition duration-300 font-semibold"
          >
            {loading ? "Logging out..." : "Yes, Logout"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Logout;