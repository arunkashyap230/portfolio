import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-4"
    >
      {/* ✅ Profile Image */}
      <motion.img
        src="/arun.jpg"
        alt="Arun Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-pink-400 shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ✅ Name & Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-tight mb-4"
      >
        Hi, I'm <span className="text-pink-400">Arun Kashyap</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl max-w-xl"
      >
        MERN Stack Developer | Java | C++ | Passionate Web Craftsman
      </motion.p>

      <motion.a
        href="/arun_resume.pdf"
        download
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        whileHover={{ scale: 1.05 }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
}

export default Hero;
