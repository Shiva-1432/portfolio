"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const ParallaxSection = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  const { scrollY } = useScroll();

  // Background moves slower
  const y = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section id={id} className="relative overflow-hidden py-24">

      {/* Background Layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 blur-3xl"
      />

      {/* Content Layer */}
      <div className="relative z-10 px-6 md:px-20">
        {children}
      </div>

    </section>
  );
};

export default ParallaxSection;
