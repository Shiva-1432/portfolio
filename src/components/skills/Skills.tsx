"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Layout, Database, Wrench, Binary, Cpu, Layers, PencilRuler } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const skillCategories = [
  {
    title: "AI & Data Research",
    icon: Binary,
    skills: ["RL-Optimization", "ML Models", "Python", "Data Structures"],
    color: "accent-purple"
  },
  {
    title: "Cloud & DevOps",
    icon: Layers,
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Linux"],
    color: "accent-cyan"
  },
  {
    title: "Core Infrastructure",
    icon: Cpu,
    skills: ["DBMS Internals", "Operating Systems", "Networking", "C/C++"],
    color: "indigo-400"
  },
  {
    title: "Engineering Stack",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    color: "blue-400"
  }
];

function SkillCard({ category, i }: { category: typeof skillCategories[0], i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass p-6 md:p-8 group hover:border-accent-purple/50 transition-colors duration-500 relative overflow-hidden perspective-1000"
    >
      {/* 3D Depth Elements */}
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"
      >
        <category.icon size={80} />
      </div>
      
      <div style={{ transform: "translateZ(40px)" }} className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple group-hover:text-black transition-all duration-300`}>
          <category.icon size={24} md-size={28} />
        </div>
        <h4 className="text-lg md:text-xl font-bold tracking-tight">{category.title}</h4>
      </div>

      <motion.div 
        style={{ transform: "translateZ(20px)" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 }
            }}
            className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-xs font-semibold text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-black/80 relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-purple/5 blur-[100px] md:blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent-cyan/5 blur-[100px] md:blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-bold text-accent-cyan mb-4"
          >
            Engineering Architecture
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black"
          >
            Technical <span className="bg-gradient-to-r from-accent-purple to-[#818cf8] bg-clip-text text-transparent">Pillars</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-6 max-w-xl text-sm md:text-lg font-light leading-relaxed px-4"
          >
            A intersection of research-driven algorithms, 
            resilient cloud infrastructure, and performance interfaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} i={i} />
          ))}
        </div>

      </div>

    </section>
  );
}


