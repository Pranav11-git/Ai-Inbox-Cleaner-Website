"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Trash2, MailSearch, Shield, CheckSquare, CornerUpLeft, ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 relative overflow-hidden transition-all duration-300">
      <div className="absolute top-1/2 right-1/4 -z-10 h-[300px] w-[500px] rounded-full glow-teal" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Advanced Features</h2>
          <p className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Engineered for speed. <br className="hidden sm:inline" /> Built for privacy-first control.
          </p>
          <p className="text-base text-muted-foreground">
            No complex dashboards or confusing workflows. Get a clutter-free inbox in seconds using our integrated tool suite.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI Categorization (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-2xl border border-border bg-card/60 backdrop-blur p-8 flex flex-col justify-between overflow-hidden relative group hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-4 max-w-md z-10">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <BrainCircuit className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">AI Categorization</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our local intelligence automatically groups your incoming emails into clear clusters: Newsletters, Promotions, Social Alerts, and Transactional. Spot what matters instantly.
              </p>
            </div>
            
            {/* Visual simulation inside the card */}
            <div className="mt-8 bg-background border border-border rounded-xl p-4 space-y-2.5 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground pb-2 border-b border-border">
                <span>AI Categorization Engine</span>
                <span className="text-primary font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  Active
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 border border-purple-500/20 font-medium">
                  Newsletter (Weekly Digests)
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 border border-amber-500/20 font-medium">
                  Promotions (Special Deals)
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-500/20 font-medium">
                  Social (Notifications)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Privacy First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Shield className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Privacy First</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We believe your email is private. The extension operates entirely within your browser. Email contents are analyzed locally, never uploaded to third-party databases, and never sold.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs text-emerald-600 dark:text-emerald-400 font-semibold gap-1">
              <span>Zero-server data policy</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>

          {/* Card 3: Newsletter Detection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <MailSearch className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Newsletter Detection</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Scans headers and list attributes to instantly compile a list of newsletter senders. Review which ones you haven't read in 30 days and unsubscribe with one tap.
              </p>
            </div>
            <div className="mt-6 text-xs text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
              <span>Unsubscribe headers matched</span>
            </div>
          </motion.div>

          {/* Card 4: Smart Cleanup (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="md:col-span-2 rounded-2xl border border-border bg-card/60 backdrop-blur p-8 flex flex-col justify-between overflow-hidden relative group hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-4 max-w-md z-10">
              <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center">
                <Sparkles className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Smart Cleanup & Bulk Delete</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Overwhelmed by 10,000+ unread promotional emails? Our filter templates let you target unread social media alerts and expired shopping vouchers to delete them in one giant clean.
              </p>
            </div>
            
            {/* Visual simulation */}
            <div className="mt-8 bg-background border border-border rounded-xl p-4 flex flex-col gap-2 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                <span>Filter: Unread newsletters older than 90 days</span>
                <span className="font-semibold text-red-500 flex items-center gap-0.5">
                  <Trash2 className="h-3 w-3" /> Delete 2,451 emails
                </span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
          </motion.div>

          {/* Card 5: One-click Cleanup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <CheckSquare className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">One-click & Undo</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Run sweeps with a single click. Made a mistake? All operations support temporary undo buffering, allowing you to restore emails before changes commit permanently.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs text-blue-600 dark:text-blue-400 font-semibold gap-1">
              <CornerUpLeft className="h-3.5 w-3.5" />
              <span>Full local undo buffer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
