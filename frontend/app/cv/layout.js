"use client";

import Navbar from "@/components/home/navbar";
import Footer from "@/components/layout/footer";
import Main from "@/components/layout/main";

export default function CvLayout({ children }) {
  return (
    <>
      <Navbar />
      <Main>
        <div className="w-full max-w-6xl my-48">{children}</div>
      </Main>
      <Footer />
    </>
  );
}
