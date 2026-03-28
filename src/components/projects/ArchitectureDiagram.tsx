"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ArchitectureDiagram({ 
  steps, 
  color 
}: { 
  steps: string[]; 
  color: string;
}) {
  return (
    <div className="relative py-4 space-y-6">
      {steps.map((step, i) => (
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="flex flex-col items-center"
        >
          <div className={`w-full p-4 glass border-white/10 hover:border-white/30 transition-all duration-300 rounded-xl flex items-center gap-4 group relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent`}>
            {/* Visual Indicator of Layer Number */}
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-[10px] font-bold text-white shadow-lg`}>
              0{i + 1}
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase group-hover:text-white transition-colors">{step}</span>
            <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          </div>
          
          {i < steps.length - 1 && (
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="py-2 text-gray-600"
            >
              <ArrowDown size={16} />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
