"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const PhotographyLightbox = dynamic(
  () =>
    import("./photography-lightbox").then(
      (mod) => mod.PhotographyLightbox
    ),
  { ssr: false }
);

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

export function PhotographyGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [loadedPhotos, setLoadedPhotos] = useState<Record<number, boolean>>(
    {}
  );

  return (
    <>
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        <PhotographyLightbox
          src={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

