"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("a") || 
        target.closest("button") || 
        target.tagName.toLowerCase() === "button" ||
        target.classList.contains("cursor-pointer");
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Technical Crosshair (+) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 w-4 h-4 flex items-center justify-center"
      >
        <div className="absolute w-full h-[1px] bg-accent-purple/60" />
        <div className="absolute h-full w-[1px] bg-accent-purple/60" />
        <div className="w-1 h-1 bg-accent-purple rounded-full shadow-[0_0_8px_#a855f7]" />
      </motion.div>

      {/* Fluid Ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 0.35 : 0,
        }}
        className="fixed top-0 left-0 w-8 h-8 border border-accent-purple rounded-full z-[9998] pointer-events-none transition-all duration-300 ease-out"
      />

      {/* Interactive Glow when Hovering */}
      {isHovering && (
        <motion.div
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="fixed top-0 left-0 w-12 h-12 bg-accent-purple/10 blur-xl rounded-full z-[9997] pointer-events-none"
        />
      )}
    </>
  );
}
