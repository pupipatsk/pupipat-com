"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
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

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = useMemo(() => {
    const raw = searchParams.get("category");
    if (categories.some((c) => c.id === raw)) return raw ?? "all";
    return "all";
  }, [searchParams]);

  return (
    <>
      <Tabs
        value={categoryFromUrl}
        onValueChange={(value) => {
          const params = new URLSearchParams(searchParams.toString());
          if (value === "all") {
            params.delete("category");
          } else {
            params.set("category", value);
          }
          router.replace(`?${params.toString()}`, { scroll: false });
        }}
        className="mb-8"
      >
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
                  <button
                    key={photo.id}
                    type="button"
                    className="photo-item relative aspect-square overflow-hidden bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label={`Open ${photo.category} photo ${photo.id}`}
                    onClick={() => setSelectedPhoto(photo.src)}
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
                      alt={
                        photo.title?.trim()
                          ? photo.title
                          : `${category.name} photo ${photo.id}`
                      }
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="rounded-md object-cover h-full w-full"
                      loading="lazy"
                      onLoad={() =>
                        setLoadedPhotos((prev) => ({
                          ...prev,
                          [photo.id]: true,
                        }))
                      }
                    />
                  </button>
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

