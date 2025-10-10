"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const roles = ["Full Stack", "Mobile", "Web", "Backend"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-5xl w-full h-screen flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-6 md:px-0">
        <div className="text-left">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-black-primary">
            Hi, I'm a
            <br />
            <span className="text-purple-primary">
              <span key={roles[index]}>{roles[index]}</span>
              <br /> Developer
            </span>
          </h1>
          <p className="mt-4 md:mt-8 text-gray-secondary text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Currently I am studying at Prasetiya Mulya University majoring in
            Digital Business Technology{" "}
          </p>
          <div className="bg-gray-primary inline-block mt-4 md:mt-8 py-3 px-8 rounded-xl cursor-pointer hover:opacity-90">
            <p className="text-white-primary">Contact Me</p>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <Image
            src="/images/me.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="mx-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
