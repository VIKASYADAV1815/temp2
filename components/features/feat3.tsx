"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  Clock,
  Navigation,
  Battery
} from "lucide-react";
import { useState, useEffect } from "react";

const TRANSIT_STEPS = [
  { id: 1, label: "Processing", icon: Package, status: "Warehouse", time: "09:41" },
  { id: 2, label: "In Transit", icon: Truck, status: "Moving", time: "11:20" },
  { id: 3, label: "Delivered", icon: CheckCircle2, status: "Arrived", time: "14:30" }
];

export default function Feat3() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % TRANSIT_STEPS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="group relative w-full h-full bg-[#111] border border-white/[0.08] rounded-[2rem] overflow-hidden flex flex-col items-center pt-6 transition-all duration-700 hover:border-white/20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Header Info */}
      <div className="relative z-20 w-full px-6 mb-4 flex justify-between items-start">
        <div className="space-y-0.5">
          <h4 className="text-lg font-medium text-white tracking-tight">Real-time <span className="text-white/30">Sync</span></h4>
          <p className="text-[10px] text-white/40 font-light">
            Live updates everywhere.
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>

      {/* Device Bezel (Scaled to fit 350px container) */}
      <div className="relative w-full max-w-[240px] flex-1 flex justify-center perspective-[1000px] overflow-hidden">
        <motion.div 
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full h-[120%] bg-[#1A1A1A] rounded-t-[2rem] border-x-[1px] border-t-[1px] border-white/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        >
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
             <div className="h-5 w-16 bg-black rounded-full flex items-center justify-between px-2">
                <div className="w-1 h-1 rounded-full bg-[#333]" />
                <div className="w-1 h-1 rounded-full bg-[#1A1A1A] border border-[#333]" />
             </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 bg-[#0F0F0F] relative flex flex-col pt-10 px-4 pb-0">
            
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-4 px-1 opacity-50">
              <span className="text-[8px] font-medium text-white">9:41</span>
              <Battery size={10} className="text-white" />
            </div>

            {/* Map Preview Card */}
            <div className="w-full h-16 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-4 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
               <div className="flex flex-col items-center gap-0.5 z-10">
                  <Navigation size={12} className="text-blue-500 mb-1" />
                  <span className="text-[8px] font-medium text-white/60">Arriving soon...</span>
               </div>
            </div>

            {/* Timeline List */}
            <div className="flex-1 relative space-y-3 pl-1">
              {/* Vertical Line */}
              <div className="absolute left-[13px] top-2 bottom-0 w-[1px] bg-white/5" />
              
              {/* Active Progress Line */}
              <motion.div 
                className="absolute left-[13px] top-2 w-[1px] bg-gradient-to-b from-blue-500 to-transparent z-10"
                animate={{ 
                  height: `${(currentStep / (TRANSIT_STEPS.length - 1)) * 70}%` 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {TRANSIT_STEPS.map((step, idx) => {
                const isActive = idx <= currentStep;
                const isCurrent = idx === currentStep;

                return (
                  <div key={step.id} className="relative z-20 flex items-start gap-3 group/item">
                    {/* Node */}
                    <motion.div 
                      animate={{ 
                        backgroundColor: isActive ? "#3b82f6" : "#1A1A1A",
                        borderColor: isActive ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.05)",
                        scale: isCurrent ? 1.1 : 1
                      }}
                      className="relative w-7 h-7 rounded-full border flex items-center justify-center shrink-0 z-20"
                    >
                      <step.icon 
                        size={10} 
                        className={isActive ? "text-white" : "text-white/20"} 
                      />
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full border border-blue-500 opacity-50 animate-ping" />
                      )}
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1 pt-0.5">
                       <div className="flex justify-between items-center mb-0.5">
                          <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-white' : 'text-white/30'}`}>
                            {step.label}
                          </span>
                          <span className="text-[8px] font-mono text-white/20">{step.time}</span>
                       </div>
                       <span className={`text-[8px] transition-colors ${isActive ? 'text-blue-400/80' : 'text-white/10'}`}>
                          {step.status}
                       </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Bottom Fade Mask */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F] to-transparent z-30 pointer-events-none" />

          </div>
        </motion.div>
      </div>
    </div>
  );
}
