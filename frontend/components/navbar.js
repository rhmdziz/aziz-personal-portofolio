"use client";
import { useState, useEffect } from "react";
import { MoonOutlined, MoonFilled } from "@ant-design/icons";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
      className={`fixed w-full py-2 flex justify-center z-[9999] ${
        isScrolled ? "bg-[var(--background)] shadow" : "bg-[var(--background)]"
      }`}
    >
      <div className="max-w-5xl flex justify-between items-center w-full">
        <div className="flex items-center gap-24">
          <Link href="/" className="text-lg md:text-2xl font-medium">
            <p className="py-2">
              <span className="text-[var(--purple)]">Az</span>
              <span className="text-[var(--gray-primary)]">iz Rahmad</span>
            </p>
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {[
              { name: "Projects", href: "/projects" },
              { name: "Skills", href: "/skills" },
              { name: "Contact", href: "/contact" },
              { name: "About", href: "/about" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="
                    relative text-[var(--gray-primary)] transition-all duration-300
                    before:content-[''] before:absolute before:-bottom-1 before:left-0
                    before:w-0 before:h-[2px] before:bg-[var(--purple)]
                    hover:before:w-full hover:text-[var(--purple)]
                    before:transition-all before:duration-300
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cv/aziz">
            <div className="border rounded-xl px-4 text-[var(--gray-primary)] hover:text-[var(--purple)] transition">
              <p className="py-1">CV</p>
            </div>
          </Link>

          {isDarkMode ? (
            <MoonFilled onClick={toggleDarkMode} className="cursor-pointer" />
          ) : (
            <MoonOutlined onClick={toggleDarkMode} className="cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
}
