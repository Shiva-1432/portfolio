"use client";

import { motion } from "framer-motion";
import { Mail, Code, ExternalLink, Send } from "lucide-react";

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:shiva@example.com", color: "text-red-400" },
  {
    name: "LinkedIn",
    icon: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    href: "https://linkedin.com",
    color: "text-blue-400"
  },
  {
    name: "GitHub",
    icon: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    href: "https://github.com",
    color: "text-white"
  },
  {
    name: "CodeChef",
    icon: Code,
    href: "https://codechef.com",
    color: "text-orange-400"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/50">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-accent-cyan mb-4 line-clamp-1">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's <span className="text-gray-400">Connect</span></h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
              Whether you have a question about my research, or just want to discuss
              the latest in cloud technology, I'm always open to connecting.
            </p>

            <div className="flex flex-col gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group gap-4 p-4 glass hover:bg-white/5 transition-all duration-300 rounded-xl"
                >
                  <div className={`p-3 rounded-lg bg-black/50 ${link.color} group-hover:scale-110 transition-transform`}>
                    {(() => {
                      const Icon = link.icon as any;
                      return typeof Icon === "function" ? (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Icon />
                        </div>
                      ) : (
                        <Icon size={24} />
                      );
                    })()}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{link.name}</p>
                    <p className="text-white font-medium">Connect with me</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-accent-cyan transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 bg-black/30 backdrop-blur-3xl border-white/10"
          >
            <form action="https://formspree.io/f/xreoeyqd" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 glass bg-black/40 border-white/5 focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full p-4 glass bg-black/40 border-white/5 focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full p-4 glass bg-black/40 border-white/5 focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/50 outline-none transition-all placeholder:text-gray-700 resize-none"
                />
              </div>

              <button type="submit" className="w-full py-5 bg-gradient-to-r from-accent-purple to-indigo-600 rounded-xl font-bold flex items-center justify-center gap-3 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all duration-300">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>

      </div>

      <footer className="mt-24 border-t border-white/5 py-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Podishetti Shivakrishna</p>
      </footer>
    </section>
  );
}
