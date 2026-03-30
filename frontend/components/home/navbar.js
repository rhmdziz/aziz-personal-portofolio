"use client";
import { useState, useEffect } from "react";
import { LinkedinFilled } from "@ant-design/icons";
import { Menu } from "lucide-react";

import Button from "../button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#project" },
    { name: "Skills", href: "/#skill" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full py-4 px-6 flex justify-center z-[9999] transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-5xl flex justify-between items-center w-full rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-[var(--line)] shadow-[0_18px_50px_rgba(17,32,49,0.08)] px-8 md:px-10 py-0 bg-white/85"
            : "border-transparent px-0 py-0"
        }`}
      >
        <div className="flex items-center gap-4 md:gap-12">
          <a href="/#home" className="text-2xl font-medium shrink-0">
            <p className="py-2 pr-3">
              <span className="text-[var(--purple)]">Az</span>
              <span className="text-[var(--gray-primary)]">iz Rahmad</span>
            </p>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    relative text-[var(--gray-secondary)] transition-all duration-300
                    before:content-[''] before:absolute before:-bottom-1 before:left-0
                    before:w-0 before:h-[2px] before:bg-[var(--purple)]
                    hover:before:w-full hover:text-[var(--gray-primary)]
                    before:transition-all before:duration-300
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            href="https://www.linkedin.com/in/azizrahmad"
            target="_blank"
            className="h-[3.25rem] w-[3.25rem] p-0 border-0 bg-transparent shadow-none backdrop-blur-0 hover:border-0"
          >
            <LinkedinFilled className="text-[1.55rem] text-[var(--gray-primary)]" />
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="h-11 w-11 inline-flex items-center justify-center text-[var(--gray-primary)]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-xs border-l border-[var(--line)] bg-white/96 px-6 py-16"
            >
              <div className="flex flex-col gap-6">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--purple)]">
                  Navigate
                </p>
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <a
                        href={item.href}
                        className="rounded-2xl bg-[var(--surface)] px-4 py-3 text-lg font-medium text-[var(--gray-primary)]"
                      >
                        {item.name}
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <SheetClose asChild>
                  <a
                    href="https://www.linkedin.com/in/azizrahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white text-sm font-medium text-[var(--gray-primary)]"
                  >
                    <LinkedinFilled className="text-base" />
                    LinkedIn
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
