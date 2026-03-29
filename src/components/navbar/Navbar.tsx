"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/common/Magnetic";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between md:justify-start gap-4 md:gap-8 px-6 md:px-8 py-3 rounded-full border border-white/5",
          isScrolled 
            ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-95 w-[90%] md:w-auto" 
            : "bg-transparent border-transparent w-full md:w-auto"
        )}
      >
        <Magnetic strength={0.2}>
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent cursor-pointer">
            SK.
          </a>
        </Magnetic>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.2}>
              <a
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] font-bold transition-all px-4 py-2 rounded-full relative",
                  activeSection === link.href.substring(1) ? "text-white" : "text-gray-500 hover:text-gray-300"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeNavHUD"
                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                     <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  </motion.div>
                )}
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Action Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/10">
          <Magnetic strength={0.4}>
            <a href="https://github.com/Shiva-1432" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-colors">
              <GithubIcon />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a href="https://www.linkedin.com/in/podishetti-shiva-krishna-48978b333/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-colors">
              <LinkedinIcon />
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-400 p-1"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/60 pointer-events-auto md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-3xl font-bold uppercase tracking-[0.2em] transition-colors",
                  activeSection === link.href.substring(1) ? "text-accent-cyan" : "text-white/50"
                )}
              >
                {link.name}
              </motion.a>
            ))}
            
            <div className="flex items-center gap-8 mt-12 pt-12 border-t border-white/10 w-1/2 justify-center">
              <a href="https://github.com/Shiva-1432" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/podishetti-shiva-krishna-48978b333/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Line HUD */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 overflow-hidden">
        <motion.div
          className="h-full bg-accent-purple origin-left"
          style={{ scaleX }}
        />
      </div>
    </header>
  );
}


