"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Slack, Figma, Database, Cloud, Globe, Cpu, Zap, Radio } from "lucide-react";
import { useState } from "react";

export default function NexusPremium() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const icons = [
    { Icon: Github, label: "GitHub", color: "#ffffff", glow: "rgba(255,255,255,0.2)" },
    { Icon: Slack, label: "Slack", color: "#E01E5A", glow: "rgba(224,30,90,0.3)" },
    { Icon: Figma, label: "Figma", color: "#A259FF", glow: "rgba(162,89,255,0.3)" },
    { Icon: Database, label: "#336791", color: "#336791", glow: "rgba(51,103,145,0.3)" },
    { Icon: Cloud, label: "AWS", color: "#10b981", glow: "rgba(16,185,129,0.3)" },
  ];

  return (
    <div className="group relative w-full h-full bg-[#030303] border border-white/[0.08] rounded-[2rem] overflow-hidden flex flex-col p-8 transition-all duration-700 hover:border-white/20 shadow-[0_0_50px_-12px_rgba(0,0,0,1)]">
      
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),transparent_70%)]" />
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* 2. TOP TECHNICAL DATA */}
      <div className="relative z-20 flex justify-between items-start">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.4em]">Core Interface</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                <motion.div 
                   animate={{ y: [-10, 10] }} 
                   transition={{ duration: 2, repeat: Infinity }} 
                   className="absolute inset-0 bg-white" 
                />
              </div>
              <span className="text-[10px] font-mono text-white/40 tracking-widest">NX-749</span>
            </div>
          </div>
        </div>
        <Radio size={14} className="text-white/10 group-hover:text-white/40 transition-colors animate-pulse" />
      </div>

      {/* 3. THE RE-ENGINEERED HUB */}
      <div className="flex-1 flex items-center justify-center relative z-10 min-h-[240px]">
        
        {/* Deep Field Orbits */}
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/[0.02] bg-white/[0.01]" />
        <div className="absolute w-[280px] h-[280px] rounded-full border border-white/[0.01]" />

        {/* Central Logo: The "Jewel" */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative z-30 w-20 h-20 flex items-center justify-center cursor-none"
        >
          {/* Layered Glass Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[1.5rem] blur-[2px]" />
          <div className="absolute inset-0 bg-[#0A0A0A] rounded-[1.5rem] border border-white/10 shadow-inner" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-white/[0.08] to-transparent rounded-[1.4rem]" />
          
          <Globe className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" size={32} strokeWidth={1.5} />
          
          {/* Animated Internal Scanning Light */}
          <motion.div 
            animate={{ left: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-8 h-full bg-white/5 skew-x-12 blur-md"
          />
        </motion.div>

        {/* Orbiting Icons: "Glass Nodes" */}
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          const radius = 105;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute z-20"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x, y, opacity: 1 }}
              whileHover={{ scale: 1.1, zIndex: 40 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
            >
              {/* Node Container */}
              <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden
                ${hoveredIndex === i ? 'bg-white/10 border-white/30' : 'bg-white/[0.03] border-white/5'} 
                border backdrop-blur-xl shadow-2xl`}
              >
                {/* Individual Icon Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: item.color }}
                />
                <item.Icon 
                  style={{ color: hoveredIndex === i ? item.color : 'rgba(255,255,255,0.4)' }} 
                  size={20} 
                  strokeWidth={1.5}
                  className="relative z-10 transition-colors duration-300"
                />
              </div>

              {/* Data Path to Hub */}
              <svg className="absolute inset-0 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 overflow-visible">
                <motion.path
                  d={`M 100 100 L ${100 - x} ${100 - y}`}
                  stroke="url(#pathGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: hoveredIndex === i ? 0.4 : 0.05,
                  }}
                />
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="100%" stopColor={item.color} />
                  </linearGradient>
                </defs>
              </svg>

              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 55 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-1/2 -translate-y-1/2 left-0 pl-2 pointer-events-none"
                  >
                    <div className="bg-white px-2 py-0.5 rounded-sm shadow-xl">
                      <span className="text-[9px] font-black text-black uppercase tracking-tighter italic">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* 4. FOOTER: High-Contrast Minimalist */}
      <div className="relative z-20 mt-auto pt-6 border-t border-white/[0.05]">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-white animate-pulse rounded-full" />
              <p className="text-[10px] font-bold text-white tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                Synapse v2.4
              </p>
            </div>
            <h3 className="text-2xl font-light text-white tracking-tighter leading-none">
              Nexus <span className="text-white/20">Protocol</span>
            </h3>
          </div>
          <div className="flex flex-col items-end gap-2">
             <div className="flex gap-1">
                {[1,2,3,4].map(i => <div key={i} className="w-2 h-[2px] bg-white/10" />)}
             </div>
             <p className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Encryption: AES-256</p>
          </div>
        </div>
      </div>
    </div>
  );
}