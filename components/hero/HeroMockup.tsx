"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SparkleParticles from "./SparkleParticles";

export default function HeroMockup() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.98, 1]);

  return (
    <div ref={ref} className="relative w-full max-w-[1500px] mx-auto px-4 mt-8 perspective-2000">
      
      {/* 1. THE LIGHT LEAK (Merged Source) */}
      {/* This creates a razor-sharp "hot" line above the mockup that bleeds light downward */}
      <div 
        className="absolute -top-px left-1/2 -translate-x-1/2 w-full max-w-4xl h-px z-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.4), transparent)',
          boxShadow: '0 0 50px 2px rgba(249, 115, 22, 0.3)'
        }}
      />

      {/* ATMOSPHERIC AMBER GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/[0.03] blur-[150px] -z-10" />

      {/* SPARKLE DUST OVERLAY - Positioned above the mockup */}
      <div className="absolute inset-x-0 -top-20 h-[400px] z-30 pointer-events-none">
        <SparkleParticles />
      </div>

      <motion.div
        style={{ rotateX, scale }}
        className="relative z-10 w-full rounded-xl border border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* TOP SPECULAR HIGHLIGHT */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

        {/* MOCKUP CONTENT */}
        <div className="relative p-1.5 bg-[#0A0A0A]">
          <div className="relative rounded-lg overflow-hidden border border-white/5">
            
            {/* MINIMALIST WINDOW INDICATORS */}
            <div className="absolute top-4 left-5 flex gap-1.5 z-20 opacity-40">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>

            {/* THE IMAGE */}
            <img 
              src="https://nuxtcharts.com/images/shadcn-dashboard/screenshots/5.png" 
              alt="Dashboard"
              className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
            />

            {/* SUBTLE LINEAR GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* REFINED FLOOR REFLECTION */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-[2px]" />
    </div>
  );
}