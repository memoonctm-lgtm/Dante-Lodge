"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "174", label: "Lodge Number", suffix: "#" },
  { value: "100+", label: "Active Brothers", suffix: "" },
  { value: "50+", label: "Years of Service", suffix: "+" },
  { value: "1000+", label: "Community Hours", suffix: "+" },
];

export function StatsSection() {
  return (
    <section className="relative border-y border-white/10 bg-[var(--color-secondary)] py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="font-serif text-4xl font-bold text-[var(--color-primary)] md:text-5xl"
                >
                  {stat.suffix === "#" ? (
                    <>
                      <span className="text-[var(--color-accent)]">#</span>
                      {stat.value}
                    </>
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-[var(--color-accent)]">
                          {stat.suffix}
                        </span>
                      )}
                    </>
                  )}
                </motion.div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
