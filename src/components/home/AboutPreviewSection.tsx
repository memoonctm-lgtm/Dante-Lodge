"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/context/SiteProvider";

export function AboutPreviewSection() {
  const { content } = useSite();

  return (
    <section className="bg-[var(--color-secondary)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Built for Brotherhood
            </h2>
            <div className="mt-6 h-1 w-16 bg-[var(--color-primary)]" />
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              {content.about.content}
            </p>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Designed for men aged 18–45 seeking integrity, personal growth,
              and meaningful community impact in Louisiana.
            </p>
            <Link href="/about" className="mt-8 inline-block">
              <Button variant="primary" size="md">
                <BookOpen className="h-5 w-5" />
                Discover Our Story
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                  alt="Dante Lodge building"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-sm border border-[var(--color-primary)]/30 bg-[var(--color-background)] p-6 shadow-2xl">
                <p className="font-serif text-lg font-bold text-white">
                  &ldquo;Making good men better.&rdquo;
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  — The mission of Freemasonry
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
