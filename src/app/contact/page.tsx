import type { Metadata } from "next";
import { Briefcase, Clock, GitBranch, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact - AI Inbox Cleaner",
  description:
    "Contact AI Inbox Cleaner for support, privacy questions, Chrome Web Store review, OAuth verification, partnerships, and product feedback.",
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    title: "Email",
    value: siteConfig.supportEmail,
    href: `mailto:${siteConfig.supportEmail}`,
    description: "Best for support, privacy questions, and Chrome Web Store review requests.",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "Project repository",
    href: siteConfig.githubUrl,
    description: "Use GitHub for public issues, feature requests, and technical discussion.",
    icon: GitBranch,
  },
  {
    title: "LinkedIn",
    value: "Developer profile",
    href: siteConfig.linkedinUrl,
    description: "Use LinkedIn for professional inquiries and partnership conversations.",
    icon: Briefcase,
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute left-10 top-20 -z-10 h-[320px] w-[320px] rounded-full glow-blue" />
      <div className="absolute bottom-16 right-10 -z-10 h-[320px] w-[320px] rounded-full glow-teal" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Contact</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Talk to the AI Inbox Cleaner team
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Reach out for extension support, OAuth verification questions, Chrome Web Store review, privacy requests, or product feedback.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-card/70 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h2 className="font-bold text-foreground">Response time and support hours</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We aim to respond within 2 business days. Standard support hours are Monday to Friday, 10:00 AM to 6:00 PM India Standard Time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-7">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-lg border border-border bg-card/70 p-6 shadow-sm backdrop-blur transition hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground">{method.title}</h2>
                      <p className="mt-1 text-sm font-semibold text-primary">{method.value}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
