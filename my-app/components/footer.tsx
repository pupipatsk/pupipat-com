import Link from "next/link";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex w-full max-w-5xl flex-col items-center gap-4 rounded-full border border-border/40 bg-background/80 px-5 py-4 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/60 sm:flex-row sm:justify-between sm:gap-6">
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pupipatsk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Pupipat Singkhorn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
