"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { galleryImages } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-coal py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Gallery</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            After-dark energy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Golden-hour toasts, low-lit corners, and the crowd when the DJ lifts the room—this is
            the mood we bottle every weekend.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={0.05 * i} className="mb-4 break-inside-avoid lg:mb-5">
              <motion.figure
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-graphite ${
                  img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
