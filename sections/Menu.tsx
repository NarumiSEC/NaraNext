"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { menuItems, type MenuCategory } from "@/lib/content";

const tabs: MenuCategory[] = ["Food", "Drinks", "Signature"];

export function Menu() {
  const [cat, setCat] = useState<MenuCategory>("Food");
  const filtered = useMemo(() => menuItems.filter((m) => m.category === cat), [cat]);

  return (
    <section id="menu" className="relative bg-void py-20 sm:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Menu</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Taste the night
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Small plates built for sharing, cocktails with theatre, and signatures you will reorder
            before the check arrives.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <div className="inline-flex rounded-full border border-white/10 bg-coal/80 p-1 backdrop-blur-md">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setCat(t)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  cat === t ? "text-void" : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat === t && (
                  <motion.span
                    layoutId="menuTab"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Reveal delay={0.02 * i}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-graphite shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-200 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-white">{item.name}</h3>
                      <span className="shrink-0 text-sm font-semibold text-accent">{item.price}</span>
                    </div>
                    {item.blurb && (
                      <p className="mt-2 text-sm text-zinc-500">{item.blurb}</p>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_0_1px_rgba(245,158,11,0.35)] transition-opacity duration-300 group-hover:opacity-100" />
                </article>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
