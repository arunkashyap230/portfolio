import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl text-center max-w-3xl w-full"
      >
        {/* 👤 Avatar */}
        <motion.img
          src="/arun.jpg"
          alt="Arun"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-pink-500 shadow-lg mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* 🧑‍💼 Name & Role */}
        <h1 className="text-4xl font-bold text-pink-400">Arun Kashyap</h1>
        <p className="text-gray-200 text-lg mt-2 mb-6">
          Full Stack Developer (MERN + Java)
        </p>

        {/* 🔘 Resume Button */}
        <motion.a
          href="https://drive.google.com/uc?export=download&id=16bLKcH0Ra97mOU_z-6wI2lrg11hgEUmF"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          📄 Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
