import React from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaCheckCircle, FaDownload } from "react-icons/fa";

const Payments = () => {
  // Sample payment data (can be fetched dynamically later)
  const payments = [
    {
      id: 1,
      date: "2025-09-15",
      amount: 3500,
      course: "Full Stack Web Development",
      status: "Completed",
      transactionId: "TXN8754213",
    },
    {
      id: 2,
      date: "2025-08-10",
      amount: 2000,
      course: "Data Structures & Algorithms",
      status: "Completed",
      transactionId: "TXN6541238",
    },
    {
      id: 3,
      date: "2025-07-05",
      amount: 1500,
      course: "Python Fundamentals",
      status: "Completed",
      transactionId: "TXN3412785",
    },
  ];

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
          Payment History 💳
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          View all your completed payments and download receipts.
        </p>
      </motion.div>

      {/* Payments List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {payments.map((payment, index) => (
          <motion.div
            key={payment.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 hover:border-orange-400 rounded-2xl p-6 shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <FaRupeeSign className="text-3xl text-orange-400" />
              <FaCheckCircle className="text-green-400 text-2xl" />
            </div>

            <h2 className="text-xl font-semibold text-orange-300 mt-4">
              {payment.course}
            </h2>

            <p className="text-gray-400 mt-2">
              <span className="text-gray-500">Transaction ID:</span>{" "}
              {payment.transactionId}
            </p>

            <div className="mt-3">
              <p className="text-lg font-medium">
                Amount:{" "}
                <span className="text-green-400 font-semibold">
                  ₹{payment.amount}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Date: {new Date(payment.date).toLocaleDateString()}
              </p>
            </div>

            <button
              className="mt-5 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition"
              onClick={() => alert(`Downloading receipt for ${payment.course}`)}
            >
              <FaDownload /> Download Receipt
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Payments;
