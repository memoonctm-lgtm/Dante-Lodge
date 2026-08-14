"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  {
    number: "174",
    label: "Lodge Number",
    description: "A proud part of Masonic heritage",
  },
  {
    number: "200+",
    label: "Active Members",
    description: "Growing community of dedicated men",
  },
  {
    number: "10+",
    label: "Years of Service",
    description: "Making an impact in Louisiana",
  },
  {
    number: "$100K+",
    label: "Community Donations",
    description: "Supporting local causes annually",
  },
];

export function StatsSection() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Our Impact by the Numbers"
          subtitle="See the difference Dante Lodge #174 is making."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] p-8 text-center transition-all duration-300 hover:border-[var(--color-primary)]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="font-serif text-5xl font-bold text-[var(--color-primary)]">
                    {stat.number}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {stat.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
