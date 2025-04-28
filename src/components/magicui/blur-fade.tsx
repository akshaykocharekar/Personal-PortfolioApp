// src/components/magicui/blur-fade.tsx

"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
  scale?: number;
  inViewMargin?: string; // we'll fix this below
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
    margin: `${inViewMargin}`,
  } as any); 
  // 👆 Using `as any` is a quick fix. 
  // A better fix is to type it properly if you want.

  const isInView = !inViewMargin || inViewResult;

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
      animate={isInView ? "show" : "hidden"}
      variants={defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
