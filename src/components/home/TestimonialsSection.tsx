"use client";

import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Member since 2019",
    image: "MJ",
    quote: "Dante Lodge transformed my life. The brotherhood I found here is genuine and the personal growth has been invaluable.",
    rating: 5,
  },
  {
    name: "James Martinez",
    role: "Senior Warden",
    image: "JM",
    quote: "Being part of this lodge has strengthened my commitment to integrity and service. It's more than a fraternity—it's a way of life.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Member since 2021",
    image: "DC",
    quote: "The men here share a common purpose. I've made lifelong friends and found a community that truly cares about each other's growth.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="What Our Members Say"
          subtitle="Hear from the men who are living the Dante Lodge experience every day."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] p-8 transition-all duration-300 hover:border-[var(--color-primary)]/50">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--color-accent)]/5 transition-transform duration-300 group-hover:scale-150" />
                
                <div className="relative">
                  {/* Rating */}
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-6 italic text-[var(--color-text-muted)]">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/20">
                      <span className="font-bold text-[var(--color-primary)]">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
