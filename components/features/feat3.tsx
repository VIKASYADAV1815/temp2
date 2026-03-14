"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Scan } from "lucide-react";

export default function Feat3() {
  return (
    <div className="group relative w-full h-full bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 flex flex-col items-center justify-center p-8">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Central Icon */}
      <div className="relative z-10 mb-6">
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
          <Shield size={40} className="text-white relative z-10" />
          
          {/* Scanning Line */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 blur-[2px]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Radiating Waves */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-2xl border border-orange-500/30"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>

      <h3 className="text-xl font-bold text-white mb-2 text-center">Vault Security</h3>
      <p className="text-white/40 text-xs text-center max-w-[200px]">
        AES-256 encryption with biometric verification layers.
      </p>

      {/* Status Badge */}
      <div className="mt-6 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <Lock size={10} className="text-emerald-500" />
        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Protected</span>
      </div>
    </div>
  );
}
