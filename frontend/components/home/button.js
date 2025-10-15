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
    inline-block cursor-pointer rounded-xl font-medium transition-all duration-300
  `;

  const variantClass =
    variant === "fill"
      ? "bg-[var(--gray-primary)] text-[var(--background)] py-4 px-8 hover:opacity-90 hover:shadow-lg hover:translate-y-[-2px]"
      : "border-2 border-[var(--gray-primary)] text-[var(--gray-primary)] px-4 py-2 hover:text-[var(--purple)] hover:border-[var(--purple)] hover:text-[var(--purple)] hover:translate-y-[-2px]";

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
