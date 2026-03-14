"use client";

import { motion } from "framer-motion";
import { Plus, Shield, Globe, ArrowUpRight, Command, Cpu } from "lucide-react";

export default function IndustrialPremiumCard() {
  const users = [
    { id: 1, img: "https://i.pravatar.cc/150?u=a" },
    { id: 2, img: "https://i.pravatar.cc/150?u=b" },
    { id: 3, img: "https://i.pravatar.cc/150?u=c" },
  ];

  return (
    <div className="group relative w-full h-full bg-[#0A0A0A] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 flex flex-col p-0 shadow-2xl">
      
      {/* 1. Subtle Grid Overlay (The "Blueprint" look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 2. Top Meta Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Deployment</span>
            <span className="text-[11px] font-mono text-white/90 uppercase">Cluster-09</span>
          </div>
          <div className="h-6 w-[1px] bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Status</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-white/80" />
              <span className="text-[11px] font-mono text-white/90">ENCRYPTED</span>
            </div>
          </div>
        </div>
        <Command size={14} className="text-white/20" />
      </div>

      {/* 3. Main Body */}
      <div className="relative z-10 flex-1 px-5 flex flex-col justify-center gap-6 mt-4">
        <div>
          <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-2">Team Directory</h3>
          <div className="flex items-end gap-3">
             <h2 className="text-4xl font-light text-white tracking-tighter italic">Access</h2>
             <div className="mb-1.5 h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>

        {/* Avatar Section: Mechanical & Minimal */}
        <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] p-3 rounded-xl backdrop-blur-sm">
          <div className="flex -space-x-2.5">
            {users.map((user, i) => (
              <motion.div
                key={user.id}
                whileHover={{ y: -4, scale: 1.05, zIndex: 10 }}
                className="relative w-9 h-9 rounded-lg border-[1.5px] border-[#0A0A0A] bg-zinc-800 overflow-hidden ring-1 ring-white/10 shadow-xl"
              >
                <img src={user.img} className="w-full h-full object-cover saturate-0 hover:saturate-100 transition-all duration-500" />
              </motion.div>
            ))}
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="w-9 h-9 rounded-lg border-[1.5px] border-dashed border-white/20 flex items-center justify-center text-white/40 ml-2"
            >
              <Plus size={14} />
            </motion.button>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-mono text-white/40 uppercase">Active_Nodes</span>
            <span className="text-xs font-mono text-white">003 / 012</span>
          </div>
        </div>
      </div>

      {/* 4. Functional Footer */}
      <div className="relative z-10 mt-auto px-5 pb-5">
        <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.1em] text-white/20 uppercase border-t border-white/[0.05] pt-4">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Globe size={10} /> GLOBAL</span>
            <span className="flex items-center gap-1"><Shield size={10} /> SECURE</span>
          </div>
          <motion.div 
            whileHover={{ x: 3, color: "rgba(255,255,255,0.8)" }}
            className="flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Permission Logs</span>
            <ArrowUpRight size={10} />
          </motion.div>
        </div>
      </div>

      {/* Subtle Grainy Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}