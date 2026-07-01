"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Sparkles, Download, ArrowRight, GitBranch } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API request
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden transition-all duration-300">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-blue" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-border text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
              <Sparkles className="h-6 w-6" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Ready to claim Inbox Zero?
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Install the AI Inbox Cleaner Chrome Extension today. Clean up newsletter subscriptions, eliminate marketing clutter, and organize Gmail securely.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href={siteConfig.chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200"
              >
                <Download className="h-5 w-5" />
                <span>Download Extension</span>
              </Link>
              <Link
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl border border-border bg-card/50 hover:bg-muted/80 px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-200"
              >
                <GitBranch className="h-5 w-5" />
                <span>GitHub Repository</span>
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-border/80 pt-10 mt-10 max-w-md mx-auto space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-sm font-bold text-foreground">Get privacy tips & product updates</h3>
                <p className="text-xs text-muted-foreground">No spam. Only high-value insights, once a month.</p>
              </div>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-semibold"
                >
                  Thanks for subscribing. Please check your inbox to confirm.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-border bg-card px-10 py-2.5 text-xs text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-xl bg-primary hover:bg-primary/95 text-white px-5 py-2.5 text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-1 shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
