export const container = "mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-12";

export function SectionLabel({ no, label, dark = false }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] ${
        dark ? "text-paper/60" : "text-muted"
      }`}
    >
      <span aria-hidden className="inline-block h-2 w-2 bg-accent" />
      [ {no} / {label} ]
    </p>
  );
}

export function Pill({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] ${
        dark ? "border-paper/15 text-paper/75" : "border-line text-ink/75"
      }`}
    >
      {children}
    </span>
  );
}

export function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      ↗
    </span>
  );
}

export function Em({ children }) {
  return <em className="font-serif font-normal italic text-accent">{children}</em>;
}
