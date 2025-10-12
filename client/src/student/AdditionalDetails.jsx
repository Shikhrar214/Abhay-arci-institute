import React, { useState } from "react";
import { motion } from "framer-motion";


function AdditionalDetails() {
    const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Submitted Successfully!");
    console.log(formData);
    // Integrate with payment gateway API here
  };
  return (
    <div className=" mt-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6 md:px-20">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-orange-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Payment
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Payment Form */}
        <form className="flex-1 space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">
            Payment Information
          </h2>

          {/* Payment Method */}
          <div className="flex items-center gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-orange-400"
              />
              Credit / Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
                className="accent-orange-400"
              />
              UPI
            </label>
          </div>

          {paymentMethod === "card" && (
            <>
              <input
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={formData.cardName}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
                required
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength={16}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
                required
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength={4}
                  className="w-32 p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === "upi" && (
            <input
              type="text"
              name="upiId"
              placeholder="Enter your UPI ID"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
              required
            />
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-3 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Pay Now
          </motion.button>
        </form>

        {/* Summary Panel */}
        <div className="flex-1 bg-gray-900 bg-opacity-50 rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-orange-300 mb-4">Order Summary</h2>
          <div className="flex justify-between">
            <span>Course Name:</span>
            <span>ReactJS Mastery</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span>₹199</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-orange-400 border-t border-gray-700 pt-2">
            <span>Total:</span>
            <span>₹199</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdditionalDetails


