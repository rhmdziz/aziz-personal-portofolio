import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function About() {
  const experiences = [
    {
      period: "Sep 2025 – now",
      title: "Coding Teacher",
      company: "Timedoor Academy",
    },
    {
      period: "Juni – September 2025",
      title: "Mobile Developer Intern",
      company: "Kementerian Koperasi",
    },
    {
      period: "Jan – May 2025",
      title: "Assistant Laboratory",
      company: "Universitas Prasetiya Mulya",
    },
    {
      period: "Aug – Dec 2024",
      title: "Mobile Development Cohort",
      company: "Bangkit Academy",
    },
    {
      period: "Jan – Jun 2024",
      title: "Frontend Developer Intern",
      company: "Youtz Media",
    },
  ];

  return (
    <div
      id="about"
      className="bg-[var(--purple)] w-full relative flex justify-center"
    >
      <div className="max-w-5xl w-full min-h-screen  px-6 md:px-0 relative my-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-[var(--background)] ">
          My name is Aziz
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-12 md:gap-24 mt-8">
          <div className="md:max-w-[50%]">
            <div className="mx-auto md:mx-0">
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
                className="rounded-xl overflow-hidden"
              >
                {["1.png", "2.png", "3.png", "4.png"].map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={`/images/about/${img}`}
                        alt={`About ${i + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p className="mt-4 md:mt-6 text-[var(--background)] text-base sm:text-lg mx-auto md:mx-0">
              I am an undergraduate student majoring in Digital Business
              Technology at Universitas Prasetiya Mulya.
            </p>
            <p className="mt-1 md:mt-2 text-[var(--background)] text-base sm:text-lg mx-auto md:mx-0">
              Long story short, I started my programming journey at 14, learning
              Web Development, after two years, I started to learn Android
              Development using Kotlin while in Vocational High School. I also
              have some experience in Machine Learning.
            </p>
            <p className="mt-1 md:mt-2 text-[var(--background)] text-base sm:text-lg mx-auto md:mx-0">
              During my undergraduate studies, I will learn about Machine
              Learning in-depth and gain experience in leadership and
              organization. I believe that with this level of knowledge and
              experience, I will be able to improve myself and contribute to
              society.
            </p>
          </div>
          <div className="md:max-w-[50%]">
            <div className="max-w-3xl w-full flex flex-col relative">
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[var(--background)]"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 relative mb-8"
                >
                  <div className="relative z-10">
                    <div className="w-3 h-3 bg-[var(--background)] rounded-full mt-4"></div>
                  </div>

                  <div className="text-[var(--background)] ">
                    <p className="text-sm font-medium opacity-80 mt-3">
                      {exp.period}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {exp.title} <span className="italic font-normal">at</span>{" "}
                      <br />
                      {exp.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
