import { Arrow, container, Em } from "../ui/primitives";

const links = [
  { label: "halo@azizrahmad.com", href: "mailto:halo@azizrahmad.com" },
  { label: "rahmadaziz288@gmail.com", href: "mailto:rahmadaziz288@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/azizrahmad", external: true },
  { label: "GitHub", href: "https://github.com/rhmdziz", external: true },
];

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-paper [--accent:#a58bff]">
      <div className={`${container} py-20 sm:py-28`}>
        <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
          <span aria-hidden className="inline-block h-2 w-2 bg-accent" />
          [ 05 / Say hello ]
        </p>
        <h2 className="mt-8 text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.92] tracking-[-0.05em]">
          Let&apos;s build <Em>clearly</Em>.
        </h2>
        <p className="mt-8 max-w-xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
          Available for product collaboration, frontend development, mobile
          work, and thoughtful digital systems.
        </p>

        <ul className="mt-14 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.label} className="bg-ink">
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 p-5 text-sm transition-colors duration-300 hover:bg-[#1C1C1C] hover:text-accent"
              >
                <span className="truncate">{link.label}</span>
                <Arrow />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/50 sm:flex-row sm:justify-between">
          <p>{new Date().getFullYear()} © Aziz Rahmad</p>
          <p>BSD City, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
