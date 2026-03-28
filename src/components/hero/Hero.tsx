"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import Magnetic from "@/components/common/Magnetic";

const roles = [
  "Cloud Enthusiast",
  "Frontend Developer",
  "AI-driven DB Researcher"
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden text-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer: Tech Orb & Glows */}
      <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Main Dynamic Mouse Glow */}
        <motion.div 
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          className="absolute w-[800px] h-[800px] bg-accent-purple/5 blur-[120px] rounded-full z-0"
        />

        {/* Diffuse Atmospheric Glow */}
        <motion.div 
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          className="absolute w-[1200px] h-[1200px] bg-indigo-500/5 blur-[200px] rounded-full z-0"
        />
        
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse" />

        {/* The Orb visual as background element */}
        <div className="relative w-[600px] h-[600px] flex items-center justify-center opacity-40">
          <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow scale-150" />
          <div className="absolute inset-20 border border-accent-purple/10 rounded-full animate-reverse-spin-slow" />
          <div className="absolute inset-40 border border-white/5 rounded-full animate-spin-slow scale-110" />
        </div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: yContent }}
        className="relative z-10 max-w-5xl px-6 flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 text-white px-2">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-[#818cf8] to-accent-cyan bg-[length:200%_auto] animate-gradient whitespace-nowrap drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Podishetti Shiva Krishna
            </span>
          </span>
        </h1>
        
        <div className="h-10 overflow-hidden flex items-center mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-xl md:text-3xl text-gray-400 font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>


        
        <p className="text-gray-400/80 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light">
          Building scalable intelligent systems with a research-driven 
          approach to database optimization and modern cloud architectures.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Magnetic strength={0.2}>
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 hover:bg-accent-cyan transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Explore Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <a 
              href="/resume.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 border border-white/10 glass text-white font-semibold rounded-full flex items-center gap-3 hover:bg-white/5 transition-all duration-300"
            >
              Resume
              <Download className="group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </Magnetic>
        </div>
      </motion.div>

      {/* Centered Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-purple to-transparent" />
      </motion.div>

    </section>
  );
}
