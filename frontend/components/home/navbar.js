"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { container } from "../ui/primitives";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#project" },
  { name: "Skills", href: "/#skill" },
  { name: "Contact", href: "/#contact" },
];

const socialItems = [
  { name: "Email", href: "mailto:halo@azizrahmad.com" },
  { name: "GitHub", href: "https://github.com/rhmdziz", external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/azizrahmad", external: true },
];

const sectionIds = ["about", "project", "skill", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.offsetTop - 140;
        if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[9999] border-b border-line bg-paper/85 backdrop-blur">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-line/60">
        <div
          ref={progressRef}
          className="h-full origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link href="/#home" className="text-lg font-medium tracking-[-0.03em]">
          aziz<span className="font-serif italic text-accent">rahmad</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = activeSection === item.href.split("#")[1];
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={active ? "true" : undefined}
                    className={`text-sm transition-colors duration-200 hover:text-accent ${
                      active ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink sm:inline-flex"
          >
            Contact
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              >
                <span className="h-px w-5 bg-ink" />
                <span className="h-px w-5 bg-ink" />
              </button>
            </SheetTrigger>
            <SheetContent
              id="mobile-menu"
              side="right"
              closeButtonClassName="top-3 right-4"
              className="h-dvh w-screen max-w-none border-l-0 bg-paper px-5 py-10"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  <span aria-hidden className="mr-2.5 inline-block h-2 w-2 bg-accent" />
                  [ Menu ]
                </p>
                <ul className="mt-8 flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.name} className="border-t border-line last:border-b">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block py-4 font-serif text-3xl transition-colors hover:text-accent"
                        >
                          {item.name}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {socialItems.map((item) => (
                    <li key={item.name}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="inline-flex rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/75 transition-colors hover:border-accent hover:text-accent"
                        >
                          {item.name}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
