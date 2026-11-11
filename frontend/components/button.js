"use client";

import Link from "next/link";

export default function Button({
  href,
  target,
  onClick,
  children,
  variant = "outline",
  className = "",
  type,
  disabled,
}) {
  const baseClass =
    "group inline-flex items-center justify-center gap-2 cursor-pointer rounded-full px-6 py-3.5 text-sm font-medium transition duration-300 disabled:cursor-not-allowed disabled:opacity-50";

  const variantClass =
    variant === "fill"
      ? "bg-accent text-white hover:-translate-y-0.5 hover:bg-ink"
      : "border border-line hover:border-accent hover:text-accent";

  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={target || "_self"}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={combinedClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      {children}
    </button>
  );
}
