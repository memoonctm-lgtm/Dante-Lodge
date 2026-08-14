"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSite } from "@/context/SiteProvider";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const { content } = useSite();
  const [openId, setOpenId] = useState<string | null>(content.faq[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {content.faq.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <AnimatedSection key={item.id} delay={index * 0.08}>
            <div
              className={cn(
                "overflow-hidden rounded-sm border transition-all duration-300",
                isOpen
                  ? "border-[var(--color-accent)]/50 bg-[var(--color-secondary)]"
                  : "border-white/10 bg-[var(--color-secondary)]/50 hover:border-white/20"
              )}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg font-semibold text-white">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-[var(--color-primary)]" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-white/5 px-6 pb-6 pt-2">
                      <p className="leading-relaxed text-[var(--color-text-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
