"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Sparkles, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const initialMessages = [
  { id: 1, role: "user", text: "Forecast revenue for Q3?" },
  { id: 2, role: "assistant", text: "Based on current trends, Q3 revenue is projected to grow by 24%." },
];

export default function Feat2() {
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Simulate interactive chat loop
    const timeout = setTimeout(() => {
      if (messages.length === 2) {
        // Add user message
        setMessages(prev => [...prev, { id: 3, role: "user", text: "Analyze top expenses." }]);
        setIsTyping(true);
      } else if (messages.length === 3) {
        // Finish typing and add assistant message
        setIsTyping(false);
        setMessages(prev => [...prev, { id: 4, role: "assistant", text: "Cloud infrastructure and marketing are your primary cost drivers this month." }]);
      } else if (messages.length === 4) {
        // Reset for loop
        setTimeout(() => {
          setMessages(initialMessages);
        }, 3000);
      }
    }, messages.length === 2 ? 2000 : messages.length === 3 ? 1500 : 5000);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="group relative w-full h-full bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 flex flex-col">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.03] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="p-6 border-b border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20">
            <Bot size={16} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Genius AI</h3>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-medium text-white/50 uppercase tracking-wide">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto no-scrollbar relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none fixed" />
        
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "user" ? "bg-white/10" : "bg-orange-500/10 text-orange-500"}`}>
                {msg.role === "user" ? <User size={12} /> : <Sparkles size={12} />}
              </div>
              <div className={`p-2.5 rounded-2xl text-xs leading-relaxed max-w-[85%] ${msg.role === "user" ? "bg-white text-black rounded-tr-none" : "bg-white/5 text-gray-300 border border-white/5 rounded-tl-none"}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                <Sparkles size={12} />
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3 flex gap-1">
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area (Visual Only) */}
      <div className="p-4 border-t border-white/5 bg-[#0A0A0A] z-10">
        <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/5 group-hover:border-white/10 transition-colors">
          <span className="text-xs text-white/30 flex-1">Ask anything...</span>
          <button className="p-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
            <Send size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
