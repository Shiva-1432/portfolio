"use client";

import { motion } from "framer-motion";
import { Cloud, Code, Database, Target } from "lucide-react";

const aboutHighlights = [
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Focus on building and deploying scalable systems using modern cloud architectures.",
    color: "text-accent-cyan"
  },
  {
    icon: Database,
    title: "Research Driven",
    description: "Strong interest in AI-based database optimization and Reinforcement Learning.",
    color: "text-accent-purple"
  },
  {
    icon: Code,
    title: "Modern Frontend",
    description: "Expertise in building responsive, high-performance UIs using React and Next.js.",
    color: "text-indigo-400"
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Analytical mindset focused on efficient algorithms and clean code architecture.",
    color: "text-blue-400"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-accent-purple mb-4">About Me</h2>
            <h3 className="text-4xl font-bold mb-8">Architecting the <span className="text-gray-400">Future</span> of Cloud and Web</h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Computer Science Engineering student specialized in **Cloud Native Software** with a 
              deep passion for creating intelligent, scalable applications. My journey is driven by 
              a curiosity to understand how backend power meets frontend elegance.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Currently, I'm focusing on **Reinforcement Learning-based DBMS optimization** to reduce latency 
              and improve resource allocation in hybrid cloud environments. My goal is to bridge the 
              gap between complex research findings and real-world software solutions.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold text-2xl mb-1">8.94</h4>
                <p className="text-gray-500 text-sm">Target CGPA</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl mb-1">Placement</h4>
                <p className="text-gray-500 text-sm">Ready 2027</p>
              </div>
            </div>
          </motion.div>

          {/* Grid Highlights */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 glass-hover group"
              >
                <item.icon className={`mb-4 w-8 h-8 ${item.color} group-hover:scale-110 transition-transform`} />
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
