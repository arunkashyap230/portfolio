import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
    github: "https://github.com/arunkashyap230/PersonalFinanceTracker",
  },
  {
    title: "Online Printer eKart",
    description: "E-commerce platform for printers built with MERN Stack.",
    link: "https://github.com/arunkashyap230",
    github: "https://github.com/arunkashyap230",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "Mutual Fund Management System",
    description:
      "Client data management app with PAN verification and WhatsApp integration.",
    link: "https://github.com/arunkashyap230",
    github: "https://github.com/arunkashyap230",
    tech: ["Node.js", "MongoDB", "Twilio", "JWT"],
  },
  {
    title: "Quiz Game",
    description:
      "MCQ-based quiz game with score calculation (Node.js, Express, MongoDB).",
    link: "https://github.com/arunkashyap230/Quiz_Game_HCST",
    github: "https://github.com/arunkashyap230/Quiz_Game_HCST",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-900 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-12">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl text-left p-6 shadow-xl border border-pink-500/20"
          >
            <h3 className="text-2xl font-bold text-pink-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3">{project.description}</p>

            {/* 🏷 Tech Stack */}
            {project.tech && (
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-600/30 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* 🔗 Action Links */}
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
