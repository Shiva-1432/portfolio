"use client";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/Hero";
import AboutSection from "@/components/about/About";
import SkillsSection from "@/components/skills/Skills";
import ProjectsSection from "@/components/projects/Projects";
import EducationSection from "@/components/education/Education";
import LeadershipSection from "@/components/leadership/Leadership";
import ContactSection from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <LeadershipSection />
        <ContactSection />
      </div>

      {/* Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
