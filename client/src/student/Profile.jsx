import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";

const Profile = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("/api/student-details");

        const foundedStudent = response?.data?.data;

        console.log("founded student = ", foundedStudent);

        setStudent(foundedStudent);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // ✅ Loading protection
  if (loading) {
    return (
      <div className="text-white text-center mt-20 text-xl">
        Loading profile...
      </div>
    );
  }

  // ✅ Safety protection
  if (!student) {
    return (
      <div className="text-red-400 text-center mt-20 text-xl">
        Failed to load profile.
      </div>
    );
  }

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
            src={
              student.photo ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-lg"
          />

          {/* Basic Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-orange-300">
              {student.studentName}
            </h2>
            <p className="text-gray-400 mt-1 font-medium">
              ID: {student.id}
            </p>
            <p className="text-gray-400">{student.gender}</p>
            <p className="text-gray-400 mt-2">
              Nationality: {student.nationality}
            </p>
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
                <FaEnvelope className="text-orange-400" />
                {student.studentEmail}
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-orange-400" />
                {student.studentPhone}
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarAlt className="text-orange-400" />
                DOB: {new Date(student.dob).toLocaleDateString()}
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-orange-400" />
                {student.address}
              </li>
            </ul>
          </motion.div>

          {/* Academic / Guardian Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 bg-opacity-60 border border-gray-700 rounded-xl p-6 shadow-md hover:border-orange-400 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-orange-300 mb-3">
              Guardian Details
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Parent: {student.parentName}</li>
              <li>Relationship: {student.relationshipToStudent}</li>
              <li>Parent Phone: {student.parentPhone}</li>
              <li>Parent Email: {student.parentEmail}</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;