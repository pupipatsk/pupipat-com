"use client";

import Image from "next/image";

export function PhotographyLightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-3xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Full size"
          width={1200}
          height={800}
          className="rounded-lg object-contain max-h-[90vh] mx-auto"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-sm p-2"
          aria-label="Close lightbox"
        >
          X
        </button>
      </div>
    </div>
  );
}

