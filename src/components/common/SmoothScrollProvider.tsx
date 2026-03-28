"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // We've disabled JS smooth scrolling (Lenis) to fix the input delay.
  // The app will now use native, zero-delay browser scrolling!
  useEffect(() => {
    // Intentionally empty. 
    // Smooth scrolling is still handled natively via scroll-behavior: smooth in our CSS.
  }, []);

  return <>{children}</>;
}
