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
      className="py-20 px-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
        Experience
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-800/70 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/40 transition"
          >
            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-pink-400 font-semibold">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
