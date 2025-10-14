"use client";

import Footer from "@/components/footer";
import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Main from "@/components/main";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <About />
      </Main>
      <Footer />
    </>
  );
}
