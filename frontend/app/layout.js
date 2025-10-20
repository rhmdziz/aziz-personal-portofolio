import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";

export const metadata = {
  title: "Aziz Rahmad | Full Stack Developer",
  description:
    "Portfolio website by Aziz Rahmad — showcasing full stack, web, and mobile development projects.",
  keywords: ["Aziz Rahmad", "Aziz Rahmad Isnanto", "Portfolio"],
  authors: [{ name: "Aziz Rahmad", url: "https://azizrahmad.vercel.app" }],
  creator: "Aziz Rahmad",
  openGraph: {
    title: "Aziz Rahmad | Full Stack Developer",
    description:
      "Explore projects by Aziz Rahmad — specializing in Next.js, Flutter, and web development.",
    url: "https://azizrahmad.vercel.app",
    siteName: "Aziz Rahmad Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aziz Rahmad Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aziz Rahmad | Full Stack Developer",
    description: "Explore projects by Aziz Rahmad — web & mobile developer.",
    creator: "",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://azizrahmad.vercel.app"),

  other: {
    "google-site-verification": "zbnjIzvDgVj5eLn24rl-Ehr6GGoiUitQOMbbfYN-IIU",
  },
};

const fontDM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${fontDM_Sans.variable} antialiased`}>
        {children}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aziz Rahmad",
              url: "https://azizrahmad.vercel.app",
              jobTitle: "Full Stack Developer",
              sameAs: ["https://www.linkedin.com/in/azizrahmad/"],
            }),
          }}
        />
      </body>
    </html>
  );
}
