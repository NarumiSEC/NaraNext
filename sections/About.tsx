"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const highlights = [
  {
    title: "Hangout Spot",
    copy: "Layered lounges, skyline sightlines, and a soundscape built for conversation that still turns up after dark.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        />
        <circle cx="12" cy="10" r="3" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Live Music",
    copy: "Curated weekly line-ups—from intimate acoustic sets to rooftop DJ nights—with acoustics tuned for the terrace.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
  },
  {
    title: "Premium Experience",
    copy: "Craft cocktails, chef-led plates, and service choreography that matches the pace of your evening.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
] as const;

export function About() {
  return (
    <section id="about" className="relative bg-graphite py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            The concept
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Elevated nights, grounded in Subang
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {site.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={0.08 * i}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="glass-panel group relative h-full overflow-hidden rounded-2xl p-8"
              >
                <div className="mb-5 inline-flex rounded-xl border border-accent/25 bg-accent/10 p-3 text-accent">
                  {h.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{h.copy}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
