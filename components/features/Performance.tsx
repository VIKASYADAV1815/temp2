"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Heart, Briefcase, Layout, Zap, Shield } from "lucide-react";
import * as THREE from "three";

// --- 3D GLOBE COMPONENT (Card 3) ---
function TechGlobe() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe 
          transparent 
          opacity={0.15} 
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </Sphere>
      {/* Subtle core glow */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.02} />
      </Sphere>
    </group>
  );
}

// --- INFINITE TEXT MARQUEE (Card 1) ---
const InfiniteText = () => {
  const text = "Muscle tissue. Aim to 1g of body weight per day. Compound movements are effective.";
  return (
    <div className="flex flex-col gap-6 py-10 overflow-hidden h-full">
      <motion.div 
        animate={{ y: [0, -500] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="space-y-8 flex flex-col"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <p className="text-[22px] font-medium text-white/90 leading-tight tracking-tight px-8 text-center">
              {text}
            </p>
            <p className="text-[22px] font-medium text-white/10 leading-tight tracking-tight px-8 text-center italic">
              Performance metrics and edge data processing.
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function LuxuryDashboard() {
  const [selectedSpace, setSelectedSpace] = React.useState("Friends");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Center-Aligned Heading */}
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-medium text-white tracking-tighter mb-6"
        >
          Share and document.<br />
          <span className="text-zinc-600">Zero writing required.</span>
        </motion.h1>
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
          Sharing knowledge has never been easier. Paste<br />
          Gems anywhere with zero friction.
        </p>
      </div>

      {/* Grid: Properly Centered */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px] justify-center items-center">
        
        {/* CARD 1: PASTE */}
        <div className="relative h-[500px] rounded-[24px] bg-[#080808] border border-white/[0.06] flex flex-col overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-30" />
          
          <div className="pt-8 pb-4 text-center z-20 bg-[#080808]">
            <h3 className="text-white text-[20px] font-medium tracking-tight">Paste in one click</h3>
            <p className="text-zinc-500 text-[13px] mt-1">Instant workflow integration.</p>
          </div>

          <div className="relative flex-1 rounded-[20px] bg-[#040404] border border-white/[0.04] mx-4 mb-4 overflow-hidden">
            <InfiniteText />
            {/* Bottom Fade Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/80 border border-white/10 backdrop-blur-xl">
                 <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-white/10">↵</span>
                 <span className="text-[12px] font-medium text-zinc-300">Paste Gem</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: SPACE DROPDOWN */}
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="relative h-[500px] rounded-[24px] bg-[#080808] border border-white/[0.06] flex flex-col overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-30" />
          
          <div className="pt-8 pb-4 text-center">
            <h3 className="text-white text-[20px] font-medium tracking-tight">Share in a space</h3>
            <p className="text-zinc-500 text-[13px] mt-1">Collaborative environments.</p>
          </div>

          <div className="relative flex-1 rounded-[20px] bg-[#040404] border border-white/[0.04] mx-4 mb-4 overflow-hidden flex flex-col items-center justify-center p-8">
            <div className="space-y-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div animate={{ x: [-100, 200] }} transition={{ repeat: Infinity, duration: 3 }} className="w-20 h-full bg-white/20" />
              </div>
              <div className="w-3/4 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div animate={{ x: [-100, 200] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} className="w-20 h-full bg-white/20" />
              </div>
            </div>

            <div className="absolute bottom-10 w-[200px] z-20">
               <AnimatePresence>
                 {isOpen && (
                   <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="mb-2 p-1 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl">
                     {["Friends", "Work", "Private"].map((item) => (
                       <button key={item} onClick={() => setSelectedSpace(item)} className="w-full text-left px-4 py-2 text-[12px] text-zinc-400 hover:bg-white/5 rounded-xl transition-colors">{item}</button>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
               <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-black border border-white/10 text-white shadow-xl">
                  <span className="text-[12px] font-medium">{selectedSpace}</span>
                  <ChevronDown size={14} className="text-zinc-600" />
               </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        {/* CARD 3: 3D GLOBE */}
        <div className="relative h-[500px] rounded-[24px] bg-[#080808] border border-white/[0.06] flex flex-col overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-30" />
          
          <div className="pt-8 pb-4 text-center">
            <h3 className="text-white text-[20px] font-medium tracking-tight">Global Performance</h3>
            <p className="text-zinc-500 text-[13px] mt-1">Real-time edge synchronization.</p>
          </div>

          <div className="relative flex-1 rounded-[20px] bg-[#040404] border border-white/[0.04] mx-4 mb-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                  <TechGlobe />
                </Suspense>
              </Canvas>
            </div>

            <div className="absolute bottom-8 left-0 right-0 px-6 z-10">
              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Edge Status</span>
                   </div>
                   <span className="text-[10px] text-white font-mono">14ms</span>
                </div>
                <div className="flex gap-1 h-6 items-end">
                  {[20, 50, 30, 80, 40, 90, 60, 40].map((h, i) => (
                    <motion.div key={i} animate={{ height: `${h}%` }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }} className="flex-1 bg-white/20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}