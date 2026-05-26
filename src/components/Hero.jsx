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

        <p className="text-pink-200 text-lg mt-3 font-medium">
          Full Stack Developer (MERN Stack + Java)
        </p>

        {/* ✨ About / Role */}
        <p className="text-gray-200 mt-5 leading-8 text-[16px]">
          Full Stack Developer with experience in building scalable web
          applications using React.js, Node.js, Express.js, and MongoDB. Worked
          on ERP systems, Mutual Fund Management platforms, and E-Commerce
          applications with features like authentication, role-based access
          control, REST APIs, dashboards, and payment integrations. Passionate
          about creating responsive, user-friendly, and performance-driven
          applications.
        </p>

        {/* 🚀 Skills */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Java",
            "REST APIs",
            "JWT Auth",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-pink-500/20 border border-pink-400 text-pink-200 px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 🔘 Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1Lf_oVRmi0H25mNQf66ebCE5lJ4AKdzK9/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          📄 Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
