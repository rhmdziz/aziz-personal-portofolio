import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { experiences } from "@/data/experiences";
import { container, Em, SectionLabel } from "../ui/primitives";

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-16 border-b border-line">
      <div className={`${container} py-20 sm:py-28`}>
        <SectionLabel no="01" label="About" />
        <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          Useful products with a <Em>calm</Em> visual eye.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-12">
          <article className="min-w-0 bg-paper p-4 sm:p-10 lg:col-span-7">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              loop
              className="overflow-hidden rounded-xl border border-line"
            >
              {["1.png", "2.png", "3.png", "4.png", "5.png"].map((img, i) => (
                <SwiperSlide key={img}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={`/images/about/${img}`}
                      alt={`About Aziz, photo ${i + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-8 space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                I study Digital Business Technology at Universitas Prasetiya
                Mulya.
              </p>
              <p>
                What started as curiosity about mobile and web products grew
                into a strong interest in designing and building digital
                experiences that solve real problems.
              </p>
              <p>
                Through academic projects and independent learning, I&lsquo;ve
                built a solid foundation in mobile development and modern web
                technology, with usability and clarity at the center.
              </p>
            </div>
          </article>

          <article className="min-w-0 bg-paper p-5 sm:p-10 lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Experience
            </p>
            <ol className="mt-6">
              {experiences.map((exp) => (
                <li
                  key={`${exp.company}-${exp.period}`}
                  className="border-t border-line py-4 first:border-t-0 first:pt-0"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                    {exp.period}
                  </p>
                  <p className="mt-2 text-xl font-medium tracking-[-0.02em]">
                    {exp.title.trim()}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
