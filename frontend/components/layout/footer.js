import { GithubFilled, LinkedinFilled, MailOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-8 pt-14 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-6xl border-t border-[var(--line)] pt-10 md:pt-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:gap-12">
          <div>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-[1] tracking-[-0.05em] text-[var(--gray-primary)] sm:text-4xl md:text-[3.5rem]">
              Let&apos;s build digital products with clarity and purpose.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--gray-secondary)] sm:text-lg">
              Available for product collaboration, frontend development, mobile
              work, and thoughtful digital systems.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="mailto:halo@azizrahmad.com"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-medium text-[var(--gray-primary)] transition hover:-translate-y-0.5 hover:border-[#b59af6] hover:text-[var(--purple)]"
            >
              <MailOutlined className="text-base" />
              halo@azizrahmad.com
            </Link>

              <Link
                href="https://www.linkedin.com/in/azizrahmad"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--gray-primary)] transition hover:-translate-y-0.5 hover:border-[#b59af6] hover:text-[var(--purple)]"
              >
                <LinkedinFilled className="text-base" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/rhmdziz"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--gray-primary)] transition hover:-translate-y-0.5 hover:border-[#b59af6] hover:text-[var(--purple)]"
              >
                <GithubFilled className="text-base" />
                GitHub
              </Link>
            
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--gray-secondary)] md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>
            {new Date().getFullYear()} &copy; Aziz Rahmad. Designed and built
            with care.
          </p>
          <p className="font-medium tracking-[-0.02em] text-[var(--gray-primary)]">
            Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
