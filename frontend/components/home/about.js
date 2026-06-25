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
      className="relative flex w-full justify-center px-6 py-24 md:py-32"
    >
      <div className="section-shell">
        <div className="ios-panel overflow-hidden rounded-[2.5rem] p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] md:gap-x-16">
            <div className="order-1 max-w-2xl">
              <p className="section-kicker">About</p>
              <h2 className="section-title">
                Building useful products with a calm visual eye.
              </h2>
            </div>

            <div className="order-3 md:order-2 md:row-span-2">
              <div className="max-w-3xl w-full flex flex-col relative">
                <p className="section-kicker">Experience</p>
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
                      className="relative mb-7 flex items-start gap-5"
                    >
                      <div className="relative z-10 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[var(--purple)]"></div>
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
                          {exp.location ? (
                            <span className="ml-2 text-[var(--purple)]/75">
                              · {exp.location}
                            </span>
                          ) : null}
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
                className="overflow-hidden rounded-[1.9rem]"
              >
                {["1.png", "2.png", "3.png", "4.png", "5.png"].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.9rem] md:aspect-[16/9]">
                      <Image
                        src={`/images/about/${img}`}
                        alt={`About ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#10203a]/28 to-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="section-copy mt-6">
                I study Digital Business Technology at Universitas Prasetiya
                Mulya.
              </p>
              <p className="section-copy mt-4">
                What started as curiosity about mobile and web products grew
                into a strong interest in designing and building digital
                experiences that solve real problems.
              </p>
              <p className="section-copy mt-4">
                Through academic projects and independent learning, I&lsquo;ve
                developed a solid foundation in mobile development and modern
                web technology, with usability and clarity at the center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
