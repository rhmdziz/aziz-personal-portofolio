"use client";

import Footer from "@/components/layout/footer";
import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Main from "@/components/layout/main";
import Project from "@/components/home/project";
import Skill from "@/components/home/skill";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <About />
        <Project />
        <Skill />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}
