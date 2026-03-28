"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Layout, Database, Wrench, Binary, Cpu, Layers, PencilRuler } from "lucide-react";
import { useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const skillCategories = [
  {
    title: "Programming",
    icon: Binary,
    skills: ["C", "JavaScript", "TypeScript", "Python"],
    color: "accent-purple"
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "accent-cyan"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Linux", "Docker", "Vercel", "GitHub Actions"],
    color: "indigo-400"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "Redis", "RL-Optimization", "PostgreSQL"],
    color: "blue-400"
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["DSA", "Operating Systems", "DBMS", "Computer Networks"],
    color: "purple-400"
  }
];

function SkillCard({ category, i }: { category: typeof skillCategories[0], i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
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
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass p-8 group hover:border-accent-purple/50 transition-colors duration-500 relative overflow-hidden perspective-1000"
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
          <category.icon size={28} />
        </div>
        <h4 className="text-xl font-bold tracking-tight">{category.title}</h4>
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
        className="flex flex-wrap gap-2.5"
      >
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 }
            }}
            className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs font-semibold text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all"
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
    <section id="skills" className="py-32 bg-black/80 relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.5em] font-bold text-accent-cyan mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center"
          >
            My <span className="bg-gradient-to-r from-accent-purple to-[#818cf8] bg-clip-text text-transparent">Arsenal</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} i={i} />
          ))}
        </div>

      </div>

    </section>
  );
}
