"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroCTA from "./HeroCTA";
import HeroMockup from "./HeroMockup";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-24 pb-12 overflow-hidden">
      <HeroBackground />
      
      <div className="z-10 flex flex-col items-center text-center max-w-4xl px-6 mx-auto">
        
        {/* Scaled down Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-bold text-orange-500 uppercase tracking-widest"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#ff6b00]" />
          v2.0 is live
        </motion.div>

        {/* Tightened Heading: Scaled from 80px down to a crisp 60px max */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-[60px] font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Unleash the power of <br />
          <span className="heading-gradient">intuitive finance</span>
        </motion.h1>
        
        {/* Compressed Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          Say goodbye to outdated tools. Manage your business growth with 
          AI-driven insights that make finance <span className="text-white">simple and intuitive.</span>
        </motion.p>
        
        <HeroCTA />
      </div>
      
      {/* Mockup with a more controlled width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-7xl mt-16 px-6"
      >
        <HeroMockup />
      </motion.div>
    </section>
  );
}