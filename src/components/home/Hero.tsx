"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/context/SiteProvider";

export function Hero() {
  const { content } = useSite();
  const { hero } = content;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--color-secondary)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 40%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative compass ring */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[var(--color-primary)]/10" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[var(--color-accent)]/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              <Users className="h-3.5 w-3.5" />
              Dante Lodge #174 — Louisiana
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/about">
              <Button variant="primary" size="lg">
                {hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                {hero.ctaSecondary}
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 text-sm text-[var(--color-text-muted)]/70"
          >
            For men aged 18–45 seeking brotherhood, integrity, and personal growth.
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
    </section>
  );
}
