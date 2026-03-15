"use client";

import { motion } from "framer-motion";
import Feat1 from "./feat1";
import Feat2 from "./feat2";
import Feat3 from "./feat3";
import Feat4 from "./feat4";
import Feat5 from "./feat5";

export default function Features() {
  return (
    <section className="py-32 bg-black relative overflow-hidden w-full">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="mb-20 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="h-1 w-1 rounded-full bg-orange-500" />
            <p className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">
              Capabilities
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Everything you need. <br />
            <span className="text-white/20">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed max-w-xl mx-auto md:mx-0">
            Financial management and visibility in one place. Experience a flexible toolkit that makes every task feel like a breeze.
          </p>
        </div>

        {/* THE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[350px]">
          
          {/* FEAT 1: Main Large Card (Top Left) - Spans 8 cols */}
          <div className="md:col-span-6 lg:col-span-8">
            <Feat1 />
          </div>

          {/* FEAT 2: Chat Card (Top Right) - Spans 4 cols */}
          <div className="md:col-span-6 lg:col-span-4">
            <Feat2 />
          </div>

          {/* FEAT 3: Small Square (Bottom Left) - Spans 4 cols */}
          <div className="md:col-span-3 lg:col-span-4">
            <Feat3 />
          </div>

          {/* FEAT 4: Seamless Integration (Bottom Middle) - Spans 4 cols */}
          <div className="md:col-span-3 lg:col-span-4">
            <Feat4 />
          </div>

          {/* FEAT 5: Team Access (Bottom Right) - Spans 4 cols */}
          <div className="md:col-span-6 lg:col-span-4">
            <Feat5 />
          </div>

        </div>
      </div>
    </section>
  );
}
