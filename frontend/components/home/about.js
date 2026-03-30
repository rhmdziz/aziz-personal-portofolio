import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function About() {
  return (
    <section
      id="about"
      className="w-full relative flex justify-center px-6 py-24 md:py-32"
    >
      <div className="max-w-5xl w-full relative">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 md:p-10 shadow-[0_30px_80px_rgba(17,32,49,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] gap-x-12 md:gap-x-16 gap-y-6 md:gap-y-5">
            <div className="order-1 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--purple)]">
                About
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--gray-primary)]">
                Building practical products with a calm visual eye.
              </h2>
            </div>

            <div className="order-3 md:order-2 md:row-span-2">
              <div className="max-w-3xl w-full flex flex-col relative">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--purple)]">
                  Experience
                </p>
                <div className="absolute left-[7px] top-10 bottom-2 w-px bg-[var(--line)]"></div>

                <div className="mt-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.12,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-5 relative mb-7"
                    >
                      <div className="relative z-10 mt-1.5">
                        <div className="w-3 h-3 bg-[var(--purple)] rounded-full"></div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-[var(--gray-secondary)]">
                          {exp.period}
                        </p>
                        <p className="mt-1 text-lg leading-relaxed text-[var(--gray-primary)]">
                          {exp.title}
                        </p>
                        <p className="text-sm text-[var(--gray-secondary)]">
                          {exp.company}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-2 md:order-3">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                className="rounded-[1.5rem] overflow-hidden"
              >
                {["1.png", "2.png", "3.png", "4.png", "5.png"].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-[250px] md:h-[340px]">
                      <Image
                        src={`/images/about/${img}`}
                        alt={`About ${i + 1}`}
                        fill
                        className="object-cover rounded-[1.5rem]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="mt-6 text-[var(--gray-secondary)] text-base sm:text-lg">
                I am an undergraduate student majoring in Digital Business
                Technology at Universitas Prasetiya Mulya.
              </p>
              <p className="mt-4 text-[var(--gray-secondary)] text-base sm:text-lg">
                My journey began with curiosity about how mobile and web
                applications are built, which soon evolved into a strong drive
                to design and develop useful digital solutions.
              </p>
              <p className="mt-4 text-[var(--gray-secondary)] text-base sm:text-lg">
                Through university projects and independent learning,
                I&lsquo;ve honed my skills in mobile development and modern web
                technologies while keeping usability and clarity at the center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
