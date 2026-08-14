"use client";

import { Calendar, MapPin, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const events = [
  {
    title: "Monthly Stated Meeting",
    date: "First Thursday of each month",
    time: "7:00 PM - 9:00 PM",
    location: "Dante Lodge #174, Louisiana",
    description: "Regular meeting for all members to discuss lodge business, fellowship, and community initiatives.",
  },
  {
    title: "Masonic Education Workshop",
    date: "Third Saturday",
    time: "10:00 AM - 12:00 PM",
    location: "Lodge Hall",
    description: "Deep dive into Masonic principles, degree work, and personal development topics.",
  },
  {
    title: "Community Service Day",
    date: "Quarterly events",
    time: "Varies",
    location: "Various community locations",
    description: "Volunteering opportunities to give back to our community and make a tangible impact.",
  },
];

export function EventsSection() {
  return (
    <section className="bg-[var(--color-secondary)] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          accent
          title="Upcoming Events & Activities"
          subtitle="Join us for meetings, educational programs, and community service initiatives."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <AnimatedSection key={event.title} delay={index * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-[var(--color-background)] p-8 transition-all duration-300 hover:border-[var(--color-accent)]/50">
                <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[var(--color-primary)]/5 transition-transform duration-300 group-hover:scale-150" />
                
                <div className="relative">
                  <h3 className="font-serif text-xl font-bold text-white">{event.title}</h3>
                  
                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-text-muted)]">{event.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-text-muted)]">{event.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-text-muted)]">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="mt-6 leading-relaxed text-[var(--color-text-muted)]">
                    {event.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get Event Calendar
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
