/** Central content & links — update phone / socials for production */

export const site = {
  name: "88 Society",
  fullName: "88 Society Subang",
  tagline: "Where Food, Music & Vibes Meet",
  description:
    "A rooftop-forward social house in Subang where chef-led plates, craft cocktails, and live energy collide. From golden-hour coffee to late-night DJ sets, every visit is dialled for atmosphere.",
  address:
    "Jl. Mayor Abdurachman No. 88, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211",
  city: "Subang, West Java",
  phoneDisplay: "+62 831-4833-8260",
  /** Replace with your real WhatsApp Business number (country code, no +) */
  whatsappNumber: "6283148338260",
  instagram: "https://www.instagram.com/88societysubang/",
  email: "narumixor@gmail.com",
  hours: "Daily · 11:00 – 01:00 · Live music Fri–Sun from 20:00",
} as const;

export function whatsappHref(text?: string) {
  const msg = encodeURIComponent(
    text ?? `Hi ${site.fullName}, I'd like to reserve a table.`,
  );
  return `https://wa.me/${site.whatsappNumber}?text=${msg}`;
}

/** Google Maps embed (query: venue area Subang) */
export const mapEmbedSrc =
  "https://www.google.com/maps?q=Subang+Jawa+Barat+Indonesia&output=embed";
