import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const [studentPhoto, setStudentPhoto] = useState(null);
  const [registrationData, setRegistrationData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    nationality: "",
    govId: "",
    address: "",
    studentPhone: "",
    studentEmail: "",
    password: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    parentName: "",
    relationshipToStudent: "",
    parentPhone: "",
    parentEmail: "",
    photo: null,
  });

  // submit form data

  const submitStudentRegistrationData = async (e) => {
    e.preventDefault();
    console.log("data = ", registrationData);
    try {
      const response = await axios.post(
        "/api/student-registration",
        registrationData,
        {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      );
      if (!response) {
        console.log("post error in registration");
      }
      console.log("response", response);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  // handle form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle photo upload and size validation
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // file size validation
    const fileSizeKB = file.size / 1024;
    if (fileSizeKB < 50 || fileSizeKB > 100) {
      alert("File size must be between 50KB and 100KB.");
      e.target.value = null;
      return;
    }
    setStudentPhoto(file);

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
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
        onSubmit={submitStudentRegistrationData}
        encType="multipart/form-data"
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
            {/* fullName */}
            <input
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              name="studentName"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* DOB */}
            <input
              onChange={handleChange}
              name="dob"
              type="date"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* gender */}
            <select
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
              name="gender"
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* nationality */}
            <input
              onChange={handleChange}
              type="text"
              name="nationality"
              placeholder="Nationality"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* password */}
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* govID */}
            <input
              onChange={handleChange}
              type="text"
              name="govId"
              placeholder="Government ID (Aadhaar / Passport)"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none md:col-span-2"
            />

            {/* photo */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-300">
                Upload Passport Photo (50-100KB)
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
              />
              {studentPhoto && (
                <p className="mt-2 text-green-400 text-sm">
                  Selected File: {studentPhoto.name}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            2️⃣ Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* address */}
            <input
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="Residential Address"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none md:col-span-2"
            />

            {/* phone */}
            <input
              onChange={handleChange}
              type="tel"
              name="studentPhone"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* email */}
            <input
              onChange={handleChange}
              type="email"
              name="studentEmail"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* emergency contact no */}
            <input
              onChange={handleChange}
              type="text"
              name="emergencyContactName"
              placeholder="Emergency Contact Name"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />
            <input
              onChange={handleChange}
              type="tel"
              name="emergencyContactNumber"
              placeholder="Emergency Contact Number"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />
          </div>
        </section>

        {/* Parent/Guardian Info */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            3️⃣ Parent / Guardian Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* parent full name */}
            <input
              onChange={handleChange}
              type="text"
              name="parentName"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* relationship to student */}
            <input
              onChange={handleChange}
              type="text"
              name="relationshipToStudent"
              placeholder="Relationship to Student"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* phone */}
            <input
              onChange={handleChange}
              type="tel"
              name="parentPhone"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />

            {/* email */}
            <input
              onChange={handleChange}
              type="email"
              name="parentEmail"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
            />
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
        >
          Student? Login
        </Link>
      </motion.form>

      <Toaster />
    </div>
  );
};

export default PersonalDetails;
