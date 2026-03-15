"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Slack, 
  Figma, 
  Zap, 
  ArrowRight, 
  Cpu, 
  Code2, 
  Database,
  Globe,
  Share2
} from "lucide-react";
import { useState } from "react";

const INTEGRATIONS = [
  { name: "GitHub", icon: Github, color: "#ffffff", pos: "top-10 left-10" },
  { name: "Slack", icon: Slack, color: "#E01E5A", pos: "top-20 right-20" },
  { name: "Figma", icon: Figma, color: "#A259FF", pos: "bottom-20 left-40" },
  { name: "Database", icon: Database, color: "#336791", pos: "bottom-10 right-10" },
];

export default function Integrations() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Unified Ecosystem</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              Connect everything. <br />
              <span className="text-white/20">Scale everywhere.</span>
            </h2>
            
            <p className="text-lg text-white/40 max-w-lg leading-relaxed">
              Our API-first architecture ensures seamless connectivity with your existing stack. Deploy in minutes, not months.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 group"
              >
                Explore API Docs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button className="px-6 py-3 rounded-full border border-white/10 text-white/60 font-medium text-sm hover:bg-white/5 transition-colors">
                View All Integrations
              </button>
            </div>
          </div>

          {/* Right: Interactive Visualizer */}
          <div className="relative aspect-square max-w-[500px] mx-auto w-full">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center backdrop-blur-xl shadow-2xl relative group/hub"
              >
                <div className="absolute inset-0 bg-orange-500/5 blur-xl group-hover/hub:bg-orange-500/10 transition-colors" />
                <Share2 size={40} className="text-white relative z-10" />
              </motion.div>
            </div>

            {/* Orbiting Nodes */}
            {INTEGRATIONS.map((item, i) => (
              <motion.div
                key={item.name}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                className={`absolute ${item.pos} z-30 cursor-pointer`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg group"
                  >
                    <item.icon 
                      size={24} 
                      className="text-white/40 group-hover:text-white transition-colors duration-300" 
                      style={{ color: hovered === item.name ? item.color : undefined }}
                    />
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {hovered === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: -45, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute px-2 py-1 rounded bg-white text-black text-[10px] font-black uppercase tracking-tighter"
                        >
                          {item.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Connecting Line to Hub (Simplified representation) */}
                  <svg className="absolute top-1/2 left-1/2 -z-10 w-[200px] h-[200px] pointer-events-none overflow-visible">
                    <motion.line 
                      x1="0" y1="0" 
                      x2={i < 2 ? "100" : "-100"} 
                      y2={i % 2 === 0 ? "100" : "-100"}
                      stroke="white" 
                      strokeWidth="0.5" 
                      strokeOpacity={hovered === item.name ? "0.2" : "0.05"}
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}

            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-white/[0.03] rounded-full" />
            <div className="absolute inset-16 border border-white/[0.03] rounded-full" />
            <div className="absolute inset-32 border border-white/[0.03] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
