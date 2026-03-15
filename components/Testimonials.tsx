"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { text: "Cobalt transformed our startup finances overnight. The UI is surgical and the speed is unmatched.", author: "Alex Chen", role: "TechFlow", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
  { text: "The most intuitive tool I've used in a decade. Simply brilliant for scaling teams.", author: "Sarah Jones", role: "GrowthX", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
  { text: "Finally, a dashboard that makes sense. Highly recommended for serious founders.", author: "Mike Ross", role: "CEO, Pearson", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" },
  { text: "Integration was seamless. It's a total game changer for our engineering workflow.", author: "Emily White", role: "CTO, BuildSmart", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
  { text: "The reconciliation engine alone saved us 40+ hours a month. Truly indispensable.", author: "Jessica Lee", role: "Nova Finance", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100" },
];

const BladeCard = ({ item }: { item: any }) => {
  return (
    <div className="relative w-[440px] h-[140px] group flex-shrink-0 bg-[#050505] border border-white/[0.08] overflow-hidden flex flex-col justify-center px-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] transition-all duration-500 hover:bg-[#080808]">
      
      {/* High-Density Inner Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.3] transition-all duration-1000 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #666 0.8px, transparent 0.8px)`, 
          backgroundSize: '10px 10px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }} 
      />

      {/* Laser Thin Top Beam */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.02]" />
      <motion.div 
        animate={{ x: ["-100%", "350%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent z-10"
      />

      <div className="relative z-10 flex items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-gray-400 text-[13px] font-light leading-relaxed group-hover:text-white transition-colors duration-500 line-clamp-2">
            "{item.text}"
          </p>
        </div>

        <div className="flex items-center gap-4 min-w-fit border-l border-white/10 pl-6">
          <div className="text-right">
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">{item.author}</h4>
            <p className="text-orange-500/70 text-[9px] font-mono mt-1 tracking-tighter uppercase">{item.role}</p>
          </div>
          <div className="relative shrink-0">
             <img 
                src={item.avatar} 
                alt={item.author} 
                className="w-9 h-9 rounded-none border border-white/10 relative z-10 object-cover" 
              />
              <div className="absolute inset-0 bg-orange-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>

      {/* Edge Accents */}
      <div className="absolute top-0 left-0 w-[1px] h-2 bg-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default function Testimonials() {
  const tripledData = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      
      {/* Heading & Subheading */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-40">
        <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase">System Live</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                Trusted by the best
            </h2>
            <p className="mt-4 text-white/30 font-mono text-sm tracking-widest max-w-lg uppercase">
                // Verifying infrastructure stability across 2,000+ nodes
            </p>
        </div>
      </div>

      {/* Side Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black via-black/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black via-black/80 to-transparent z-30 pointer-events-none" />

      <div className="relative w-full z-10 flex flex-col gap-3">
        
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 px-3"
          >
            {tripledData.map((t, i) => (
              <BladeCard key={`row1-${i}`} item={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 px-3"
          >
            {tripledData.map((t, i) => (
              <BladeCard key={`row2-${i}`} item={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}