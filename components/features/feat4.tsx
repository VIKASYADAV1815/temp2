"use client";

import { motion } from "framer-motion";
import { Github, Slack, Figma, Database, Cloud, Globe } from "lucide-react";

export default function Feat4() {
  const icons = [
    { Icon: Github, color: "text-white", bg: "bg-black" },
    { Icon: Slack, color: "text-orange-400", bg: "bg-[#350d0d]" },
    { Icon: Figma, color: "text-purple-400", bg: "bg-[#1e0a2e]" },
    { Icon: Database, color: "text-blue-400", bg: "bg-[#0a1a2e]" },
    { Icon: Cloud, color: "text-emerald-400", bg: "bg-[#0a2e1a]" },
  ];

  return (
    <div className="group relative w-full h-full bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 flex flex-col p-8">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="flex-1 flex items-center justify-center relative z-10 min-h-[140px]">
        {/* Central Hub */}
        <div className="relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
          <Globe className="text-white" size={32} />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
        </div>

        {/* Orbiting Icons */}
        {icons.map((item, i) => {
          const angle = (i * 360) / icons.length;
          const radius = 80;
          return (
            <motion.div
              key={i}
              className={`absolute w-10 h-10 rounded-xl ${item.bg} border border-white/10 flex items-center justify-center shadow-lg z-10`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ 
                x: Math.cos((angle * Math.PI) / 180) * radius, 
                y: Math.sin((angle * Math.PI) / 180) * radius,
                opacity: 1
              }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
            >
              <item.Icon className={item.color} size={18} />
              
              {/* Connecting Line */}
              <svg className="absolute top-1/2 left-1/2 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 opacity-20">
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2={50 - (Math.cos((angle * Math.PI) / 180) * 40) + "%"} 
                  y2={50 - (Math.sin((angle * Math.PI) / 180) * 40) + "%"} 
                  stroke="white" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                />
              </svg>
            </motion.div>
          );
        })}
        
        {/* Orbit Ring */}
        <div className="absolute w-[160px] h-[160px] rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite]" />
      </div>

      <div className="mt-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">Seamless Integration</h3>
        <p className="text-white/40 text-xs">
          Connect with 50+ tools instantly. No code required.
        </p>
      </div>
    </div>
  );
}
