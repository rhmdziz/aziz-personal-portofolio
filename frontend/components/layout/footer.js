import { GithubFilled, LinkedinFilled, MailOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 md:pb-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl rounded-[2rem]  bg-white/75 text-center text-[var(--gray-primary)] space-y-5 py-10 px-6 backdrop-blur-sm">
        <div className="flex justify-center items-center space-x-4 text-2xl">
          <Link
            href="mailto:halo@azizrahmad.com"
            target="_blank"
            className="transition hover:text-[var(--purple)]"
          >
            <MailOutlined />
          </Link>
          <Link
            href="https://www.linkedin.com/in/azizrahmad"
            target="_blank"
            className="transition hover:text-[var(--purple)]"
          >
            <LinkedinFilled />
          </Link>
          <Link
            href="https://github.com/rhmdziz"
            target="_blank"
            className="transition hover:text-[var(--purple)]"
          >
            <GithubFilled />
          </Link>
        </div>
        <p className="text-base md:text-xl">
           {new Date().getFullYear()} &copy; Let&lsquo;s connect and create
          something thoughtful.
        </p>
        {/* <p className="text-sm text-[var(--gray-secondary)]">
          &copy; {new Date().getFullYear()} <Link href="/">Aziz Rahmad</Link>
        </p> */}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 md:translate-y-6 text-[var(--purple)] text-5xl md:text-[8rem] font-bold opacity-100 font-cursive pointer-events-none w-screen text-center">
        Az
        <span className="text-[var(--gray-primary)]">iz Rahmad</span>
      </div>
    </footer>
  );
}
