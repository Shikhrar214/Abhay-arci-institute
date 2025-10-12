import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaClock, FaCheckCircle, FaUpload } from "react-icons/fa";

const Assignment = () => {
  // Sample assignments (you can fetch dynamically later)
  const assignments = [
    {
      id: 1,
      title: "React Component Project",
      subject: "Web Development",
      dueDate: "2025-10-20",
      status: "Pending",
    },
    {
      id: 2,
      title: "Data Structures Analysis",
      subject: "DSA using C++",
      dueDate: "2025-10-18",
      status: "Submitted",
    },
    {
      id: 3,
      title: "Database Design Case Study",
      subject: "Database Management System",
      dueDate: "2025-10-25",
      status: "Pending",
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
          Assignments 📚
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Check your pending and submitted assignments below.
        </p>
      </motion.div>

      {/* Assignment Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {assignments.map((assignment) => (
          <motion.div
            key={assignment.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`p-6 rounded-2xl shadow-xl border ${
              assignment.status === "Submitted"
                ? "border-green-500"
                : "border-gray-700 hover:border-orange-400"
            } bg-gray-800 bg-opacity-60 backdrop-blur-lg transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <FaClipboardList className="text-3xl text-orange-400" />
              {assignment.status === "Submitted" ? (
                <FaCheckCircle className="text-green-400 text-2xl" />
              ) : (
                <FaClock className="text-yellow-400 text-2xl" />
              )}
            </div>

            <h2 className="text-xl font-semibold text-orange-300 mt-4">
              {assignment.title}
            </h2>
            <p className="text-gray-400 mt-1 text-sm">
              Subject: {assignment.subject}
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              Due Date:{" "}
              <span className="text-orange-400 font-medium">
                {new Date(assignment.dueDate).toLocaleDateString()}
              </span>
            </p>

            <p
              className={`mt-2 font-medium ${
                assignment.status === "Submitted"
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}
            >
              Status: {assignment.status}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-all duration-300"
                onClick={() => alert(`Viewing ${assignment.title}`)}
              >
                View
              </button>

              {assignment.status === "Pending" && (
                <button
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                  onClick={() =>
                    alert(`Submitting ${assignment.title}... (feature coming soon!)`)
                  }
                >
                  <FaUpload /> Submit
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Assignment;

