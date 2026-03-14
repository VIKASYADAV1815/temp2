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
    const particleCount = 50; // Increased count
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5, // Slightly larger for "sharp" look
      duration: Math.random() * 5 + 5, // Faster animation
      delay: Math.random() * -10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      style={{
        maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 80%)'
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
            // Sharp orangish colors: Orange-500, Amber-400, and White highlights
            backgroundColor: particle.id % 3 === 0 ? "#F97316" : particle.id % 3 === 1 ? "#FBBF24" : "#FFFFFF",
            boxShadow: particle.id % 3 === 0 ? "0 0 4px #F97316" : "none", // Glow for orange particles
          }}
          animate={{
            y: [0, -30, -60],
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
  );
}
