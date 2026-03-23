import dynamic from "next/dynamic";
import { ExternalLink, Instagram } from "lucide-react";
import type { Metadata } from "next";

const PhotographyGallery = dynamic(
  () =>
    import("./components/photography-gallery").then(
      (mod) => mod.PhotographyGallery
    ),
  {
    loading: () => (
      <div className="py-12 text-center text-muted-foreground">
        Loading photography...
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Photography",
  description: "A selection of Pupipat Singkhorn's photography work.",
};

export default function PhotographyPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold">Photography Portfolio</h1>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-center">
          <div className="inline-flex items-center h-11 rounded-full bg-secondary/30 border border-border/50 pl-1 pr-4 gap-3">
            <div className="flex items-center gap-2 px-3 h-9 rounded-full bg-background/50 text-sm font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Opening for Work
            </div>
            <div className="h-5 w-px bg-border/50" />
            <a
              className="flex items-center gap-2 cursor-pointer group text-muted-foreground hover:text-foreground transition-colors"
              href="https://www.instagram.com/pupick.sk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-mono text-sm">@pupick.sk</span>
              <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground font-mono mb-4">
        A selection of my photographic work
      </p>

      <PhotographyGallery />
    </div>
  );
}
