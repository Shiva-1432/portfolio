"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Globe, Cpu, Database as DbIcon, Code } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Mouse Glow */}
      <motion.div 
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none z-0"
      />
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-purple/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold tracking-wider uppercase mb-6 inline-block"
          >
            Available for Placements 2027
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-accent-purple via-indigo-400 to-accent-cyan bg-clip-text text-transparent">
              Shivakrishna
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-4">
            Cloud Enthusiast | Frontend Developer | AI-driven DB Researcher
          </p>
          
          <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
            A passionate Computer Science student focused on building scalable, 
            intelligent systems and modern web applications with a research-driven 
            approach to database optimization.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-accent-cyan hover:text-black transition-all duration-300"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/10 glass text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-accent-purple/50 bg-accent-purple/10 text-accent-purple font-semibold rounded-xl flex items-center gap-2 hover:bg-accent-purple/20 transition-all duration-300"
            >
              Download Resume
              <Download className="group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">
            {/* Main Visual: Tech Globe / Orb */}
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center group">
              <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-accent-purple/50 transition-colors duration-500 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-white/5 animate-reverse-spin-slow" />
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="absolute top-0 w-3 h-3 rounded-full bg-accent-purple blur-[2px]" />
                <div className="absolute bottom-0 w-3 h-3 rounded-full bg-accent-cyan blur-[2px]" />
              </motion.div>

              <div className="z-10 bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Cpu size={80} className="text-accent-purple mb-4" />
                </motion.div>
                <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Cloud Native</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute top-10 right-4 px-4 py-2 glass border-accent-purple/50 bg-black/40 backdrop-blur-xl rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <DbIcon size={16} className="text-accent-purple" />
              AI-DBMS
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear", delay: 1 }}
              className="absolute bottom-10 left-4 px-4 py-2 glass border-accent-cyan/50 bg-black/40 backdrop-blur-xl rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <Code size={16} className="text-accent-cyan" />
              Next.js Expert
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

    </section>
  );
}
