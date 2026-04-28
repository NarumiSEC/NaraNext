import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLoader } from "@/components/PageLoader";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { CTA } from "@/sections/CTA";
import { Events } from "@/sections/Events";
import { Gallery } from "@/sections/Gallery";
import { Hero } from "@/sections/Hero";
import { Menu } from "@/sections/Menu";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Events />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
