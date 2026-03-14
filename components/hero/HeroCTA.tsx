"use client";

import { motion } from "framer-motion";

export default function HeroCTA() {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 sm:mt-12 w-full sm:w-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {/* --- THE AMBER GLOW BUTTON --- */}
      <button className="group relative px-6 py-3 sm:px-7 sm:py-2.5 rounded-full transition-all duration-500 overflow-hidden w-full sm:w-auto flex justify-center">
        {/* 1. Deep Glow Shadow (Moves with hover) */}
        <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* 2. The Button Surface (Subtle Gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-orange-600 rounded-full" />
        
        {/* 3. The "Light Leak" (A white radial highlight that follows the mouse/hover) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* 4. The Razor Edge (Top highlight) */}
        <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative z-10 flex items-center gap-2 text-white font-bold tracking-tight text-[13px] uppercase">
          Join the Waitlist
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* --- THE GHOST OBSIDIAN BUTTON --- */}
      <button className="group relative px-6 py-3 sm:px-7 sm:py-2.5 rounded-full transition-all duration-500 w-full sm:w-auto flex justify-center">
        {/* Ultra-Thin Border */}
        <div className="absolute inset-0 rounded-full border border-white/[0.08] group-hover:border-white/20 transition-colors" />
        
        {/* Glass Fill */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm rounded-full group-hover:bg-white/[0.05] transition-colors" />

        <div className="relative z-10 flex items-center gap-2 text-slate-400 group-hover:text-white font-bold tracking-tight text-[13px] uppercase transition-colors">
          Learn More
          {/* A more technical-looking "active" indicator */}
          <div className="flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-orange-500/40" />
            <span className="h-1 w-1 rounded-full bg-orange-500 animate-pulse" />
          </div>
        </div>
      </button>
    </motion.div>
  );
}