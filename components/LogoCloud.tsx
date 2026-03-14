"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/white" },
  { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Linear", url: "https://cdn.simpleicons.org/linear/white" },
  { name: "Coinbase", url: "https://cdn.simpleicons.org/coinbase/white" },
  { name: "Monzo", url: "https://cdn.simpleicons.org/monzo/white" },
  { name: "Revolut", url: "https://cdn.simpleicons.org/revolut/white" },
];

const LogoCloud = () => {
  return (
    <div className="relative w-full py-12 overflow-hidden bg-[#020202]">
      
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] opacity-50">
          Trusted by the best
        </p>
      </div>
      
      <div className="relative flex items-center"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap" 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center min-w-[180px]"
            >
              <div className="relative flex flex-col items-center">
                {/* THE LOGO - Increased from h-7 to h-10 */}
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-10 w-auto opacity-30 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 relative z-10 brightness-125"
                />

                {/* THE REALISTIC REFLECTION */}
                {/* This uses a vertical flip with a mask to fade it out naturally */}
                <div className="absolute top-full mt-2 overflow-hidden h-12 pointer-events-none select-none">
                  <img 
                    src={logo.url} 
                    alt="" 
                    className="h-10 w-auto scale-y-[-1] opacity-[0.08] blur-[2px] grayscale transition-opacity duration-700 group-hover:opacity-[0.15]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)'
                    }}
                  />
                </div>
              </div>

              {/* PERMANENT NAME - Spaced out for the reflection */}
              <span className="mt-16 text-[9px] font-bold text-slate-600 group-hover:text-orange-500 tracking-[0.3em] uppercase transition-colors duration-500">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCloud;