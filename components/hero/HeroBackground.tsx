"use client";
import { ConicalLamp } from "../ui/ConicalLamp";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#020202] -z-10">
      
      {/* 1. THE LAMP EFFECT (Replaces the orange blob) */}
      <div className="absolute top-[-200px] left-0 right-0 flex justify-center z-0">
         <ConicalLamp className="bg-transparent min-h-0 h-[800px] w-full" />
      </div>

      {/* 2. THE GRID (Low Opacity + Theme Side Fade) */}
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" 
        style={{
          // Masking: Visible in center, fades into theme color/background at sides
          maskImage: 'radial-gradient(circle at center top, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center top, black 30%, transparent 90%)'
        }}
      />

      {/* 3. SIDE THEME MASKING (The "Orange Mist" on sides) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      {/* 5. THE BOTTOM MERGE */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent z-30" />
      
      {/* 6. NOISE TEXTURE (High-End Polish) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-40" />
    </div>
  );
}