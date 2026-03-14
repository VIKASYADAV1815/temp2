"use client";

import { motion } from "framer-motion";

const testimonials = [
  { text: "Cobalt has completely transformed how we manage our startup finances.", author: "Alex Chen", role: "Founder, TechFlow", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60" },
  { text: "The most intuitive financial tool I've ever used. Simply brilliant.", author: "Sarah Jones", role: "CFO, GrowthX", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" },
  { text: "Finally, a dashboard that actually makes sense. Highly recommended.", author: "Mike Ross", role: "CEO, Pearson", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60" },
  { text: "Integration with our existing stack was seamless. A game changer.", author: "Emily White", role: "CTO, BuildSmart", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60" },
  { text: "Support is top-notch and the features are exactly what we needed.", author: "David Kim", role: "Director, FutureLabs", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60" },
  { text: "We saved 20 hours a week on reconciliation alone. Incredible.", author: "Jessica Lee", role: "Finance Lead, Nova", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black overflow-hidden relative border-b border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Loved by founders</h2>
        <p className="text-white/40">Join thousands of companies scaling with Cobalt.</p>
      </div>

      <div className="relative flex flex-col gap-6">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-6 pl-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div key={i} className="w-[350px] flex-shrink-0 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-lg hover:shadow-orange-500/10">
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{item.author}</div>
                    <div className="text-white/40 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-6 pl-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div key={i} className="w-[350px] flex-shrink-0 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-lg hover:shadow-orange-500/10">
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{item.author}</div>
                    <div className="text-white/40 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
