"use client";

import { Compass, Lightbulb, Handshake } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    description: "To foster brotherhood among men of integrity, promote personal and moral development, and contribute meaningfully to the betterment of our community through Masonic principles and service.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "A community of enlightened men dedicated to self-improvement, genuine friendship, and making a positive impact on the world around us.",
  },
  {
    icon: Handshake,
    title: "Our Values",
    description: "Integrity, fellowship, continuous growth, community service, and the pursuit of excellence in all aspects of our lives—personal, professional, and spiritual.",
  },
];

export function MissionValuesSection() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Mission, Vision & Values"
          subtitle="The foundation of who we are and what we stand for."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <div className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] p-8 transition-all duration-300 hover:border-[var(--color-primary)]/50">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--color-primary)]/5 transition-transform duration-300 group-hover:scale-150" />
                  
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-sm bg-[var(--color-primary)]/10 p-3">
                      <Icon className="h-8 w-8 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                      {value.description}
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
