"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, CheckSquare, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "Review-first",
    label: "Cleanup model",
    description: "Recommendations are shown before selected Gmail actions run.",
    icon: CheckSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    value: "Minutes",
    label: "Setup time",
    description: "Connect Gmail, scan clutter, and review cleanup candidates quickly.",
    icon: Clock,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    id: 3,
    value: "No sale",
    label: "Privacy Rating",
    description: "Personal information is not sold or shared for advertising.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 4,
    value: "OAuth",
    label: "Review ready",
    description: "Policies disclose the Gmail scope, data use, and revocation path.",
    icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-border bg-card/30 backdrop-blur transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between"
              >
                <div>
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</h3>
                  <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
