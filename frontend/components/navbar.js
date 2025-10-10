"use client";
import { useState } from "react";
import { MoonOutlined, MoonFilled } from "@ant-design/icons";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed w-full py-2 text-black-primary flex justify-center z-10 bg-white-primary md:bg-white-primary/80 md:backdrop-blur-lg px-6 md:px-0">
      <div className="max-w-5xl flex justify-between items-center w-full">
        <Link href="/" className="text-xl md:text-2xl font-medium">
          <p className="py-2">Aziz Rahmad</p>
        </Link>

        <div className="flex items-center gap-6">
          <Link className="text-lg" href="cv/aziz">
            <p className="py-2">CV</p>
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
