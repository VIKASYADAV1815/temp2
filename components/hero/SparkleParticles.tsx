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
    const particleCount = 40; // Quality over quantity
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.2 + 0.3, // Microscopic
      duration: Math.random() * 10 + 20, 
      delay: Math.random() * -20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      style={{
        // IMPORTANT: Mask ensures particles only "exist" where the light is
        maskImage: 'radial-gradient(circle at 50% 30%, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 0%, transparent 70%)'
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.id % 3 === 0 ? "#FFD1A9" : "#FFFFFF",
          }}
          animate={{
            // 1. Erratic "Brownian" Movement (X and Y vibrate randomly)
            x: [0, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
            y: [0, -40, -80],
            // 2. Glinting (Simulates the particle spinning and catching light)
            opacity: [0, 0, 0.8, 0.2, 0.9, 0, 0],
            scale: [0, 1, 0.5, 1.2, 0],
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
  );
}