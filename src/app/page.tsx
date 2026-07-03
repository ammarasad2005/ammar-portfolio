"use client";

import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Stack } from "@/components/portfolio/stack";
import { Work } from "@/components/portfolio/work";
import { Experience } from "@/components/portfolio/experience";
import { Writing } from "@/components/portfolio/writing";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
