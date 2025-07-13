// Sidebar.jsx
import React from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Sidebar({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="h-screen w-64 fixed top-0 left-0 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-10 shadow-2xl z-50 backdrop-blur-md bg-opacity-70"
        >
          {/* ✅ Profile Image */}
          <img
            src="/arun.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-pink-400 shadow-lg"
          />

          {/* ✅ Name & Title */}
          <h1 className="text-2xl font-bold text-pink-400">Arun</h1>
          <p className="text-sm text-gray-400 mb-10">Full Stack Developer</p>

          {/* ✅ Menu List */}
          <ul className="space-y-6 text-lg w-full px-6">
            {["home", "about", "projects", "contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item}
                  smooth
                  duration={500}
                  className="block py-2 px-4 rounded hover:bg-pink-600 hover:text-white transition cursor-pointer text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* ✅ Social Links */}
          <div className="mt-auto flex space-x-4 pb-8">
            <a
              href="https://github.com/arunkashyap230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arun-kashyap-820411155/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
