import {
  GithubFilled,
  GithubOutlined,
  LinkedinFilled,
  MailFilled,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-4">
      <hr className="border-[var(--gray-secondary)] opacity-30" />
      <div className="mx-auto text-center text-[var(--gray-primary)] space-y-2 py-10">
        <div className="flex justify-center items-center space-x-4 ">
          <Link href="mailto:rahmadaziz288@gmail.com" target="_blank">
            <MailOutlined />
          </Link>
          <Link href="https://www.linkedin.com/in/azizrahmad" target="_blank">
            <LinkedinFilled />
          </Link>
          <Link href="https://github.com/rhmdziz" target="_blank">
            <GithubFilled />
          </Link>
        </div>
        <p className="text-xl">Let's connect and create something awesome!</p>
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} <Link href="/">Aziz Rahmad</Link>
        </p>
      </div>
    </footer>
  );
}
