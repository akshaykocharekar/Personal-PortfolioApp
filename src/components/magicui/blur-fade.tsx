// src/components/magicui/blur-fade.tsx

"use client";

import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
  scale?: number;
  inViewMargin?: `${number}px` | `${number}%`; // <-- Proper typing
}

export function BlurFade({
  children,
  className,
  duration = 0.6,
  delay = 0,
  y = 0,
  scale = 1,
  inViewMargin = "-100px",
}: BlurFadeProps) {
  const ref = useRef(null);

  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin,
  });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y,
      scale,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inViewResult ? "show" : "hidden"}
      variants={defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
