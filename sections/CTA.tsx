"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80"
          alt="Dimly lit upscale bar interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/92 to-void/80" />
        <div className="noise-overlay absolute inset-0" aria-hidden />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Reserve Your Spot Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-zinc-300"
        >
          Message us on WhatsApp with your date, party size, and any celebration notes—we will
          confirm availability and the best terrace table for your night.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href={whatsappHref("I'd like to reserve a table at 88 Society Subang.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] min-w-[240px] items-center justify-center rounded-full bg-accent px-10 text-base font-bold uppercase tracking-widest text-void shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            WhatsApp us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
