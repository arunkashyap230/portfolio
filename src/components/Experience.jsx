// Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer",
    company: "Raghunandan Money Pvt Ltd",
    duration: "Dec 2024 – Present",
    description:
      "Developing and maintaining web applications using MERN stack technologies for financial services.",
  },
  {
    title: "Web Developer",
    company: "RRP Traders",
    duration: "Jul 2024 – Sep 2024",
    description:
      "Built and maintained a full-stack e-commerce site for printer sales with admin panel.",
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Career Compiler",
    duration: "2023",
    description:
      "Implemented a CRUD App project using MERN Stack during internship.",
  },
  {
    title: "Web Developer Intern",
    company: "Bharat Intern",
    duration: "2023",
    description:
      "Built Temperature Converter App and Netflix Landing Page clone.",
  },
  {
    title: "Full Stack Intern",
    company: "PREGRAD",
    duration: "2023",
    description:
      "Completed various frontend-backend integrated modules using JavaScript and MongoDB.",
  },
];

function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center text-pink-400 mb-16">
        Experience
      </h2>

      <div className="relative border-l-4 border-pink-500 max-w-3xl mx-auto pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-pink-500 border-4 border-black group-hover:scale-110 transition-transform"></span>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-pink-500/30 p-6 hover:shadow-pink-500/40 transition">
              <h3 className="text-2xl font-semibold text-pink-300 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-300 text-sm font-medium mb-1">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-200 text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
