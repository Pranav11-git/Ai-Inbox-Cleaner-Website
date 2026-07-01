"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GitBranch, ArrowRight, ShieldCheck, Zap, Mail, Trash2, CheckCircle2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";

const mockEmails = [
  { id: 1, sender: "Tech Crunch Weekly", subject: "10 Startups Redefining the Future of AI", category: "Newsletter", size: "120 KB", status: "unread" },
  { id: 2, sender: "LinkedIn Updates", subject: "John Doe and 4 others viewed your profile", category: "Social", size: "45 KB", status: "unread" },
  { id: 3, sender: "SaaS Analytics", subject: "Invoice #2026-983 for June Subscription", category: "Important", size: "85 KB", status: "read" },
  { id: 4, sender: "Cloud Services Pro", subject: "Upgrade your cloud storage plan today!", category: "Promotions", size: "210 KB", status: "unread" },
  { id: 5, sender: "Daily Digest Daily", subject: "Here is your curated reading list for today", category: "Newsletter", size: "95 KB", status: "unread" },
];

export default function Hero() {
  const [emails, setEmails] = useState(mockEmails);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0); // 0: idle, 1: scanning, 2: scan complete, 3: cleaned
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    if (isScanning || scanStep === 3) return;
    setIsScanning(true);
    setScanStep(1);
    setProgress(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isScanning && progress < 100) {
      timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 4, 100));
      }, 80);
    } else if (isScanning && progress === 100) {
      setIsScanning(false);
      setScanStep(2);
    }
    return () => clearTimeout(timer);
  }, [isScanning, progress]);

  const runCleanup = () => {
    setScanStep(3);
    // Filter out newsletters and promotions for visualization
    setTimeout(() => {
      setEmails((prev) =>
        prev.filter((email) => email.category !== "Newsletter" && email.category !== "Promotions")
      );
    }, 400);
  };

  const resetSimulation = () => {
    setEmails(mockEmails);
    setScanStep(0);
    setProgress(0);
    setIsScanning(false);
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 grid-bg">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-blue" />
      <div className="absolute top-1/3 left-1/3 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-teal" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Zap className="h-3.5 w-3.5" />
              <span>Version 1.0.0 Now Available</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Clean your Gmail <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                with AI.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI Inbox Cleaner helps you organize your inbox, detect newsletters, remove clutter, and clean Gmail safely using local AI analysis. Save hours of manual cleaning.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={siteConfig.chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200 group"
              >
                <span>Download Extension</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl border border-border bg-card/50 hover:bg-muted/80 backdrop-blur px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-200"
              >
                <GitBranch className="h-5 w-5" />
                <span>View on GitHub</span>
              </Link>
            </div>

            {/* Badges of trust */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <ShieldCheck className="h-4.5 w-4.5 text-accent" />
                <span>Privacy-First (Local)</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="h-4.5 w-4.5 text-accent" />
                <span>OAuth review ready</span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Dashboard Mock */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden border border-border shadow-2xl relative"
            >
              {/* Top Control Bar */}
              <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/20">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-muted-foreground ml-2 font-medium">AI Inbox Simulator</span>
                </div>
                <div className="flex items-center space-x-2">
                  {scanStep > 0 && (
                    <button
                      onClick={resetSimulation}
                      className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground bg-card border border-border px-2.5 py-1 rounded-md transition-colors"
                      title="Reset Simulator"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  )}
                  <button
                    onClick={scanStep === 2 ? runCleanup : startScan}
                    disabled={isScanning || scanStep === 3}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold shadow-sm transition-all duration-200 ${
                      scanStep === 2
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : scanStep === 3
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50"
                    }`}
                  >
                    {scanStep === 2 ? "Clean Recommended" : scanStep === 3 ? "Inbox Cleaned" : "Scan Inbox"}
                  </button>
                </div>
              </div>

              {/* Progress and status updates */}
              {scanStep > 0 && (
                <div className="px-4 py-2 bg-primary/5 border-b border-border/80 flex items-center justify-between text-xs text-primary font-medium">
                  {scanStep === 1 && (
                    <>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 animate-bounce" />
                        Scanning emails ({progress}%)
                      </span>
                      <div className="w-24 bg-primary/20 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full transition-all duration-100" style={{ width: `${progress}%` }} />
                      </div>
                    </>
                  )}
                  {scanStep === 2 && (
                    <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Scan complete: 3 clutter emails detected (1.3 MB)
                    </span>
                  )}
                  {scanStep === 3 && (
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5 animate-pulse" />
                      Inbox optimized! 425 KB storage freed.
                    </span>
                  )}
                </div>
              )}

              {/* Inbox Mock List */}
              <div className="p-4 space-y-3 min-h-[300px] flex flex-col justify-start">
                <AnimatePresence mode="popLayout">
                  {emails.map((email, idx) => {
                    const isClutter = email.category === "Newsletter" || email.category === "Promotions";
                    return (
                      <motion.div
                        key={email.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                        transition={{ delay: idx * 0.05 }}
                        className={`p-3 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                          scanStep === 2 && isClutter
                            ? "border-red-500/40 bg-red-500/5 dark:bg-red-500/10"
                            : "border-border bg-card"
                        }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <div
                            className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                              scanStep === 2 && isClutter
                                ? "bg-red-500/10 text-red-500"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Mail className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-xs text-foreground truncate">{email.sender}</span>
                              <span
                                className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium border ${
                                  email.category === "Newsletter"
                                    ? "bg-purple-500/5 border-purple-500/20 text-purple-600 dark:text-purple-400"
                                    : email.category === "Social"
                                    ? "bg-blue-500/5 border-blue-500/20 text-blue-600 dark:text-blue-400"
                                    : email.category === "Promotions"
                                    ? "bg-amber-500/5 border-amber-500/20 text-amber-600 dark:text-amber-400"
                                    : "bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                }`}
                              >
                                {email.category}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate max-w-[200px] sm:max-w-[300px] mt-0.5">
                              {email.subject}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="text-muted-foreground hidden sm:inline">{email.size}</span>
                          {scanStep === 2 && isClutter && (
                            <span className="text-red-500 font-semibold flex items-center gap-0.5 shrink-0 bg-red-500/10 px-1.5 py-0.5 rounded text-[10px]">
                              <Trash2 className="h-3 w-3" />
                              Delete
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {emails.length === 2 && scanStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">Inbox Safely Optimized</h3>
                    <p className="text-xs text-muted-foreground max-w-xs mt-1">
                      Newsletter subscriptions and marketing clutter have been safely removed. Only important emails remain.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
