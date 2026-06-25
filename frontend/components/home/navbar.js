"use client";
import { useState, useEffect } from "react";
import {
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

import Button from "../button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

const sectionIds = ["about", "project", "skill", "contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#project" },
    { name: "Skills", href: "/#skill" },
    { name: "Contact", href: "/#contact" },
  ];
  const socialItems = [
    {
      name: "Email",
      href: "mailto:halo@azizrahmad.com",
      icon: <MailOutlined className="text-base" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/rhmdziz",
      icon: <GithubFilled className="text-base" />,
      external: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/azizrahmad",
      icon: <LinkedinFilled className="text-base" />,
      external: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const offset = 140;
      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.offsetTop - offset;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-[9999] flex justify-center px-4 pt-4 transition-all duration-500 md:px-6"
    >
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "ios-panel-strong max-w-6xl rounded-full px-4 py-3 md:px-6"
            : "max-w-6xl rounded-none border-transparent bg-transparent px-0 py-4"
        }`}
      >
        <div className="flex items-center gap-4 md:gap-12">
          <Link
            href="/#home"
            className="shrink-0 text-xl font-medium md:text-2xl"
          >
            <p className="pr-3">
              <span className="text-[var(--purple)]">Az</span>
              <span className="text-[var(--gray-primary)]">iz Rahmad</span>
            </p>
          </Link>
          <motion.ul
            layout
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`hidden items-center md:flex ${
              isScrolled
                ? "gap-2 rounded-full border border-white/40 bg-white/45 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl"
                : "gap-7 rounded-none border-transparent bg-transparent px-0 py-0 shadow-none"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.split("#")[1]
                      ? "bg-white/80 text-[var(--gray-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                      : "text-[var(--gray-secondary)] hover:bg-white/70 hover:text-[var(--gray-primary)]"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            href="mailto:halo@azizrahmad.com"
            className="h-9 w-9 border-0 bg-transparent p-0 shadow-none backdrop-blur-0 hover:border-0 hover:bg-transparent"
          >
            <MailOutlined className="text-[1.1rem] text-[var(--gray-primary)]" />
          </Button>
          <Button
            href="https://github.com/rhmdziz"
            target="_blank"
            className="h-9 w-9 border-0 bg-transparent p-0 shadow-none backdrop-blur-0 hover:border-0 hover:bg-transparent"
          >
            <GithubFilled className="text-[1.1rem] text-[var(--gray-primary)]" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/azizrahmad"
            target="_blank"
            className="h-9 w-9 border-0 bg-transparent p-0 shadow-none backdrop-blur-0 hover:border-0 hover:bg-transparent"
          >
            <LinkedinFilled className="text-[1.2rem] text-[var(--gray-primary)]" />
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/55 text-[var(--gray-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition hover:border-[#b59af6] hover:text-[var(--purple)]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              closeButtonClassName={isScrolled ? "top-7 right-8" : "top-8 right-4"}
              className="h-dvh w-screen max-w-none border-l-0 bg-[rgba(244,248,255,0.72)] px-6 py-10 backdrop-blur-3xl"
            >
              <div className="flex h-full flex-col items-center justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--purple)]">
                  Menu
                </p>
                <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-3">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <a
                        href={item.href}
                        className={`w-full rounded-full border px-6 py-4 text-center text-xl font-medium shadow-[0_12px_30px_rgba(18,35,61,0.06)] shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition ${
                          activeSection === item.href.split("#")[1]
                            ? "border-[#b59af6] bg-white text-[var(--purple)]"
                            : "border-white/60 bg-white/72 text-[var(--gray-primary)] hover:border-[#b59af6] hover:text-[var(--purple)]"
                        }`}
                      >
                        {item.name}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-center gap-4">
                    {socialItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          aria-label={item.name}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/78 text-[var(--gray-primary)] shadow-[0_12px_30px_rgba(18,35,61,0.05)] shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition hover:border-[#b59af6] hover:text-[var(--purple)]"
                        >
                          {item.icon}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  );
}
