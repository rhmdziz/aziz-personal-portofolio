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
    inline-flex items-center justify-center cursor-pointer rounded-full font-medium transition-all duration-300
  `;

  const variantClass =
    variant === "fill"
      ? "border border-[#8c68f0] bg-[linear-gradient(180deg,#7b52ee_0%,#673DE6_100%)] px-6 py-3.5 text-white shadow-[0_20px_45px_rgba(103,61,230,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(103,61,230,0.34)]"
      : "border border-[rgba(127,145,172,0.4)] bg-white px-4 py-2.5 text-[var(--gray-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#b59af6] hover:bg-white hover:text-[var(--purple)]";

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
