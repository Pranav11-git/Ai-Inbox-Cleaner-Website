"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Flame, FolderHeart, Hourglass, ShieldAlert } from "lucide-react";

const benefits = [
  {
    title: "Save hours every month",
    description: "Reclaim the time you waste scrolling, selecting, and trashing newsletters and promotions. Let our smart algorithms queue cleanup candidates so you can clear them in seconds.",
    icon: Hourglass,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  {
    title: "Reduce inbox clutter",
    description: "Keep your storage within limits. Instantly free up gigabytes of database space by targeting bulky, attachments-heavy updates and expired advertising campaigns.",
    icon: Flame,
    color: "text-amber-500",
    bg: "bg-amber-500/5",
  },
  {
    title: "Stay organized",
    description: "By filtering newsletter senders and updates into dedicated tags, you maintain a cleaner primary workspace, allowing you to focus on messages that matter.",
    icon: FolderHeart,
    color: "text-teal-500",
    bg: "bg-teal-500/5",
  },
  {
    title: "Keep important emails",
    description: "Our core rule system prevents automated deletions. You approve every suggestion. Crucial threads from colleagues, invoices, and family are never selected.",
    icon: ShieldAlert,
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden transition-all duration-300">
      <div className="absolute bottom-1/4 left-10 -z-10 h-[300px] w-[300px] rounded-full glow-blue" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Summary */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Core Value</h2>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Why use AI Inbox Cleaner?
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Email clutter is more than a digital mess; it costs you hours of focus. Our extension is designed to return control to you, focusing on automation where it is safe, and giving you absolute choice where it is not.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "100% locally evaluated rules",
                "Designed for Google OAuth review",
                "No backend servers storing your mail",
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border flex flex-col space-y-4 hover:border-accent/30 transition-all duration-300"
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${benefit.bg} ${benefit.color}`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
