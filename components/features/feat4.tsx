"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Wallet, 
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Activity,
  CreditCard,
  MoreHorizontal
} from "lucide-react";
import { useState } from "react";

const CARDS = [
  {
    id: 1,
    title: "Primary Account",
    subtitle: "Ending in •••• 4289",
    amount: "$24,500.00",
    change: "+12.5%",
    icon: Zap,
    color: "#fff",
    bg: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
    border: "border-white/10",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces",
    chart: [40, 35, 55, 45, 60, 75, 65]
  },
  {
    id: 2,
    title: "Venture Fund",
    subtitle: "Series A Allocation",
    amount: "$128,420.50",
    change: "+4.2%",
    icon: ShieldCheck,
    color: "#10b981",
    bg: "linear-gradient(135deg, #052e16 0%, #022c22 100%)",
    border: "border-emerald-500/20",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&crop=faces",
    chart: [30, 45, 40, 50, 45, 55, 60]
  },
  {
    id: 3,
    title: "Crypto Assets",
    subtitle: "ETH / SOL / BTC",
    amount: "$8,240.25",
    change: "+8.1%",
    icon: TrendingUp,
    color: "#3b82f6",
    bg: "linear-gradient(135deg, #172554 0%, #0f172a 100%)",
    border: "border-blue-500/20",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop&crop=faces",
    chart: [20, 25, 35, 30, 45, 40, 55]
  }
];

const Sparkline = ({ data, color }: { data: number[], color: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible preserve-3d">
      <motion.path
        d={`M ${points}`}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Glow Effect */}
      <motion.path
        d={`M ${points}`}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md opacity-20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );
};

export default function NexusPremium() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="group relative w-full h-full bg-[#050505] border border-white/[0.08] rounded-[2.5rem] overflow-hidden flex flex-col pt-8 px-8 transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.05)]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.02),transparent_70%)]" />

      {/* Header */}
      <div className="relative z-20 flex justify-between items-start mb-6">
        <div className="space-y-1">
          <h3 className="text-xl font-medium text-white tracking-tight">Active <span className="text-white/30">Vaults</span></h3>
          <p className="text-xs text-white/40 font-light max-w-[150px]">
            Real-time asset allocation across decentralized networks.
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
           <Activity size={14} className="text-white/40" />
        </div>
      </div>

      {/* Stacked Cards Container */}
      <div className="flex-1 relative w-full perspective-[1200px] flex justify-center">
         <div className="relative w-full flex flex-col items-center mt-4">
            {CARDS.map((card, idx) => {
               const isHovered = hoveredIndex === idx;
               const offset = idx * 45; // Vertical spacing
               
               return (
                  <motion.div
                     key={card.id}
                     onMouseEnter={() => setHoveredIndex(idx)}
                     onMouseLeave={() => setHoveredIndex(null)}
                     initial={{ y: offset, scale: 1 - idx * 0.04, zIndex: CARDS.length - idx }}
                     animate={{ 
                        y: isHovered ? offset - 30 : offset,
                        scale: isHovered ? 1.05 : 1 - idx * 0.04,
                        zIndex: isHovered ? 50 : CARDS.length - idx,
                        rotateX: isHovered ? 0 : -2,
                        filter: hoveredIndex !== null && hoveredIndex !== idx ? "blur(4px) brightness(0.5) grayscale(0.5)" : "none"
                     }}
                     transition={{ type: "spring", stiffness: 180, damping: 20 }}
                     className="absolute w-full max-w-[280px] h-[180px] origin-top transition-all duration-500"
                     style={{ top: 0 }}
                  >
                     {/* Premium Glass Card */}
                     <div 
                        className={`relative w-full h-full p-5 rounded-3xl border ${card.border} shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden group/card`}
                        style={{ background: card.bg }}
                     >
                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        
                        {/* Inner Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                           
                           {/* Card Header */}
                           <div className="flex justify-between items-start">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 ring-2 ring-black/20">
                                    <img src={card.avatar} alt="avatar" className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                    <h4 className="text-sm font-medium text-white tracking-tight">{card.title}</h4>
                                    <p className="text-[10px] text-white/40 font-mono tracking-wide">{card.subtitle}</p>
                                 </div>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                 <CreditCard size={12} className="text-white/40" />
                              </div>
                           </div>

                           {/* Card Body (Chart + Amount) */}
                           <div className="flex items-end justify-between mt-auto">
                              <div className="space-y-1">
                                 <p className="text-xl font-medium text-white tracking-tight">{card.amount}</p>
                                 <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-bold" style={{ color: card.color }}>{card.change}</span>
                                    <span className="text-[9px] text-white/20">this month</span>
                                 </div>
                              </div>
                              
                              {/* Sparkline Chart */}
                              <div className="w-16 h-8">
                                 <Sparkline data={card.chart} color={card.color} />
                              </div>
                           </div>

                           {/* Hover Action (Reveal) */}
                           <motion.div 
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                              className="absolute top-5 right-5"
                           >
                              <MoreHorizontal size={16} className="text-white/60" />
                           </motion.div>

                        </div>
                     </div>
                  </motion.div>
               );
            })}
         </div>
      </div>
      
      {/* Bottom Fade Mask */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-40 pointer-events-none" />

    </div>
  );
}
