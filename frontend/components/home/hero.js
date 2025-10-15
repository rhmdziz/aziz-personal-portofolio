import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./button";

export default function Hero() {
  const roles = ["Full Stack", "Mobile", "Backend", "Frontend"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="bg-[var(--background)] w-full relative flex justify-center">
      <div className="max-w-5xl w-full h-screen flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-6 md:px-0 relative">
        <div className="text-left ">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[var(--gray-primary)]">
            Hi, I&lsquo;m a
            <br />
            <span className="text-[var(--purple)]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className="inline-block"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
              <br /> Developer
            </span>
          </h1>
          <p className="mt-4 md:mt-8 text-[var(--gray-secondary)] text-base sm:text-lg max-w-md mx-auto md:mx-0">
            A passionate student from Universitas Prasetiya Mulya who loves
            creating mobile and web applications.
          </p>

          <Button variant="fill" href="#about" className="mt-4 md:mt-8">
            Get to know me!
          </Button>
        </div>
        <div className="mb-8 md:mb-0 relative">
          <Image
            src="/images/art.png"
            alt="Profile Picture"
            width={600}
            height={800}
            className="mx-auto rounded-2xl object-cover z-10 relative"
          />
          <div className="md:h-32"></div>

          <div className="hidden md:block absolute top-12 right-12 w-44 z-0 h-80 bg-[var(--purple)] pointer-events-none"></div>
        </div>
      </div>
      <svg
        className="absolute -bottom-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#673DE6"
          fillOpacity="1"
          d="M0,32L0,96L110.8,96L110.8,128L221.5,128L221.5,64L332.3,64L332.3,224L443.1,224L443.1,288L553.8,288L553.8,160L664.6,160L664.6,224L775.4,224L775.4,192L886.2,192L886.2,192L996.9,192L996.9,160L1107.7,160L1107.7,64L1218.5,64L1218.5,128L1329.2,128L1329.2,224L1440,224L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
