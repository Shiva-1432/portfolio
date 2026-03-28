"use client";

import { motion } from "framer-motion";
import { Cloud, Code, Database, Award, Brain, Rocket, ShieldCheck } from "lucide-react";

const aboutHighlights = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Architecting high-availability systems with a focus on containerization and microservices.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10"
  },
  {
    icon: Database,
    title: "Cognitive DBMS",
    description: "Deep research in self-optimizing databases using Deep Reinforcement Learning (DRL) models.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10"
  },
  {
    icon: Code,
    title: "Full-Stack Precision",
    description: "Building performance-critical interfaces with Next.js and robust backend services in Python & Node.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  },
  {
    icon: ShieldCheck,
    title: "Scalable Security",
    description: "Implementing secure authentication and data protection protocols across the software stack.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-[0.02] text-[15rem] font-black whitespace-nowrap hidden lg:block">
        INNOVATION ENGINEER
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.4em] font-bold text-accent-cyan mb-4 inline-block"
              >
                The Profile
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Architecting <span className="text-accent-purple italic font-serif">Intelligent</span> <br /> 
                Scalable Ecosystems
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>
                I am a Computer Science Engineering student specialized in <span className="text-white font-medium">Cloud Native Software Architecture</span>. My engineering philosophy is built at the intersection of extreme scalability and research-driven optimization.
              </p>
              
              <p>
                With a current focus on <span className="text-accent-cyan font-medium underline underline-offset-4 decoration-accent-cyan/30">Reinforcement Learning-based DBMS optimization</span>, I am working to eliminate the latency bottleneck in modern hybrid cloud environments by creating self-healing database systems.
              </p>
            </div>

            {/* Premium Stat Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 glass relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/10 blur-3xl -z-10" />
                <Award className="text-accent-purple mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-white font-bold text-3xl mb-1 flex items-center gap-2">
                  8.94 <span className="text-xs px-2 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple">CGPA</span>
                </h4>
                <p className="text-gray-500 text-sm font-medium">Academic Excellence</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 glass relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/10 blur-3xl -z-10" />
                <Brain className="text-accent-cyan mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-white font-bold text-3xl mb-1">3+ <span className="text-xs px-2 py-0.5 rounded-full bg-accent-cyan/20 text-accent-cyan">Major</span></h4>
                <p className="text-gray-500 text-sm font-medium">Research Projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Grid Highlights */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
