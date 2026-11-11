"use client";

import { useEffect, useState } from "react";

export default function Splash() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[20000] flex items-center justify-center bg-accent text-white"
      style={{
        animation: "splash-reveal 1.9s cubic-bezier(0.76,0,0.24,1) forwards",
      }}
    >
      <span
        className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl"
        style={{ animation: "splash-word 0.7s ease-out both" }}
      >
        aziz<span className="font-serif font-normal italic">rahmad</span>
      </span>
    </div>
  );
}
