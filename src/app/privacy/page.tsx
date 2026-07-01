import React from "react";
import Link from "next/link";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy - AI Inbox Cleaner",
  description: "Official Privacy Policy for AI Inbox Cleaner Chrome Extension. Read about our Google OAuth scopes, local data policies, and security practices.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "June 30, 2026";

  return (
    <div className="py-16 sm:py-24 relative overflow-hidden transition-all duration-300">
      {/* Decorative background glows */}
      <div className="absolute top-20 left-10 -z-10 h-[300px] w-[300px] rounded-full glow-blue" />
      <div className="absolute top-1/2 right-10 -z-10 h-[350px] w-[350px] rounded-full glow-teal" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-border pb-8 mb-10">
          <div className="inline-flex items-center space-x-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-semibold mb-4">
            <Shield className="h-3.5 w-3.5" />
            <span>Google OAuth Compliant</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last Updated: {lastUpdated} | Created by Pranav Sharma
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-8 text-foreground/95 leading-relaxed font-sans text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">1.</span> Introduction
            </h2>
            <p>
              AI Inbox Cleaner (referred to as "the Extension", "we", "us", or "our") is a browser extension designed to help you organize your email inbox, detect newsletter subscriptions, group advertising clutter, and clean your mailbox efficiently.
            </p>
            <p>
              We are committed to maintaining the highest standards of user privacy and transparency. This Privacy Policy outlines what information the Extension accesses, how that data is used, and the absolute limits we place on data storage, sharing, and transmission. This policy is written to comply with the Google API Services User Data Policy, including the Limited Use requirements.
            </p>
          </section>

          {/* Scope Request & Details */}
          <section className="space-y-4 p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">2.</span> Google API Scopes & Gmail Access
            </h2>
            <p>
              The Extension requests access to your Gmail account only after you grant explicit consent via the standard Google OAuth consent screen. The Extension requests the following restricted permission scope:
            </p>
            <div className="my-4 p-3 bg-muted rounded-xl font-mono text-xs sm:text-sm text-primary break-all border border-border">
              https://www.googleapis.com/auth/gmail.modify
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-foreground">Why is this permission needed?</h3>
              <p>
                The <code>gmail.modify</code> permission allows the Extension to perform the following core operations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Index Headers and List Parameters:</strong> To read email headers (Subject, From, Date, List-Unsubscribe, and Content-Type) to classify newsletter subscriptions, newsletters you haven't read, and bulk marketing tags.
                </li>
                <li>
                  <strong>Trash or Archive Selected Clutter:</strong> To move messages to the Trash or Archive folders at your explicit, manual request.
                </li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3">
                <Lock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-foreground/90 space-y-1">
                  <p className="font-bold text-foreground">Critical Safety Guarantees:</p>
                  <p>
                    <strong>No Automatic Deletion:</strong> The Extension never permanently deletes emails automatically. All cleanup commands are queued as recommendations for your manual review. Emails are moved to the Gmail "Trash" folder, giving you a standard 30-day period to restore them via Gmail.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Local vs Server Processing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">3.</span> Data Storage and Zero Server Architecture
            </h2>
            <p>
              <strong>We do not operate backend servers to store your emails or personal credentials.</strong>
            </p>
            <p>
              All computations, rule evaluations, and indexing occur entirely on your local computer within the sandboxed context of the Extension.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Your OAuth access tokens are stored securely in local browser memory (Chrome Storage API) and are never transmitted to us or any third party.</li>
              <li>Your email headers and scanning parameters are held in temporary memory during your browser session and are cleared when the browser is closed.</li>
            </ul>
          </section>

          {/* AI Analysis and Providers */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">4.</span> External AI Processing Disclosures
            </h2>
            <p>
              If you opt-in to use advanced AI classification templates powered by external API providers (e.g., OpenAI or Anthropic), please be advised:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Minimum Data Transmission:</strong> The Extension transmits only the minimum required metadata (Subject, Sender, and Snippet) necessary to classify the message. We do not transmit entire email bodies, full attachments, or personal account identifiers.
              </li>
              <li>
                <strong>No Training:</strong> We mandate that any external AI APIs are invoked in "zero data retention" modes, ensuring that your metadata is never used to train machine learning models.
              </li>
            </ul>
          </section>

          {/* Strict Data Sharing and Selling Policy */}
          <section className="space-y-4 p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">5.</span> Strict Data Sharing & Limited Use compliance
            </h2>
            <p className="font-semibold text-foreground">
              We have a strict zero-monetization policy regarding user data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-background flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  <strong>No Sale of Data:</strong> We do not sell, rent, or trade your personal data, email details, or metadata to any third party.
                </span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-background flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  <strong>No Advertising:</strong> Your data is never used to serve advertisements, evaluate credit scores, or compile tracking profiles.
                </span>
              </div>
            </div>
            <p className="text-sm">
              Our use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/95">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
          </section>

          {/* Revocation & Access Control */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">6.</span> Access Revocation & Uninstallation
            </h2>
            <p>
              You maintain absolute control over the Extension's access permissions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Revoke Google OAuth Access:</strong> You can revoke the Extension's access to your Gmail account at any time by visiting your Google Account security panel under <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary underline">Third-party apps with account access</a>.
              </li>
              <li>
                <strong>Remove the Extension:</strong> Right-click the AI Inbox Cleaner icon in your Chrome toolbar and select "Remove from Chrome". This deletes all local browser caches, tokens, and storage objects instantly.
              </li>
            </ul>
          </section>

          {/* Additional Disclosures */}
          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="text-lg font-bold text-foreground">7. Data Retention</h2>
            <p className="text-sm">
              Because the Extension operates without a backend database server, we do not retain your Gmail data. Your email indices reside in temporary browser memory and are deleted immediately upon closing the sidebar panel or uninstalling the Extension.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">8. Children's Privacy</h2>
            <p className="text-sm">
              The Extension does not knowingly collect or target information from children under the age of 13. If you believe a child has granted access to their account, please contact us so we can guide you on revoking access tokens.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">9. User Rights and Choices</h2>
            <p className="text-sm">
              You may revoke Gmail access, uninstall the Extension, request clarification about data practices, or ask us to correct inaccurate support records associated with your request. Because we do not maintain a database of Gmail messages, we cannot access, export, or delete Gmail content on your behalf.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">10. Security</h2>
            <p className="text-sm">
              The Extension uses Google's OAuth flow, Chrome extension permissions, local browser storage, and review-first cleanup controls to reduce unnecessary access. No internet-connected system can be guaranteed completely secure, but we design the Extension to minimize data collection and limit the information available outside your browser.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">11. International Users</h2>
            <p className="text-sm">
              All scanning and computations are executed locally on your own machine. Your data does not cross international borders via our services, as no data is transferred to any of our servers.
            </p>

            <h2 className="text-lg font-bold text-foreground pt-4">12. Changes to This Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy to reflect changes in our tool suite or regulatory changes. Any updates will be posted on this page with a revised Last Updated date.
            </p>
          </section>

          {/* Contact Placeholders */}
          <section className="p-6 rounded-2xl bg-card border border-border space-y-3">
            <h2 className="text-lg font-bold text-foreground">13. Contact Information</h2>
            <p className="text-sm">
              For questions regarding this Privacy Policy or data security operations, please contact our support desk:
            </p>
            <div className="text-sm font-semibold text-foreground space-y-1">
              <p>Developer: Pranav Sharma</p>
              <p>Email: <span className="text-primary">{siteConfig.supportEmail}</span></p>
              <p>Support Portal: <Link href="/support" className="text-primary underline">{siteConfig.url.replace("https://", "")}/support</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
