import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // 🌙 Dark Mode

  return (
    <div className={`flex ${darkMode ? "dark" : ""}`}>
      <Sidebar isOpen={sidebarOpen} />

      <main
        className={`flex-1 font-sans transition-all duration-300 ${
          sidebarOpen ? "ml-56" : "ml-0"
        } ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-br from-white to-gray-100 text-black"
        }`}
      >
        {/* 🔘 Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* 🌙 Light/Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* 📄 Main Content */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
