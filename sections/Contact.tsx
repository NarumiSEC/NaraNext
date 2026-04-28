"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { mapEmbedSrc, site, whatsappHref } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative bg-graphite py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Visit</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Find us in Subang
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="glass-panel flex h-full flex-col justify-between rounded-2xl p-8 sm:p-10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                  Address
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-zinc-200">{site.address}</p>
                <p className="mt-2 text-sm text-zinc-500">{site.city}</p>
              </div>
              <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Hours
                  </h3>
                  <p className="mt-2 text-zinc-300">{site.hours}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                    Phone
                  </h3>
                  <p className="mt-2 text-zinc-300">{site.phoneDisplay}</p>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-void transition-opacity hover:opacity-90"
                >
                  WhatsApp
                </Link>
                <Link
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-accent/50 hover:text-accent"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.07] shadow-card lg:min-h-full"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <iframe
                title="Map — Subang, West Java"
                src={mapEmbedSrc}
                className="absolute inset-0 h-full w-full grayscale contrast-[0.92] invert-[0.92] filter"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
