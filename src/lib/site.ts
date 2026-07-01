import type { LucideIcon } from "lucide-react";

export const siteConfig = {
  name: "AI Inbox Cleaner",
  tagline: "Clean your inbox intelligently.",
  description:
    "AI-powered Gmail cleanup that helps you review newsletters, remove clutter, and organize Gmail safely.",
  url: "https://aiinboxcleaner.com",
  supportEmail: "pranavsharma.engineer@gmail.com",
  legalEmail: "pranavsharma.engineer@gmail.com",
  githubUrl: "https://github.com/Pranav11-git/Ai-Inbox-Cleaner",
  linkedinUrl: "https://www.linkedin.com/in/1011-pranav-sharma/",
  chromeStoreUrl: "https://chromewebstore.google.com/",
};

export const faqItems = [
  {
    question: "Is my email safe with AI Inbox Cleaner?",
    answer:
      "Yes. The extension is designed around review-first cleanup. It requests Gmail access only after you approve Google OAuth, shows recommendations before action, and does not automatically permanently delete email.",
  },
  {
    question: "Do you store my emails?",
    answer:
      "No. AI Inbox Cleaner does not operate its own backend servers for storing your Gmail messages, email bodies, OAuth tokens, or cleanup history. Scanning data is handled in the extension environment.",
  },
  {
    question: "Why does the extension need Gmail permissions?",
    answer:
      "The extension uses https://www.googleapis.com/auth/gmail.modify so it can read enough message metadata to identify clutter and then archive, label, or move selected messages to Trash only after you confirm.",
  },
  {
    question: "Can AI read my emails?",
    answer:
      "The extension may analyze message metadata such as sender, subject, snippets, labels, dates, and unsubscribe headers to classify clutter. If an external AI provider is enabled, only the minimum data needed for the requested classification should be transmitted.",
  },
  {
    question: "Does AI Inbox Cleaner permanently delete emails?",
    answer:
      "No automatic permanent deletion is performed. Cleanup actions are presented for review first, and selected delete actions move messages to Gmail Trash so they can be restored during Gmail's standard recovery window.",
  },
  {
    question: "Can I undo cleanup?",
    answer:
      "The product is designed to make cleanup reversible by keeping you in the review step and using Gmail actions such as archive, labels, or Trash instead of immediate permanent deletion.",
  },
  {
    question: "How do I revoke Gmail access?",
    answer:
      "Visit https://myaccount.google.com/permissions, find AI Inbox Cleaner under third-party access, and remove access. You can do this at any time.",
  },
  {
    question: "How do I uninstall the extension?",
    answer:
      "Open Chrome's Extensions page, find AI Inbox Cleaner, and choose Remove. You can also right-click the extension icon in the toolbar and select Remove from Chrome.",
  },
  {
    question: "Does the extension sell personal information?",
    answer:
      "No. AI Inbox Cleaner does not sell, rent, or trade personal information and does not use Gmail data for advertising profiles.",
  },
  {
    question: "What data is used for AI categorization?",
    answer:
      "Classification is based on practical inbox signals such as sender, subject, labels, dates, snippets, read state, and list-unsubscribe headers. The goal is to detect patterns without collecting unnecessary content.",
  },
  {
    question: "Can I choose what gets cleaned?",
    answer:
      "Yes. The workflow is built around recommendations. You review categories, senders, and proposed actions before running cleanup.",
  },
  {
    question: "Will important emails be deleted by mistake?",
    answer:
      "The product includes safeguards such as manual review, conservative categories, and protected message types. You should still review recommendations before approving bulk actions.",
  },
  {
    question: "Does it work with all Gmail accounts?",
    answer:
      "AI Inbox Cleaner is intended for Gmail accounts that can authorize Chrome extensions and Google OAuth access. Workspace administrators may restrict third-party app access.",
  },
  {
    question: "Is there a backend service?",
    answer:
      "The extension itself does not operate its own servers for storing user emails. If future optional cloud features are added, they will be documented before use.",
  },
  {
    question: "What happens if Google changes Gmail APIs?",
    answer:
      "The extension depends on Google APIs. If Google changes API behavior, permissions, or availability, the product may need an update to keep working correctly.",
  },
  {
    question: "How can I report a bug?",
    answer:
      "Use the support page to contact us by email or open a GitHub issue with your Chrome version, extension version, steps to reproduce, and screenshots if possible.",
  },
  {
    question: "Is AI Inbox Cleaner free?",
    answer:
      "The website and extension materials currently describe the product. Pricing, if introduced, will be disclosed clearly before any paid feature is required.",
  },
  {
    question: "Can I request a feature?",
    answer:
      "Yes. Feature requests are welcome through GitHub issues or the contact email listed on the support page.",
  },
];

export type InfoCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};
