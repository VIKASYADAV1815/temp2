"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ConicalLamp = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-start overflow-hidden w-full z-0 bg-transparent pointer-events-none h-full",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-start justify-center isolate z-0 h-full">
        {/* Main Beam - The light falling downwards and expanding */}
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "60rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(from 180deg at 50% -20%, transparent 120deg, rgba(249, 115, 22, 0.4) 180deg, transparent 240deg)`,
          }}
          className="absolute top-0 h-full w-[60rem] bg-gradient-conic"
        >
          {/* Bottom fade mask to ensure it blends into the background */}
          <div className="absolute inset-0 bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Central Core Glow - The "Source" at the very top */}
        <div className="absolute top-0 z-50 h-32 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        
        {/* Volumetric Glow Ball at the source */}
        <div className="absolute top-[-5%] z-50 h-[300px] w-[600px] rounded-full bg-orange-500/30 opacity-60 blur-[80px]"></div>
        
        {/* Dusty Beam Effect - Center falling down */}
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] z-30 h-64 w-[20rem] rounded-full bg-orange-400/20 blur-[60px]"
        ></motion.div>
      </div>
    </div>
  );
};