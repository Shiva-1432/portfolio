"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative border border-gray-800 p-6 rounded-xl transition overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition" />

      <h3 className="text-xl font-semibold relative z-10">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-2 relative z-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4 relative z-10">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs border border-gray-700 px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 relative z-10">
        <a href="#" target="_blank" className="text-sm hover:underline">
          Live
        </a>
        <a href="#" target="_blank" className="text-sm hover:underline">
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
