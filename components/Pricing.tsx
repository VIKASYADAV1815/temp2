"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      price: "$0",
      yearlyPrice: "$0",
      desc: "For individuals and side projects.",
      features: ["Unlimited transactions", "Basic analytics", "1 user", "Community support"],
    },
    {
      name: "Pro",
      price: "$29",
      yearlyPrice: "$290",
      desc: "For growing teams and startups.",
      features: ["Everything in Starter", "Advanced analytics", "5 users", "Priority support", "API access"],
      highlight: true,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      yearlyPrice: "Custom",
      desc: "For large organizations.",
      features: ["Unlimited users", "Dedicated account manager", "Custom contracts", "SLA", "On-premise deployment"],
    },
  ];

  return (
    <section className="bg-black border-y border-white/5 relative overflow-hidden py-24">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Simple, transparent pricing</h2>
            <p className="text-white/40">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly' ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
            >
              Yearly <span className="text-[10px] text-orange-500 ml-1 font-bold">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative group p-8 rounded-3xl border transition-all duration-300 ${plan.highlight ? 'bg-white/[0.03] border-orange-500/30 hover:border-orange-500/50' : 'bg-transparent border-white/5 hover:border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {billingCycle === 'monthly' ? plan.price : plan.yearlyPrice}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-white/40 text-sm">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  )}
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-orange-500' : 'text-gray-500'}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${plan.highlight ? "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10" : "bg-white/5 text-white hover:bg-white/10 border border-white/5"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
