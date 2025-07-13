import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 text-center bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300">
        I'm a passionate Full Stack Developer with experience building dynamic
        web apps using React, Node.js, MongoDB, and Express.js. From mutual fund
        management tools to e-commerce platforms, I love creating elegant
        solutions for complex problems.
      </p>
    </motion.section>
  );
}

export default About;
