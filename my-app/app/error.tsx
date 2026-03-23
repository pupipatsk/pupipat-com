"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Helpful during development; Next will also surface the real stack in dev.
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="container max-w-2xl py-16">
      <h1 className="text-2xl font-semibold">Something went wrong.</h1>
      <p className="mt-3 text-muted-foreground">
        Please try again, or go back to the homepage.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted/50"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

