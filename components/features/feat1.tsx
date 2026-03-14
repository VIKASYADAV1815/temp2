"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle2, Clock, ArrowRight } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Payment Received",
    desc: "You received $2,400.00 from Stripe",
    time: "Just now",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    id: 2,
    title: "High Usage Alert",
    desc: "Your API usage reached 80% threshold",
    time: "2m ago",
    icon: Bell,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: 3,
    title: "System Update",
    desc: "Scheduled maintenance completed successfully",
    time: "1h ago",
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export default function Feat1() {
  return (
    <div className="group relative w-full h-full bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative h-full flex flex-col p-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Real-time Events</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Smart Notifications</h3>
          <p className="text-white/40 text-sm max-w-sm">
            Stay updated with critical alerts and transaction events as they happen.
          </p>
        </div>

        {/* Stacked Notifications Animation */}
        <div className="relative flex-1 min-h-[200px] flex flex-col gap-4 perspective-1000">
          {notifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50, y: 20 * index }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.6, 
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative z-10 w-full bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-start gap-4 group/card hover:bg-white/[0.06] transition-colors"
            >
              <div className={`p-2 rounded-xl ${item.bg} ${item.color}`}>
                <item.icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <span className="text-[10px] text-white/30">{item.time}</span>
                </div>
                <p className="text-xs text-white/50 truncate">{item.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover/card:text-white/60 transition-colors self-center" />
            </motion.div>
          ))}
          
          {/* Decorative lines connecting cards */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-white/10 to-transparent -z-0" />
        </div>
      </div>
    </div>
  );
}
