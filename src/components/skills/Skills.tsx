"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Database, Wrench, Binary, Cpu, Layers, PencilRuler } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const skillCategories = [
  {
    title: "Programming",
    icon: Binary,
    skills: ["C", "JavaScript"],
    color: "accent-purple"
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    color: "accent-cyan"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Linux", "Docker"],
    color: "indigo-400"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "Redis", "RL-Optimization"],
    color: "blue-400"
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: ["DSA", "Operating Systems", "DBMS", "Software Engineering"],
    color: "purple-400"
  }
];

function SkillCard({ category, i }: { category: typeof skillCategories[0], i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="glass p-6 group hover:border-accent-purple/50 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <category.icon size={64} />
      </div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
          <category.icon size={24} />
        </div>
        <h4 className="text-xl font-bold">{category.title}</h4>
      </div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
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
              hidden: { opacity: 0, scale: 0.5 },
              show: { opacity: 1, scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 group-hover:text-white transition-colors"
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
    <section id="skills" className="py-24 bg-black/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-bold text-accent-cyan mb-4"
          >
            Technical Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            My <span className="text-gray-400">Arsenel</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
