"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager at Vercel",
    image: "SJ",
    content: "AI Inbox Cleaner is a game changer. I had 8,000 unread newsletters that were clogging my search results. In three clicks, my inbox was down to double digits, and I didn't lose a single important invoice.",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Independent Indie Hacker",
    image: "AR",
    content: "I was extremely skeptical about the security of Gmail extensions, but the fact that AI Inbox Cleaner runs locally in the browser convinced me. The transparency is outstanding, and it works flawlessly.",
    rating: 5,
  },
  {
    name: "Michelle Chen",
    role: "VP of Engineering",
    image: "MC",
    content: "This tool does exactly what it says. No bloated SaaS dashboards, no recurring fees. It lives in my Chrome sidebar, cleans my marketing junk on Friday afternoons, and saves me hours.",
    rating: 5,
  },
  {
    name: "Marcus Vance",
    role: "SaaS Founder",
    image: "MV",
    content: "The newsletter detection is scary accurate. It picked up newsletters I subscribed to 5 years ago that I forgot about. Unsubscribing took seconds. Highly recommend this extension.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-card/20 border-t border-border/60 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">User Reviews</h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Trusted by digital professionals
          </h3>
          <p className="text-base text-muted-foreground">
            Here is what developers, founders, and managers say about their experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border glass relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 h-8 w-8 text-primary/10 shrink-0" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-sm text-foreground/90 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center space-x-3 mt-6 pt-6 border-t border-border/80">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold text-sm shrink-0">
                  {review.image}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
