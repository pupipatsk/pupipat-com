"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function PhotographyLightbox({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Prevent background scroll while the modal is open.
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog for keyboard/screen reader users.
    closeButtonRef.current?.focus();

    const focusableSelector =
      'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialogEl = dialogRef.current;
      if (!dialogEl) return;

      const focusable = Array.from(
        dialogEl.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.getAttribute("aria-hidden") !== "true"
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (!active || active === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
      style={{ overscrollBehavior: "contain" }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="photography-lightbox-title"
        className="relative max-w-3xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="photography-lightbox-title" className="sr-only">
          Photo preview
        </h2>

        <Image
          src={src}
          alt="Full size"
          width={1200}
          height={800}
          className="rounded-lg object-contain max-h-[90vh] mx-auto"
        />
        <button
          type="button"
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-sm p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Close lightbox"
        >
          X
        </button>
      </div>
    </div>
  );
}

