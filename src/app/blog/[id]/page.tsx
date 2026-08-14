"use client";

import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { useSite } from "@/context/SiteProvider";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { use } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { content } = useSite();
  const post = content.blog.find((b) => b.id === id);

  if (!post) {
    return (
      <ClientLayout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
          <h1 className="font-serif text-3xl font-bold text-white">
            Article Not Found
          </h1>
          <Link
            href="/blog"
            className="mt-4 text-[var(--color-primary)] hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <article>
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden bg-[var(--color-secondary)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="rounded-sm bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {post.category}
          </span>

          <h1 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div className="mt-6 h-1 w-16 bg-[var(--color-primary)]" />

          <div className="prose prose-invert mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
              {post.excerpt}
            </p>
            <p className="mt-6 leading-relaxed text-[var(--color-text-muted)]">
              {post.content}
            </p>
          </div>
        </div>
      </article>
    </ClientLayout>
  );
}
