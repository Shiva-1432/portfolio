"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MedShift AI",
    description: "AI-powered healthcare shift management system.",
    tech: ["Next.js", "Node.js", "AI"],
  },
  {
    title: "Cloud Monitoring Dashboard",
    description: "Real-time monitoring dashboard for cloud systems.",
    tech: ["AWS", "Next.js"],
  },
  {
    title: "ApnaResume",
    description: "AI-based resume parser and analyzer.",
    tech: ["React", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;
