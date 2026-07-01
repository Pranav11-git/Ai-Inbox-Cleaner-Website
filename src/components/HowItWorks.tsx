"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2, ScanFace, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Connect Gmail securely",
    description: "Authorize the extension via Google OAuth. We request minimal access to classify, index, and organize your inbox parameters.",
    icon: Link2,
    color: "text-blue-500",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
  {
    no: "02",
    title: "AI scans your inbox",
    description: "Our local models analyze email headers, dates, and unsubscribe links to categorize mail. No raw email body content is sent to servers.",
    icon: ScanFace,
    color: "text-purple-500",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
  },
  {
    no: "03",
    title: "Review recommendations",
    description: "Browse categorized newsletters, unread social summaries, and junk lists. Pick exactly what to keep and what to trash.",
    icon: FileText,
    color: "text-teal-500",
    border: "border-teal-500/20",
    bg: "bg-teal-500/5",
  },
  {
    no: "04",
    title: "Clean with one click",
    description: "Clean up selected messages instantly. The extension supports local undo cache, so you never delete a critical email by mistake.",
    icon: CheckCircle2,
    color: "text-emerald-500",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-card/10 border-y border-border/80 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Simple Workflow</h2>
          <p className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Get organized in four easy steps
          </p>
          <p className="text-base text-muted-foreground">
            Setting up takes less than 60 seconds. Our intuitive dashboard puts you in full control of your inbox.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Decorative connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 via-teal-500/30 to-emerald-500/30 -translate-y-[80px]" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="flex flex-col items-center text-center space-y-4 relative z-10"
              >
                {/* Icon Box */}
                <div className={`h-16 w-16 rounded-2xl border ${step.border} ${step.bg} ${step.color} flex items-center justify-center shadow-md relative group hover:scale-105 transition-all duration-300`}>
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2.5 -right-2.5 text-xs font-black px-2 py-0.5 rounded-full border bg-background border-border text-foreground">
                    {step.no}
                  </span>
                </div>

                {/* Text Description */}
                <div className="space-y-2 px-2">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
