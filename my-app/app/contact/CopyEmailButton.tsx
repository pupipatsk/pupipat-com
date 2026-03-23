"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email address:", error);
    }
  }

  return (
    <Button
      variant="outline"
      onClick={handleCopyEmail}
      aria-label="Copy email address"
      className={
        className ??
        "flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-0 bg-neutral-100 hover:bg-neutral-200"
      }
    >
      {copied ? (
        <>
          <Check className="h-8 w-8 text-green-500" />
          <span className="text-lg font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-8 w-8" />
          <span className="text-lg font-medium font-mono">Email</span>
        </>
      )}
    </Button>
  );
}

