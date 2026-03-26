"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Shivaaa
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-400 max-w-xl"
      >
        Cloud & Backend Developer building scalable systems with AWS, Docker & Next.js.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition"
        >
          Download Resume
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
