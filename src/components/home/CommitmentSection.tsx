"use client";

import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  "Fostering genuine brotherhood and lifelong friendships",
  "Promoting personal growth and moral development",
  "Supporting our community through meaningful service",
  "Upholding the highest standards of integrity and ethics",
  "Providing educational opportunities and mentorship",
  "Creating an inclusive environment for men of all backgrounds",
  "Preserving Masonic traditions while embracing the modern world",
  "Empowering men to become better husbands, fathers, and citizens",
];

export function CommitmentSection() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Our Commitment to You"
          subtitle="What you can expect from Dante Lodge #174."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((commitment, index) => (
            <AnimatedSection key={commitment} delay={index * 0.08}>
              <div className="flex items-start gap-4 rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/50">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-[var(--color-accent)]" />
                <p className="leading-relaxed text-[var(--color-text-muted)]">
                  {commitment}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
