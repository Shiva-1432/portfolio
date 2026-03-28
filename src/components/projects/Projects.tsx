"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Database, Hospital, FileText, ChevronRight } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

const projects = [
  {
    title: "RL-DBMS",
    description: "Reinforcement Learning–based database optimization for hybrid cloud systems. Focused on latency reduction and resource scalability.",
    challenge: "Traditional DBMS optimization struggles with dynamic hybrid cloud workloads, leading to inefficient resource allocation and high wait times.",
    architecture: ["RL Agent", "Query Monitor", "State Analyzer", "Policy Optimizer"],
    outcome: "Achieved significant reduction in query latency and improved resource throughput on complex join operations.",
    tags: ["Research", "AI", "Cloud", "Python"],
    icon: Database,
    color: "from-accent-purple to-indigo-600",
    glow: "rgba(168, 85, 247, 0.4)",
    github: "#",
    live: "#"
  },
  {
    title: "MedShift AI",
    description: "AI-powered healthcare workflow system designed for hospital efficiency and patient care automation.",
    challenge: "Hospital administrative systems are often fragmented, causing delays in patient processing and redundant data entry for healthcare workers.",
    architecture: ["FastAPI Backend", "Next.js Dashboard", "ML Diagnosis Engine", "Secure Patient Vault"],
    outcome: "Reduced patient processing time by automating workflow tasks and integrating diagnostic AI directly into the nurse terminal.",
    tags: ["AI", "Healthcare", "Next.js", "FastAPI"],
    icon: Hospital,
    color: "from-accent-cyan to-blue-600",
    glow: "rgba(34, 211, 238, 0.4)",
    github: "#",
    live: "#"
  },
  {
    title: "ApnaResume",
    description: "Modern resume-building platform with smart analysis and professional templates for job seekers.",
    challenge: "Job seekers struggle with ATS-compliant formatting and optimizing their content for specific engineering roles.",
    architecture: ["Next.js App Router", "Tailwind Design System", "PDF Exporter", "ATS Analyzer Service"],
    outcome: "Empowered hundreds of students to create high-impact, ATS-friendly resumes with zero design friction.",
    tags: ["Web App", "Frontend", "React", "Node.js"],
    icon: FileText,
    color: "from-blue-500 to-accent-cyan",
    glow: "rgba(59, 130, 246, 0.4)",
    github: "#",
    live: "#"
  }
];

function ProjectCard({ 
  project, 
  i, 
  onOpen 
}: { 
  project: typeof projects[0], 
  i: number, 
  onOpen: () => void 
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col glass group cursor-default"
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-3xl -z-10"
        style={{ background: project.glow }}
      />

      <div className="p-8 h-full flex flex-col" style={{ transform: "translateZ(75px)" }}>
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-xl`}>
          <project.icon className="text-white" size={28} />
        </div>

        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-wider text-accent-cyan">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 px-4 py-2 glass border-white/10 text-center text-xs font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Github
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 px-4 py-2 glass border-white/10 text-center text-xs font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} /> Demo
            </a>
          </div>
          
          <button 
            onClick={onOpen}
            className="w-full py-2 bg-white text-black text-xs font-bold hover:bg-accent-cyan transition-colors flex items-center justify-center gap-2"
          >
            View Case Study
            <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent-cyan mb-4"
            >
              <Sparkles size={18} />
              <span className="text-sm uppercase tracking-[0.3em] font-bold">Featured Works</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold"
            >
              Projects That <br />
              <span className="text-gray-400">Define My Craft</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm"
          >
            A collection of engineering challenges, from AI-driven databases to full-scale platform builds.
          </motion.p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              i={i} 
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <CaseStudyCard 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
