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
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
        Experience
      </h2>

      <div className="relative border-l-4 border-pink-500 max-w-3xl mx-auto pl-6 space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <span className="absolute left-[-11px] top-2 w-5 h-5 rounded-full bg-pink-500 border-4 border-black"></span>
            <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow hover:shadow-pink-500/40 transition">
              <h3 className="text-xl font-semibold text-pink-300">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-300">
                {exp.company} • {exp.duration}
              </p>
              <p className="mt-2 text-gray-200">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
