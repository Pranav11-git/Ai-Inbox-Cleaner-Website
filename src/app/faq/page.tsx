import type { Metadata } from "next";
import { HelpCircle, ShieldCheck } from "lucide-react";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ - AI Inbox Cleaner",
  description:
    "Answers about AI Inbox Cleaner privacy, Gmail permissions, AI analysis, cleanup safety, support, and account access.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="absolute left-10 top-16 -z-10 h-[320px] w-[320px] rounded-full glow-blue" />
      <div className="absolute bottom-20 right-10 -z-10 h-[320px] w-[320px] rounded-full glow-teal" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Product Questions</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Clear answers about Gmail permissions, privacy, AI analysis, cleanup safeguards, and support for {siteConfig.name}.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {faqItems.map((item) => (
            <section
              key={item.question}
              className="rounded-lg border border-border bg-card/70 p-5 shadow-sm backdrop-blur"
            >
              <h2 className="flex items-start gap-3 text-base font-bold text-foreground">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{item.question}</span>
              </h2>
              <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
