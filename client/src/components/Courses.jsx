import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
function Courses() {

  const courses = [
    {
      id: 101,
      title: "Full Stack Web Development",
      image: "/images/fullstack.jpg",
      description: "Learn MERN stack with real-world projects and get job ready.",
      duration: "3 Months",
      level: "Intermediate",
    },
    {
      id: 102,
      title: "Basic Computer Course",
      image: "/images/basic.jpg",
      description: "Learn the fundamentals of computers and MS Office tools.",
      duration: "2 Months",
      level: "Beginner",
    },
    {
      id: 103,
      title: "Python Programming",
      image: "/images/python.jpg",
      description: "Master Python and build a strong foundation in logic and coding.",
      duration: "2.5 Months",
      level: "Intermediate",
    },
    {
      id: 104,
      title: "Full Stack Web Development",
      image: "/images/fullstack.jpg",
      description: "Learn MERN stack with real-world projects and get job ready.",
      duration: "3 Months",
      level: "Intermediate",
    },
    {
      id: 105,
      title: "Basic Computer Course",
      image: "/images/basic.jpg",
      description: "Learn the fundamentals of computers and MS Office tools.",
      duration: "2 Months",
      level: "Beginner",
    },
    {
      id: 106,
      title: "Python Programming",
      image: "/images/python.jpg",
      description: "Master Python and build a strong foundation in logic and coding.",
      duration: "2.5 Months",
      level: "Intermediate",
    },
  ];


  const message = "i am here to show you what is going to done here i am here to show you what is going to done herei am here to show you what is going to done herei am here to show you what is going to done here"
  const notify = () => toast.success(message);
 

  const openPDFById = (pdf_id) => {
    if(!pdf_id) return("pdf not found");
    try {
      if (pdf_id) {
        notify();
      }
    } catch (error) {
      alert("pdf not found")
    }
  }
  
  return (
    <div className='mt-16'>
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16 px-4 text-center rounded-b-3xl shadow-lg">
  <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Courses</h1>
  <p className="text-lg md:text-xl mb-6">Learn from experts and become industry-ready</p>
  <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-100 transition-all">
    Enroll Now
  </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12 px-4">
  {courses.map((course, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
    >
      <img src={course.image} alt={course.title} className="rounded-xl mb-4 w-full h-48 object-cover"/>
      <h3 className="text-xl font-bold text-orange-600 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{course.description}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
        <span>🕒 {course.duration}</span>
        <span>🎯 {course.level}</span>
      </div>
      <button 
      onClick={()=>{openPDFById(course.id)}}
      className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
        View Details
      </button>
    </motion.div>
  ))}
</div>

     <Toaster
  position="top-center"
  reverseOrder={false}
/>
     
    </div>
  )
}

export default Courses