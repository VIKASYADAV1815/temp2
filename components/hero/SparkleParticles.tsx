"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number; // percentage width
  size: number;
  duration: number;
  delay: number;
}

export default function SparkleParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 150; // Massively increased count for dense border effect
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random position along the X axis
      size: Math.random() * 2.5 + 0.5, // Range from 0.5px to 3px
      duration: Math.random() * 3 + 2, // Faster animation (2-5s)
      delay: Math.random() * -10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 h-[100px] overflow-hidden pointer-events-none z-10">
      {/* 
        This mask ensures particles fade out nicely on the far left/right edges
        so it doesn't look like a hard cut. 
      */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              bottom: "0px", // Start exactly at the bottom of this container (which sits on the mockup border)
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              // Sharp orangish colors: Orange-500, Amber-400, and White highlights
              backgroundColor: particle.id % 3 === 0 ? "#F97316" : particle.id % 3 === 1 ? "#FBBF24" : "#FFFFFF",
              boxShadow: particle.id % 3 === 0 ? "0 0 6px #F97316" : "0 0 4px rgba(255,255,255,0.5)", 
            }}
            animate={{
              // Animate strictly upwards
              y: [0, -40, -80],
              x: [0, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40], // Slight drift left/right
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
