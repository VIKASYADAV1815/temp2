"use client";

import { motion } from "framer-motion";
import { Users, Plus } from "lucide-react";

export default function Feat5() {
  const users = [
    { bg: "bg-orange-500", text: "JD" },
    { bg: "bg-blue-500", text: "AM" },
    { bg: "bg-purple-500", text: "RK" },
    { bg: "bg-emerald-500", text: "TS" },
  ];

  return (
    <div className="group relative w-full h-full bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 flex flex-col p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/10 text-white">
            <Users size={14} />
          </div>
          <span className="text-sm font-bold text-white">Team Access</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-medium text-green-500 uppercase tracking-wide">Active</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center -space-x-3">
          {users.map((u, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-10 h-10 rounded-full ${u.bg} border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold text-white shadow-lg`}
            >
              {u.text}
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0A0A0A] border-dashed flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
          >
            <Plus size={16} />
          </motion.div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-white/40 text-xs">
          Manage roles & permissions with ease.
        </p>
      </div>
    </div>
  );
}
