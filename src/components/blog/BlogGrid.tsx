"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSite } from "@/context/SiteProvider";

export function BlogGrid() {
  const { content } = useSite();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {content.blog.map((post, index) => (
        <AnimatedSection key={post.id} delay={index * 0.1}>
          <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-black/20">
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-sm bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {post.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-colors hover:text-white"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}
