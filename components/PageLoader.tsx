"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="noise-overlay absolute inset-0" aria-hidden />
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-4"
          >
            <span className="font-display text-4xl font-semibold tracking-[0.2em] text-white sm:text-5xl">
              {site.name.split(" ")[0]}
              <span className="text-gradient-gold"> {site.name.split(" ")[1] ?? ""}</span>
            </span>
            <motion.div
              className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
              Subang
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
