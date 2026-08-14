"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[var(--color-primary)]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] via-transparent to-[var(--color-secondary)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Take the first step toward becoming part of a timeless tradition of
            brotherhood, personal growth, and community service.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Contact Us Today
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg">
                Read Our FAQ
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
