"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSite } from "@/context/SiteProvider";
import { GalleryCategory, GalleryItem } from "@/types/site";
import { cn } from "@/lib/utils";

const filters: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Events", value: "events" },
  { label: "Community Service", value: "service" },
  { label: "History", value: "history" },
];

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[80vh] w-full object-contain"
        />
        <div className="bg-[var(--color-secondary)] p-6">
          <h3 className="font-serif text-xl font-bold text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-[var(--color-text-muted)]">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function GalleryGrid() {
  const { content } = useSite();
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "all"
      ? content.gallery
      : content.gallery.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "rounded-sm px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all",
              activeFilter === filter.value
                ? "bg-[var(--color-accent)] text-white"
                : "border border-white/10 text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-white"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.08}>
            <button
              onClick={() => setSelectedItem(item)}
              className="group relative w-full overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] text-left transition-all hover:border-[var(--color-primary)]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
                  <ZoomIn className="h-10 w-10 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {item.category}
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
