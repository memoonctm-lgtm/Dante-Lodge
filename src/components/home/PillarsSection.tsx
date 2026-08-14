"use client";

import { Shield, Heart, HandHeart } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSite } from "@/context/SiteProvider";

const iconMap = {
  integrity: Shield,
  fellowship: Heart,
  community: HandHeart,
};

export function PillarsSection() {
  const { content } = useSite();

  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Our Core Pillars"
          subtitle="The foundation upon which every Mason builds his character and contribution to the world."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {content.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <AnimatedSection key={pillar.title} delay={index * 0.15}>
                <div className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] p-8 transition-all duration-300 hover:border-[var(--color-primary)]/50 hover:shadow-xl hover:shadow-emerald-900/10">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--color-primary)]/5 transition-transform duration-300 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-sm bg-[var(--color-primary)]/10 p-3">
                      <Icon className="h-8 w-8 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
