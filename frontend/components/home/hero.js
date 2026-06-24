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
    <section
      id="home"
      className="relative flex w-full justify-center px-6 pt-24 sm:pt-28 md:pt-32"
    >
      <div className="section-shell">
        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] md:gap-10">
          <div className="order-2 max-w-2xl text-left md:order-1">
            <div className="ios-chip">
              Based in BSD City, Indonesia
            </div>
            <h1 className="mt-6 text-4xl font-medium leading-[0.94] tracking-[-0.05em] text-[var(--gray-primary)] sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              Calm interfaces.
                <span className="mt-2 block min-h-[1.12em] text-[var(--purple)]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[index]}
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {roles[index]}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[var(--gray-primary)]"> systems.</span>
              </span>
            </h1>
            <p className="section-copy mt-6 max-w-xl">
              Aziz is a Digital Business Technology student at Universitas
              Prasetiya Mulya, focused on clean interfaces, dependable
              engineering, and products that feel easy to use.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row">
              <Button
                variant="fill"
                href="#project"
                className="min-h-12 flex-1 px-4 text-sm sm:min-h-14 sm:flex-none sm:px-6 sm:text-base"
              >
                View projects
              </Button>
              <Button
                href="#contact"
                className="min-h-12 flex-1 px-4 text-sm sm:min-h-14 sm:flex-none sm:px-6 sm:text-base"
              >
                Let&apos;s talk
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { value: "10+", label: "Tools across web and mobile" },
                { value: "5", label: "Selected projects launched" },
                { value: "2024", label: "Building actively since" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="ios-panel rounded-[1.6rem] px-4 py-4"
                >
                  <p className="text-2xl font-medium tracking-[-0.04em] text-[var(--gray-primary)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-[var(--gray-secondary)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 relative flex min-h-[18rem] items-end justify-center rounded-[2rem] px-2 pt-2 sm:min-h-[22rem] md:order-2 md:min-h-[42rem] md:pt-8">
            <Image
              src="/images/art.png"
              alt="Profile Picture"
              width={700}
              height={900}
              className="relative z-10 mx-auto h-[18rem] w-auto max-w-full scale-105 object-contain sm:h-[22rem] sm:scale-110 md:h-[40rem] md:scale-[1.18]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
