"use client";

<<<<<<< HEAD
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "174", label: "Lodge Number", suffix: "#" },
  { value: "100+", label: "Active Brothers", suffix: "" },
  { value: "50+", label: "Years of Service", suffix: "+" },
  { value: "1000+", label: "Community Hours", suffix: "+" },
=======
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  {
    number: "174",
    label: "Lodge Number",
    description: "A proud part of Masonic heritage",
  },
  {
    number: "200+",
    label: "Active Members",
    description: "Growing community of dedicated men",
  },
  {
    number: "10+",
    label: "Years of Service",
    description: "Making an impact in Louisiana",
  },
  {
    number: "$100K+",
    label: "Community Donations",
    description: "Supporting local causes annually",
  },
>>>>>>> 9df2d9f9e2afe561baa37a135c498afa7cbb0b0c
];

export function StatsSection() {
  return (
<<<<<<< HEAD
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
=======
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Our Impact by the Numbers"
          subtitle="See the difference Dante Lodge #174 is making."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] p-8 text-center transition-all duration-300 hover:border-[var(--color-primary)]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="font-serif text-5xl font-bold text-[var(--color-primary)]">
                    {stat.number}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {stat.description}
                  </p>
                </div>
>>>>>>> 9df2d9f9e2afe561baa37a135c498afa7cbb0b0c
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
