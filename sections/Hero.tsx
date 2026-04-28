"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://h.top4top.io/p_3769s3xhg1.png"
          alt="Rooftop city lights at night"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/85 to-void" />
        <div className="absolute inset-0 bg-hero-radial opacity-90" />
        <div className="noise-overlay absolute inset-0" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-28 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent"
        >
          Subang · Rooftop · Café · Live Music
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {site.fullName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mx-auto mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <Link
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-[52px] min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-void transition-shadow hover:shadow-glow"
          >
            <span className="relative z-10">Book Table</span>
            <span className="absolute inset-0 bg-gold-shine opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href="#menu"
            className="glass-panel inline-flex min-h-[52px] min-w-[200px] items-center justify-center rounded-full px-8 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-accent/40 hover:text-accent"
          >
            View Menu
          </Link>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
