"use client";

import { Users, BookOpen, Heart, Zap, Globe, Award } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Users,
    title: "Lifelong Brotherhood",
    description: "Build genuine, meaningful friendships with men who share your values and aspirations.",
  },
  {
    icon: BookOpen,
    title: "Personal Development",
    description: "Access to educational programs, mentorship, and resources for continuous self-improvement.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Be part of a network that supports each other through life's challenges and celebrations.",
  },
  {
    icon: Zap,
    title: "Leadership Skills",
    description: "Develop and hone leadership abilities through various lodge roles and initiatives.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description: "Make a tangible difference through organized service projects and charitable work.",
  },
  {
    icon: Award,
    title: "Tradition & Legacy",
    description: "Join a centuries-old tradition of excellence, integrity, and meaningful contribution.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-[var(--color-secondary)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Benefits of Membership"
          subtitle="Discover what awaits you as a member of Dante Lodge #174."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-[var(--color-background)] p-8 transition-all duration-300 hover:border-[var(--color-accent)]/50">
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[var(--color-accent)]/5 transition-transform duration-300 group-hover:scale-150" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-sm bg-[var(--color-accent)]/10 p-2">
                      <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {benefit.description}
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
