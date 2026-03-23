import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "./CopyEmailButton";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pupipat Singkhorn.",
};

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-light font-sans tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl font-sans">
            Interested in working together or have any questions?
          </p>
        </div>
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 pt-8">
          <CopyEmailButton
            email="pupipat.sk@gmail.com"
            className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-0 bg-secondary hover:bg-secondary/80"
          />
          <Button
            variant="outline"
            asChild
            className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-0 bg-secondary hover:bg-secondary/80"
          >
            <Link
              href="https://www.linkedin.com/in/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-8 w-8" />
              <span className="text-lg font-medium font-mono">LinkedIn</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-0 bg-secondary hover:bg-secondary/80"
          >
            <Link
              href="https://github.com/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-8 w-8" />
              <span className="text-lg font-medium font-mono">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
