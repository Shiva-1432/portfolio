"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 pointer-events-none"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold"
      >
        Shivaaa
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
