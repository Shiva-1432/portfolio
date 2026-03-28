"use client";

import { motion } from "framer-motion";
import { Users, Globe, Trophy, ShieldCheck } from "lucide-react";

const leadershipRoles = [
  {
    icon: Users,
    title: "Team Management",
    description: "Managed team coordination and planning for university-level events."
  },
  {
    icon: Globe,
    title: "Cultural Awareness",
    description: "Promoted cultural heritage awareness through tourism initiatives."
  },
  {
    icon: Trophy,
    title: "Event Organization",
    description: "Successfully organized and executed large-scale campus events."
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex-1 w-full"
          >
            <div className="flex items-center gap-2 text-accent-cyan mb-4">
              <ShieldCheck size={20} />
              <span className="text-sm uppercase tracking-[0.3em] font-bold">Leadership & Responsibility</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vice President <br />
              <span className="text-accent-purple">Yuva Tourism Club</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Serving as Vice President for the academic year 2024–2025, I lead a diverse team 
              in promoting sustainable tourism and cultural exploration. My role involves 
              strategic planning, event coordination, and fostering leadership within the club.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {leadershipRoles.map((role, i) => (
                <div key={role.title} className="p-4 glass hover:border-accent-purple/50 transition-colors">
                  <role.icon className="text-accent-cyan mb-3" size={24} />
                  <h4 className="text-white font-bold text-sm mb-1">{role.title}</h4>
                  <p className="text-gray-500 text-xs">{role.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex-1 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract Leadership Visual */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border border-accent-purple/20 rounded-full animate-reverse-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 glass rounded-2xl flex flex-col items-center justify-center gap-4 text-center p-6 shadow-2xl">
                  <Trophy size={48} className="text-accent-cyan" />
                  <div>
                    <p className="text-accent-purple font-bold text-lg">2024 - 2025</p>
                    <p className="text-gray-500 text-xs">Active Tenure</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-0 right-0 glass shadow-2xl p-4 animate-float">
                <p className="text-white font-bold text-sm">Strategic Planner</p>
              </div>
              <div className="absolute bottom-10 left-0 glass shadow-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-white font-bold text-sm">Team Leader</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
