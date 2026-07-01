import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { faqItems } from "@/lib/site";

export default function HomeFAQ() {
  return (
    <section className="border-t border-border/70 bg-card/20 py-20 transition-all duration-300 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Clear answers before you connect Gmail
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Privacy, permissions, AI analysis, cleanup safety, and account control explained in plain language.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faqItems.slice(0, 15).map((item) => (
            <section key={item.question} className="rounded-lg border border-border bg-card/70 p-5 backdrop-blur">
              <h3 className="flex items-start gap-3 text-sm font-bold text-foreground">
                <HelpCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                <span>{item.question}</span>
              </h3>
              <p className="mt-3 pl-7 text-xs leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            View all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
