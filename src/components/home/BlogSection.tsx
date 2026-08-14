"use client";

import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const blogPosts = [
  {
    title: "The Pillars of Personal Growth in Masonry",
    excerpt: "Discover how the principles of Freemasonry guide our members toward continuous self-improvement and meaningful contribution to society.",
    date: "August 10, 2024",
    category: "Personal Development",
    slug: "pillars-personal-growth",
  },
  {
    title: "Community Service: Making a Real Difference",
    excerpt: "Learn about our recent community projects and how membership offers opportunities to give back in meaningful ways.",
    date: "August 3, 2024",
    category: "Community",
    slug: "community-service-impact",
  },
  {
    title: "Brotherhood in the Modern Age",
    excerpt: "Exploring what genuine brotherhood means in today's world and how Dante Lodge fosters authentic connections among men.",
    date: "July 28, 2024",
    category: "Culture",
    slug: "brotherhood-modern-age",
  },
];

export function BlogSection() {
  return (
    <section className="bg-[var(--color-secondary)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Latest from Our Lodge"
          subtitle="Insights, stories, and updates from the Dante Lodge community."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-[var(--color-background)] p-8 transition-all duration-300 hover:border-[var(--color-accent)]/50">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--color-accent)]/5 transition-transform duration-300 group-hover:scale-150" />
                
                <div className="relative flex flex-col h-full">
                  <div className="mb-4 inline-block w-fit">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-accent)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-grow text-[var(--color-text-muted)]">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent)]/80"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
