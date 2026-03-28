"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech (CSE – Cloud Native Software)",
    institution: "Koneru Lakshmaiah Educational Foundation",
    duration: "2023 – 2027",
    score: "CGPA: 8.94",
    status: "Current"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "SR Junior College",
    duration: "2021 – 2023",
    score: "CGPA: 8.14",
    status: "Completed"
  },
  {
    degree: "10th (SSC)",
    institution: "Shine High School",
    duration: "2020 – 2021",
    score: "CGPA: 10.0",
    status: "Completed"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-bold text-accent-cyan mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Academic <span className="text-gray-400">Foundation</span>
          </motion.h3>
        </div>

        {/* Timeline Spine */}
        <div className="relative">
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple/50 via-white/10 to-transparent" />

          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative mb-16 flex flex-col md:flex-row items-center justify-between w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Center Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.15) }}
                className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent-purple z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform" 
              />

              {/* Offset Spacer for symmetry */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] glass p-8 hover:border-accent-cyan/50 transition-all duration-500 group relative z-0`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    item.status === "Current" ? "bg-accent-cyan/20 text-accent-cyan" : "bg-white/10 text-gray-400"
                  }`}>
                    {item.status}
                  </span>
                  <div className="text-gray-500 flex items-center gap-1.5 text-xs font-medium">
                    <Calendar size={12} className="text-accent-purple" />
                    {item.duration}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-1 group-hover:text-accent-cyan transition-colors">{item.degree}</h4>
                <p className="text-gray-400 text-sm font-light mb-5">{item.institution}</p>
                
                <div className="flex items-center gap-2 text-white font-bold bg-white/5 py-2 px-4 rounded-lg w-fit border border-white/5 group-hover:border-accent-purple/30 transition-colors">
                  <Award size={16} className="text-accent-purple" />
                  {item.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
