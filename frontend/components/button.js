"use client";

import Link from "next/link";

export default function Button({
  href,
  target,
  onClick,
  children,
  variant = "outline",
  className = "",
}) {
  const baseClass = `
    inline-flex items-center justify-center cursor-pointer rounded-full font-medium transition-all duration-200
  `;

  const variantClass =
    variant === "fill"
      ? "bg-[var(--gray-primary)] text-[var(--background)] py-3.5 px-6 shadow-[0_16px_40px_rgba(17,32,49,0.12)] hover:bg-[var(--purple)] hover:translate-y-[-2px]"
      : "border border-[var(--line)] bg-white/80 text-[var(--gray-primary)] px-4 py-2.5 backdrop-blur-sm hover:border-[var(--purple)] hover:text-[var(--purple)] hover:translate-y-[-2px]";

  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target || "_self"} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
