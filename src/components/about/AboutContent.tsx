"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSite } from "@/context/SiteProvider";

export function AboutContent() {
  const { content } = useSite();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              {content.about.title}
            </h2>
            <div className="mt-6 h-1 w-16 bg-[var(--color-primary)]" />
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              {content.about.content}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)]">
                <div
                  className="flex h-full items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at center, var(--color-primary) 0%, var(--color-secondary) 70%)`,
                    opacity: 0.3,
                  }}
                >
                  <svg
                    viewBox="0 0 200 200"
                    className="h-48 w-48 opacity-60"
                    fill="none"
                  >
                    <rect
                      x="40"
                      y="40"
                      width="120"
                      height="120"
                      stroke="#059669"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M100 30 L70 160 L100 130 L130 160 Z"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <text
                      x="100"
                      y="108"
                      textAnchor="middle"
                      fill="#D4AF37"
                      fontSize="28"
                      fontFamily="serif"
                      fontWeight="bold"
                    >
                      G
                    </text>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border-2 border-[var(--color-accent)]/30" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
