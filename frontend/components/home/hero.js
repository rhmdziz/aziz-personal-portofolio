"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../button";
import { Arrow, container, Em } from "../ui/primitives";

const roles = ["Full Stack", "Mobile", "Backend", "Frontend"];

const stats = [
  { value: "10+", label: "Tools across web and mobile" },
  { value: "6+", label: "Selected projects launched" },
  { value: "2022", label: "Building actively since" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="home" className="w-full scroll-mt-16 border-b border-line lg:flex lg:max-h-screen lg:items-center lg:overflow-hidden">
        <div className={`${container} py-16 sm:py-24 lg:py-8`}>
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                <span aria-hidden className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Open for work · BSD City, Indonesia
              </p>

              <h1 className="mt-8 text-[clamp(3rem,min(8.5vw,10vh),6.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                Building reliable
                <span className="block min-h-[1.05em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[index]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-block"
                    >
                      <Em>{roles[index]}</Em>
                    </motion.span>
                  </AnimatePresence>
                </span>
                systems.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Aziz builds thoughtful digital products with clear interfaces,
                reliable engineering, and experiences that feel simple from the
                first interaction.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button variant="fill" href="#project">
                  View projects <Arrow />
                </Button>
                <Button href="#contact">
                  Let&apos;s talk <Arrow />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[420px] sm:h-[520px] lg:h-[55vh]">
                <Image
                  src="/images/art.png"
                  alt="Illustrated portrait of Aziz Rahmad"
                  width={700}
                  height={900}
                  priority
                  className="absolute bottom-0 right-0 h-full w-auto max-w-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          <dl className="mt-16 lg:mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="bg-paper p-6 sm:p-8">
                <dd className="font-serif text-5xl italic leading-none">{item.value}</dd>
                <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
