import { DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/home/navbar";

export const metadata = {
  title: "Aziz Rahmad",
  description: "Portfolio by Aziz",
};

const fontDM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${fontDM_Sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
