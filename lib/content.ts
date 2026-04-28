export type MenuCategory = "Food" | "Drinks" | "Signature";

export type MenuItem = {
  name: string;
  price: string;
  image: string;
  category: MenuCategory;
  blurb?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "88 Wagyu Sliders",
    price: "Rp 128K",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    blurb: "Brioche, caramelised onion, truffle mayo",
  },
  {
    name: "Charred Octopus",
    price: "Rp 165K",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    blurb: "Smoked paprika, lemon oil, herb salad",
  },
  {
    name: "Subang Night Bowl",
    price: "Rp 95K",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    blurb: "Grains, roasted vegetables, sesame dressing",
  },
  {
    name: "Midnight Espresso Martini",
    price: "Rp 95K",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80",
  },
  {
    name: "Gold Leaf Old Fashioned",
    price: "Rp 110K",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
  },
  {
    name: "Yuzu Highball",
    price: "Rp 78K",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
  },
  {
    name: "Society Smoked Negroni",
    price: "Rp 125K",
    category: "Signature",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    blurb: "Barrel-aged gin, campari, vermouth rosso",
  },
  {
    name: "Rooftop Ember Sour",
    price: "Rp 105K",
    category: "Signature",
    image:
      "https://images.unsplash.com/photo-1536935338788-fa43a7eab8cd?w=800&q=80",
    blurb: "Mezcal, passionfruit, flame-torched foam",
  },
  {
    name: "Chef’s Tasting Flight",
    price: "Rp 385K",
    category: "Signature",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    blurb: "Five courses · wine pairing optional",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80",
    alt: "Guests enjoying cocktails at a dimly lit bar",
    tall: true,
  },
  {
    src: "https://g.top4top.io/p_3769x9pro1.jpg",
    alt: "Live Musik In 88Society",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    alt: "Plated fine dining dish",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80",
    alt: "Friends toasting at rooftop gathering",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80",
    alt: "Restaurant interior with warm lighting",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    alt: "Concert lights and atmosphere",
    tall: false,
  },
] as const;

export type EventCard = {
  title: string;
  date: string;
  image: string;
  note: string;
};

export const events: EventCard[] = [
  {
    title: "Acoustic Society · Open Mic",
    date: "Fri, 2 May 2026",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    note: "Local voices · house cocktail specials until midnight",
  },
  {
    title: "DJ NARA · Rooftop Sessions",
    date: "Sat, 10 May 2026",
    image:
      "https://images.unsplash.com/photo-1571266028243-e8b70d042a5a?w=800&q=80",
    note: "Deep house & disco · doors 20:00",
  },
  {
    title: "Sunday Jazz Brunch",
    date: "Sun, 18 May 2026",
    image:
      "https://images.unsplash.com/photo-1415201361794-1c9a000ccd5a?w=800&q=80",
    note: "Live quartet · chef’s brunch menu · reservations recommended",
  },
];
