"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Instagram } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export const dynamic = "force-dynamic";
export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [loadedPhotos, setLoadedPhotos] = useState<Record<number, boolean>>({});
  // Photography categories
  const categories = [
    { id: "all", name: "All" },
    { id: "events", name: "Events" },
    { id: "street", name: "Street" },
    { id: "landscape", name: "Landscape" },
    { id: "portrait", name: "Portrait" },
  ];

  // Photography items (placeholder data)
  const photos = [
    { id: 1, title: "", category: "landscape", src: "/photography/lnd-1.jpg" },
    { id: 2, title: "", category: "events", src: "/photography/evt-1.jpg" },
    { id: 3, title: "", category: "portrait", src: "/photography/ptr-1.jpg" },
    { id: 4, title: "", category: "street", src: "/photography/st-2.jpg" },
    { id: 5, title: "", category: "street", src: "/photography/st-3.jpg" },
    { id: 6, title: "", category: "events", src: "/photography/evt-3.jpg" },
    { id: 7, title: "", category: "landscape", src: "/photography/lnd-2.jpg" },
    { id: 8, title: "", category: "portrait", src: "/photography/ptr-3.jpg" },
  ];

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
            <div
              className="flex items-center gap-2 cursor-pointer group text-muted-foreground hover:text-foreground transition-colors"
              onClick={() =>
                window.open("https://www.instagram.com/pupick.sk/", "_blank")
              }
            >
              <Instagram className="h-4 w-4" />
              <span className="font-mono text-sm">@pupick.sk</span>
              <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground font-mono mb-4">
        A selection of my photographic work
      </p>
      <Tabs defaultValue="all" className="mb-8">
        <div className="mb-6 overflow-x-auto">
          <TabsList className="inline-flex whitespace-nowrap justify-start">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="photo-grid">
              {photos
                .filter(
                  (photo) =>
                    category.id === "all" || photo.category === category.id
                )
                .map((photo) => (
                  <div
                    key={photo.id}
                    className="photo-item relative aspect-square overflow-hidden"
                  >
                    <Skeleton
                      className="absolute inset-0 h-full w-full"
                      style={{
                        visibility: loadedPhotos[photo.id]
                          ? "hidden"
                          : "visible",
                      }}
                    />
                    <Image
                      src={photo.src || "/placeholder.svg?height=500&width=500"}
                      alt={photo.title || "Untitled"}
                      width={500}
                      height={500}
                      className="rounded-md object-cover h-full w-full"
                      loading="lazy"
                      onClick={() => setSelectedPhoto(photo.src)}
                      onLoad={() =>
                        setLoadedPhotos((prev) => ({
                          ...prev,
                          [photo.id]: true,
                        }))
                      }
                    />
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto}
              alt="Full size"
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[90vh] mx-auto"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white text-sm p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
