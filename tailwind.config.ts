import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#030303",
        coal: "#0c0c0e",
        graphite: "#141418",
        mist: "rgba(255,255,255,0.06)",
        accent: {
          DEFAULT: "#f59e0b",
          glow: "#fb923c",
          dim: "#b45309",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.18), transparent 55%)",
        "gold-shine":
          "linear-gradient(120deg, transparent 0%, rgba(245,158,11,0.35) 45%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(245, 158, 11, 0.45)",
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.65)",
      },
      animation: {
        shimmer: "shimmer 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
