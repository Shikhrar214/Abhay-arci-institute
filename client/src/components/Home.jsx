import React, {useState, useEffect} from "react";
import { Link } from "react-router";
import { motion ,AnimatePresence} from "framer-motion";

// Images
import {
  AdityaChaudha,
  AnchalSingh,
  DikshaVermaOlevel,
  KajalHuptaCCC,
  Logo,
  NaveenKumar,
  SundramKashyapCCC,
  SaktiKumarSingh,
  KishanVerma,
  Mukesh,
  ManishKumar,
  PrachiGupta,
  HarshitaUpadhyay,
  KomalChaurasia,
  KrishnaVermaAdca,
  LalitaUpadhyay,
  AbhishekMaurya,
} from "../assets/images.js";

const studentsReviews = [
  {
    image: DikshaVermaOlevel,
    name: "Diksha Verma",
    course: "O-Level",
    text: "Proud to have completed my O-Level course. Excellent support, practical sessions, and amazing faculty.",
  },
  {
    image: AdityaChaudha,
    name: "Aditya Chaudhary",
    course: "O-Level",
    text: "The structured curriculum and real-world projects boosted my confidence and technical skills.",
  },
  {
    image: SaktiKumarSingh,
    name: "Sakti Kumar Singh",
    course: "O-Level",
    text: "The faculty is approachable and ensures deep understanding. Highly recommend for career growth.",
  },
  {
    image: KishanVerma,
    name: "Kishan Verma",
    course: "O-Level",
    text: "Supportive environment and excellent hands-on training. Great place to master computer science.",
  },
  {
    image: AnchalSingh,
    name: "Anchal Singh",
    course: "CCC",
    text: "Practical approach and helpful teachers made my learning journey smooth and enjoyable.",
  },
  {
    image: KajalHuptaCCC,
    name: "Kajal Gupta",
    course: "CCC",
    text: "The environment here motivates you to learn and grow. Teachers are very supportive.",
  },
  {
    image: NaveenKumar,
    name: "Naveen Kumar",
    course: "ADCA",
    text: "Great institute with hands-on projects. I feel more confident in my technical abilities now.",
  },
  {
    image: SundramKashyapCCC,
    name: "Sundram Kashyap",
    course: "CCC",
    text: "Learnt so much in a short time. The guidance from faculty was excellent.",
  },
  {
    image: Mukesh,
    name: "Mukesh Kumar",
    course: "O-Level",
    text: "Best place for computer learning. Teachers focus on both theory and practical knowledge.",
  },
  {
    image: ManishKumar,
    name: "Manish Kumar",
    course: "ADCA",
    text: "A great platform for beginners to start their computer journey.",
  },
  {
    image: PrachiGupta,
    name: "Prachi Gupta",
    course: "CCC",
    text: "Teachers are very friendly and always ready to solve our doubts.",
  },
  {
    image: HarshitaUpadhyay,
    name: "Harshita Upadhyay",
    course: "O-Level",
    text: "I got real-time project exposure. Really helped me prepare for jobs.",
  },
  {
    image: KomalChaurasia,
    name: "Komal Chaurasia",
    course: "CCC",
    text: "Amazing environment, supportive faculty, and career-focused guidance.",
  },
  {
    image: KrishnaVermaAdca,
    name: "Krishna Verma",
    course: "ADCA",
    text: "The ADCA course here gave me strong fundamentals and practical skills.",
  },
  {
    image: LalitaUpadhyay,
    name: "Lalita Upadhyay",
    course: "CCC",
    text: "Highly recommend this institute for anyone who wants to build a strong base in computers.",
  },
  {
    image: AbhishekMaurya,
    name: "Abhishek Maurya",
    course: "O-Level",
    text: "The quality of teaching and personal mentorship here is unmatched.",
  },
];


function Home() {

  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % studentsReviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-b-3xl shadow-lg overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={Logo}
          alt="ARCI Logo"
          className="h-44 w-44 hidden md:block drop-shadow-lg"
        />

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Aditya Rise Computer Institute
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-medium">
            Empowering students since{" "}
            <span className="font-bold">2018</span> with quality computer
            education under{" "}
            <span className="font-bold text-yellow-300">Mr. Aditya Pandey</span>
          </p>
          <p className="mt-2 font-bold">📍 BABHNAN BASTI (UP)</p>
          <p className="text-sm text-gray-100">
            1000+ students are happy to join our organization
          </p>

          <Link
            to="/register"
            className="mt-6 inline-block text-white bg-yellow-400 hover:bg-yellow-500 
            focus:ring-4 focus:ring-yellow-200 rounded-full px-8 py-3 font-semibold shadow-lg transition-transform hover:scale-105"
          >
            🚀 Register Now
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-14 px-8 text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-slate-800 mb-6"
        >
          About Our Organization
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
        >
          <span className="font-bold">Aditya Rise Institute: A Local Gem of Excellence</span>
          <br />
          Established in 2018 by the visionary educator Aditya Pandey, our
          institute has been a cornerstone of quality education in the local
          community. With expert faculty like{" "}
          <span className="text-orange-600">
            Garima Pandey, Abhay Pandey, Vinod Kumar, Priyank Jaiswal, Ravindra
            Verma, and Satyam Srivastav
          </span>
          , we ensure personalized attention and practical learning experiences
          for every student.
          <br /> <br />
          Despite being modest in size, ARCI has shaped countless futures by
          helping students excel in competitive exams and professional careers.
        </motion.p>
      </section>

      {/* Reviews Section */}
      





<section className="py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10">✨ Student Reviews</h2>

        <div className="relative flex justify-center items-center">
          <div className="w-[320px] sm:w-[380px] md:w-[420px] h-[320px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ duration: 0.9 }}
                className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center w-full"
              >
                <img
                  src={studentsReviews[index].image}
                  alt={studentsReviews[index].name}
                  className="h-28 w-28 rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 font-bold text-lg text-orange-600">
                  {studentsReviews[index].name}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {studentsReviews[index].course}
                </p>
                <p className="mt-3 text-gray-700 text-sm">{studentsReviews[index].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {studentsReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-orange-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;






