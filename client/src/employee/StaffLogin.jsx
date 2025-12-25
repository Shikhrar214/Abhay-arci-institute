import React from 'react'
import { motion } from "framer-motion";
import {useNavigate} from "react-router"
function StaffLogin() {

  const navigate  = useNavigate();

  const staffLogin = () => {
   
    navigate("/staff-dash")
  }
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen w-full text-white flex items-center justify-center'>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={ {opacity: 1, y: 0}}
      transition={{ duration: 0.6}}
      className='w-full max-w-md bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-10'
      >
         <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-8 text-orange-400'>Login</h1>

         <form 
         action=""
         className='space-y-6'
         >
          <div>
            <label className='block text-sm mb-2 text-gray-300' htmlFor="">ID</label>
            <input type="text" 
            placeholder='Enter ID'
            className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none placeholder-gray-400'
            />
          </div>

          <div>
            <label className='block text-sm mb-2 text-gray-300' htmlFor="">password</label>
            <input type="password"
            placeholder='Password'
            className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none placeholder-gray-400'
            />
          </div>
         </form>


         <motion.button
         whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
         whileTap={{ scale: 0.95 }}
         onClick={staffLogin}
         className="w-full py-3 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
         >Login</motion.button>
      </motion.div>
    </div>
  )
}

export default StaffLogin
