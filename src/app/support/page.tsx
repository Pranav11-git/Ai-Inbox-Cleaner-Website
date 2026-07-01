import type { Metadata } from "next";
import Link from "next/link";
import {
  Bug,
  GitBranch,
  KeyRound,
  LifeBuoy,
  Mail,
  Puzzle,
  ShieldQuestion,
  Trash2,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support - AI Inbox Cleaner",
  description:
    "Get support for AI Inbox Cleaner, including OAuth login issues, extension permissions, revoking Gmail access, uninstalling, bugs, and feature requests.",
  alternates: {
    canonical: "/support",
  },
};

const supportTopics = [
  {
    title: "OAuth login problems",
    description:
      "Confirm you are signed into the correct Google account, allow popups for the OAuth consent flow, and check whether a Workspace administrator blocks third-party app access.",
    icon: KeyRound,
  },
  {
    title: "Extension permissions",
    description:
      "AI Inbox Cleaner requests Gmail modification access so it can classify messages and apply reviewed cleanup actions like archive, label, or move to Trash.",
    icon: ShieldQuestion,
  },
  {
    title: "Revoke Gmail access",
    description:
      "Open your Google Account permissions page, select AI Inbox Cleaner, and remove third-party access. This immediately prevents future Gmail API requests.",
    icon: Puzzle,
  },
  {
    title: "Uninstall the extension",
    description:
      "Open chrome://extensions, find AI Inbox Cleaner, and choose Remove. You can also remove it from the Chrome toolbar context menu.",
    icon: Trash2,
  },
  {
    title: "Bug reporting",
    description:
      "Include your extension version, Chrome version, account type, expected result, actual result, and reproduction steps. Screenshots help when they do not expose private email.",
    icon: Bug,
  },
  {
    title: "Feature requests",
    description:
      "Tell us which cleanup workflow you are trying to improve, how often it happens, and what a successful outcome would look like.",
    icon: LifeBuoy,
  },
];

export default function SupportPage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute right-10 top-24 -z-10 h-[320px] w-[320px] rounded-full glow-blue" />
      <div className="absolute bottom-20 left-10 -z-10 h-[320px] w-[320px] rounded-full glow-teal" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <LifeBuoy className="h-3.5 w-3.5" />
            <span>Help Center</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Support for AI Inbox Cleaner
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Find practical help for installation, Google OAuth, Gmail permissions, account access, bug reports, and product feedback.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supportTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <section key={topic.title} className="rounded-lg border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-foreground">{topic.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              </section>
            );
          })}
        </div>

        <section className="mt-12 rounded-lg border border-border bg-card/80 p-6 shadow-sm backdrop-blur sm:p-8">
          <h2 className="text-xl font-bold text-foreground">Contact support</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            For private support, email <a className="text-primary underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>. For public bugs and feature requests, open a GitHub issue.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/95"
            >
              <Mail className="h-4 w-4" />
              Email support
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <GitBranch className="h-4 w-4" />
              GitHub issues
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Read FAQ
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
