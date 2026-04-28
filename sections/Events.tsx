"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { events } from "@/lib/content";

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-void py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Events</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            On the calendar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Reserve early for headline nights. Walk-ins welcome for acoustic evenings subject to
            terrace capacity.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={0.1 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-graphite shadow-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-void">
                    {ev.date}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-white">{ev.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{ev.note}</p>
                  <span className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Limited terrace seats
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
