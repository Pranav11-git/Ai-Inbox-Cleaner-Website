import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-blue" />
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <SearchX className="h-7 w-7" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          This page is not in the inbox
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          The page may have moved, or the link may be incorrect. Return home or visit support to find the right place.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/95"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
