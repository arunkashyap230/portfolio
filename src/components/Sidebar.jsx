// Sidebar.jsx
import React from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="h-screen w-56 fixed top-0 left-0 bg-gray-900 text-white dark:bg-white dark:text-black flex flex-col items-center py-10 shadow-lg z-50"
        >
          {/* ✅ Profile Image */}
          <img
            src="/arun.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-pink-400 shadow-lg"
          />

          {/* ✅ Name */}
          <h1 className="text-2xl font-bold mb-10 text-pink-400">Arun</h1>

          {/* ✅ Menu List */}
          <ul className="space-y-6 text-lg">
            {["hero", "about", "projects", "contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-pink-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
