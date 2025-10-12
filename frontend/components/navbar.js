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
        isScrolled ? "bg-white-primary shadow" : "bg-white-primary"
      }`}
    >
      <div className="max-w-5xl flex justify-between items-center w-full">
        <div className="flex items-center gap-24">
          <Link href="/" className="text-lg md:text-2xl font-medium">
            <p className="py-2">
              <span className="text-purple-primary">Az</span>
              <span className="text-gray-primary">iz Rahmad</span>
            </p>
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <Link
                href="/projects"
                className="text-gray-primary hover:text-purple-primary"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-gray-primary hover:text-purple-primary"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-primary hover:text-purple-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-primary hover:text-purple-primary"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cv/aziz">
            <div className="border rounded-xl px-4 text-gray-primary hover:text-purple-primary transition">
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
