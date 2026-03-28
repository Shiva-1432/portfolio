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

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-purple border-4 border-black z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] glass p-6 hover:border-accent-cyan/50 transition-all duration-300 ${
                i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    item.status === "Current" ? "bg-accent-cyan/20 text-accent-cyan" : "bg-white/10 text-gray-400"
                  }`}>
                    {item.status}
                  </span>
                  <div className="text-gray-500 flex items-center gap-1 text-xs">
                    <Calendar size={12} />
                    {item.duration}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                <p className="text-accent-purple text-sm font-medium mb-4">{item.institution}</p>
                
                <div className="flex items-center gap-2 text-white font-bold bg-white/5 py-2 px-4 rounded-lg w-fit">
                  <Award size={16} className="text-accent-cyan" />
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
