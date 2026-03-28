"use client";

import { motion } from "framer-motion";
import React from "react";

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 md:px-20"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
