"use client";

import { motion } from "framer-motion";
import { X, CheckCircle2, Cpu, Zap, Target } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

interface Project {
  title: string;
  description: string;
  challenge: string;
  architecture: string[];
  outcome: string;
  tags: string[];
  icon: any;
  color: string;
  glow: string;
  github: string;
  live: string;
}

export default function CaseStudyCard({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        layoutId={`project-${project.title}`}
        className="relative w-full max-w-4xl max-h-[90vh] glass border-white/20 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* Sidebar/Image Area */}
        <div className={`w-full md:w-1/3 bg-gradient-to-br ${project.color} p-12 flex flex-col items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          
          <motion.div 
            layoutId={`icon-${project.title}`}
            className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl border border-white/30"
          >
            <project.icon className="text-white" size={48} />
          </motion.div>
          <h2 className="text-3xl font-bold text-white text-center">{project.title}</h2>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-gray-900/50">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>

          {/* Core Content */}
          <div className="space-y-12">
            
            {/* Challenge */}
            <section>
              <div className="flex items-center gap-3 mb-4 text-accent-purple">
                <Target size={20} />
                <h3 className="text-lg font-bold uppercase tracking-widest">The Challenge</h3>
              </div>
              <p className="text-gray-300 leading-relaxed italic border-l-2 border-accent-purple/30 pl-6">
                "{project.challenge}"
              </p>
            </section>

            {/* Architecture */}
            <section>
              <div className="flex items-center gap-3 mb-6 text-accent-cyan">
                <Cpu size={20} />
                <h3 className="text-lg font-bold uppercase tracking-widest">Technical Architecture</h3>
              </div>
              <ArchitectureDiagram steps={project.architecture} color={project.color} />
            </section>

            {/* Outcome */}
            <section>
              <div className="flex items-center gap-3 mb-4 text-green-400">
                <Zap size={20} />
                <h3 className="text-lg font-bold uppercase tracking-widest">The Outcome</h3>
              </div>
              <div className="p-6 rounded-2xl bg-green-400/5 border border-green-400/20 flex items-start gap-4">
                <CheckCircle2 size={24} className="text-green-400 shrink-0 mt-1" />
                <p className="text-gray-300 font-medium leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </section>

            <div className="flex gap-4 pt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass border-white/10 hover:bg-white/5 transition-colors text-sm font-bold flex-1 text-center">
                Review Codebase
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-black hover:bg-accent-cyan transition-colors text-sm font-bold flex-1 text-center">
                Launch Live Demo
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
