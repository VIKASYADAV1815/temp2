"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function SparkleParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Low quantity as requested
    const particleCount = 20; 
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * -10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
              bottom: "0px",
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.id % 3 === 0 ? "#F97316" : "#FFFFFF", // Orange & White
              boxShadow: "0 0 4px rgba(255,255,255,0.4)",
              opacity: 0.8,
            }}
            animate={{
              y: [0, -30, -60],
              x: [0, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20],
              opacity: [0, 0.8, 0],
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
