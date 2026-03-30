import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../button";

export default function Hero() {
  const roles = ["Full Stack", "Mobile", "Backend", "Frontend"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section className="w-full relative flex justify-center px-6 pt-20 sm:pt-24 md:pt-28">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start gap-2 md:gap-14 relative">
        <div className="text-left max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm text-[var(--gray-secondary)] backdrop-blur-sm">
            Based in Indonesia, building mobile and web products
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] leading-[0.98] font-medium text-[var(--gray-primary)]">
            Building
            <span className="block text-[var(--purple)] min-h-[1.15em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-block"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
              <span className="text-[var(--gray-primary)]"> products</span>
            </span>
            with clarity.
          </h1>
          <p className="mt-6 text-[var(--gray-secondary)] text-base sm:text-lg max-w-xl">
            Aziz is a Digital Business Technology student at Universitas
            Prasetiya Mulya with a strong focus on interface clarity, reliable
            engineering, and products that feel effortless to use.
          </p>

          <div className="mt-8 flex flex-row items-stretch gap-3 w-full max-w-md sm:max-w-none">
            <Button
              variant="fill"
              href="#project"
              className="min-h-12 sm:min-h-14 flex-1 sm:flex-none px-4 sm:px-6 text-sm sm:text-base"
            >
              View selected work
            </Button>
            <Button
              href="#contact"
              className="min-h-12 sm:min-h-14 flex-1 sm:flex-none px-4 sm:px-6 text-sm sm:text-base"
            >
              Start a conversation
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { value: "10+", label: "Tools used across web and mobile" },
              { value: "5", label: "Featured projects shipped" },
              { value: "2024", label: "Since actively building products" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-medium text-[var(--gray-primary)]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-5 text-[var(--gray-secondary)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 md:mb-0 md:self-center md:-translate-y-[4.5rem] relative w-full max-w-md">
          <div className="absolute inset-x-10 top-8 bottom-10 rounded-[2rem] bg-[var(--purple-soft)] blur-3xl"></div>
          <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-[#f6dba7] opacity-80 blur-2xl"></div>
          <div className="absolute -right-2 bottom-16 h-28 w-28 rounded-full bg-[var(--purple-soft)] opacity-90 blur-2xl"></div>
          <div className="relative rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_30px_80px_rgba(17,32,49,0.14)] backdrop-blur-md">
            <div className="absolute left-5 top-5 rounded-full bg-[var(--background)]/90 px-3 py-1 text-xs text-[var(--gray-secondary)] backdrop-blur-sm">
              Full stack • Mobile • Frontend
            </div>
            <Image
              src="/images/art.png"
              alt="Profile Picture"
              width={600}
              height={800}
              className="mx-auto rounded-[1.5rem] object-cover z-10 relative"
            />
          </div>
          <div className="hidden md:block absolute md:left-auto md:right-auto md:-left-4 md:bottom-6 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 shadow-[0_18px_50px_rgba(17,32,49,0.08)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gray-secondary)]">
              Focus
            </p>
            <p className="mt-1 text-sm font-medium text-[var(--gray-primary)]">
              Mobile apps, product UI, web systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
