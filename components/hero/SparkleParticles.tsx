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
          maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 70%)'
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.id % 3 === 0 ? "#F97316" : "#FFFFFF", // Orange & White
              opacity: 0.6,
            }}
            animate={{
              y: [0, -20, -40],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
