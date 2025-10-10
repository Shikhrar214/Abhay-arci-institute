// import React from 'react'

// function Gallary() {
//   return (
//     <div>
//       gallary
//     </div>
//   )
// }

// export default Gallary


import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Image and Video Data
const GallaryItems = [
  { type: "image", src: "/images/classroom1.jpg", title: "Our Smart Classroom" },
  { type: "image", src: "/images/event1.jpg", title: "Cultural Event Celebration" },
  { type: "video", src: "https://www.youtube.com/embed/ysz5S6PUM-U", title: "Student Project Demo" },
  { type: "image", src: "/images/lab.jpg", title: "Computer Lab Session" },
  { type: "video", src: "https://www.youtube.com/embed/tgbNymZ7vqY", title: "Teacher's Speech" },
  { type: "image", src: "/images/group.jpg", title: "Batch 2025 Celebration" },
];

function Gallary() {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-orange-50 to-yellow-50 py-16 px-4 md:px-10">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center text-orange-600 mb-10"
      >
        Image & Video Gallery
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {GallaryItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-lg bg-white"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="relative w-full h-64">
                <iframe
                  className="w-full h-full"
                  src={item.src}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                  <PlayCircle className="text-white w-16 h-16 opacity-90" />
                </div>
              </div>
            )}

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 text-sm md:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallary;
