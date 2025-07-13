import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-center bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-6">Get In Touch</h2>
      <p className="text-lg text-gray-300 mb-6">
        Interested in collaborating or hiring? Drop me a line!
      </p>
      <motion.a
        href="mailto:arunkashyap230@gmail.com"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        Say Hello
      </motion.a>
    </motion.section>
  );
}

export default Contact;
