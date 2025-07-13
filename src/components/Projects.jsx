import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Finance Tracker+",
    description:
      "A full-stack finance management app where users can track expenses, set budgets, and view visual spending reports. Includes Python-based smart suggestions using Pandas.",
    features: [
      "User login with personalized dashboards",
      "Add/edit/delete expenses with filters and search",
      "Set category-wise budgets with alerts",
      "Dashboard with pie and line charts (Chart.js)",
      "Python service to generate AI-powered tips on spending behavior",
    ],
    tech: ["React", "Node.js", "MongoDB", "Flask", "Pandas", "Chart.js"],
    link: "https://github.com/arunkashyap230/PersonalFinanceTracker",
  },
  {
    title: "Online Printer eKart",
    description: "E-commerce platform for printers built with MERN Stack.",
    link: "https://github.com/arunkashyap230",
  },
  {
    title: "Mutual Fund Management System",
    description:
      "Client data management app with PAN verification and WhatsApp integration.",
    link: "https://github.com/arunkashyap230",
  },
  {
    title: "Quiz Game",
    description:
      "MCQ-based quiz game with score calculation (Node.js, Express, MongoDB).",
    link: "https://github.com/arunkashyap230/Quiz_Game_HCST",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 text-center bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-pink-500/50 transition transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
