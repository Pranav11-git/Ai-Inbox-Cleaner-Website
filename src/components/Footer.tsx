"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitBranch, Shield, HelpCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-auto transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="AI Inbox Cleaner logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-bold tracking-tight text-foreground">
                AI Inbox Cleaner
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Clean your inbox intelligently. A privacy-first Chrome Extension that scans your Gmail to remove clutter, detect newsletters, and bulk unsubscribe safely.
            </p>
          </div>

          {/* Links Grid */}
          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <GitBranch className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Help & Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal & Trust</h3>
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <Shield className="h-4 w-4" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Sales & Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border/80 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} AI Inbox Cleaner. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Developed by <span className="font-semibold text-foreground hover:text-primary transition-colors">Pranav Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
