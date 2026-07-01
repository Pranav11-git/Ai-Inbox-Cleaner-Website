import React from "react";
import { FileText, ShieldAlert, Scale, HelpCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Terms of Service - AI Inbox Cleaner",
  description: "Official Terms of Service for AI Inbox Cleaner Chrome Extension. Read about our usage agreements, warranty policies, and legal liabilities.",
};

export default function TermsOfService() {
  const lastUpdated = "June 30, 2026";

  return (
    <div className="py-16 sm:py-24 relative overflow-hidden transition-all duration-300">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 -z-10 h-[300px] w-[300px] rounded-full glow-blue" />
      <div className="absolute bottom-20 left-10 -z-10 h-[350px] w-[350px] rounded-full glow-teal" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-border pb-8 mb-10">
          <div className="inline-flex items-center space-x-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 text-xs font-semibold mb-4">
            <FileText className="h-3.5 w-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last Updated: {lastUpdated} | Developed by Pranav Sharma
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-foreground/95 leading-relaxed font-sans text-sm sm:text-base">
          {/* Agreement Section */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">1.</span> Agreement to Terms
            </h2>
            <p>
              By installing, activating, and using the AI Inbox Cleaner browser extension ("the Extension"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not install or use the Extension.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">2.</span> Acceptable Use & License Grant
            </h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, revocable license to use the Extension for personal or internal business productivity purposes.
            </p>
            <p className="font-semibold text-foreground">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Use the Extension for any illegal or unauthorized purposes.</li>
              <li>Attempt to reverse-engineer, decompile, or extract the source code of the Extension, except as permitted by open-source licensing.</li>
              <li>Abuse the Gmail API or cause excessive traffic to Google's mail servers.</li>
              <li>Use the Extension to scrape email addresses or send unsolicited bulk messages (spam).</li>
            </ul>
          </section>

          {/* Google APIs & Scope Usage */}
          <section className="space-y-3 p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">3.</span> Google APIs & Third-Party Platforms
            </h2>
            <p>
              The Extension interacts directly with Google APIs to access and manage your Gmail inbox. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                Your use of Google APIs is governed by Google's own <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline">Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy</a>.
              </li>
              <li>
                We are not responsible for any issues arising from Google's service availability, API changes, or account restrictions imposed by Google.
              </li>
              <li>
                You represent that you have the right to authorize access to the Gmail account connected to the Extension.
              </li>
            </ul>
          </section>

          {/* No Warranty (Disclaimer) */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">4.</span> Disclaimer of Warranty
            </h2>
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-foreground/90 space-y-1">
                <p className="font-bold text-foreground">WARRANTY DISCLAIMER ("AS-IS"):</p>
                <p>
                  THE EXTENSION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE EXTENSION WILL OPERATE UNINTERRUPTED, SECURELY, OR WITHOUT ERRORS. YOU ASSUME ALL RISK RELATING TO THE CLEANING, ARCHIVING, OR PURGING OF EMAILS.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">5.</span> Limitation of Liability
            </h2>
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 flex gap-3">
              <Scale className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-foreground/90 space-y-1">
                <p className="font-bold text-foreground">LIABILITY LIMITATION:</p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE DEVELOPER (PRANAV SHARMA) BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, REVENUE, PROFIT, OR SERVICE INTERRUPTION) ARISING FROM THE USE OF OR INABILITY TO USE THE EXTENSION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">6.</span> Termination
            </h2>
            <p>
              You may terminate these Terms at any time by uninstalling the Extension and revoking its access in your Google Account security settings. We reserve the right to suspend or terminate the licensing grant, discontinue support, or update functionality at our sole discretion without prior notice.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">7.</span> Governing Law
            </h2>
            <p>
              These Terms and your use of the Extension are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delhi, India.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="text-primary">8.</span> Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make updates, we will update the "Last Updated" date at the top of this page. Your continued use of the Extension following changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Contact Section */}
          <section className="p-6 rounded-2xl bg-card border border-border space-y-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span>Contact Information</span>
            </h2>
            <p className="text-sm">
              If you have any questions or feedback regarding these Terms of Service, please reach out to our team:
            </p>
            <div className="text-sm font-semibold text-foreground space-y-1">
              <p>Developer: Pranav Sharma</p>
              <p>Email: <span className="text-primary">{siteConfig.legalEmail}</span></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
