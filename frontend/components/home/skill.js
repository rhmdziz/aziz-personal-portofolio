"use client";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skill() {
  const totalColumns = 7;
  const remaining =
    totalColumns - (skills.length % totalColumns || totalColumns);

  return (
    <section
      id="skill"
      className="relative w-full flex justify-center px-6 py-24 md:pt-28"
    >
      <div className="max-w-5xl w-full relative">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/70 p-8 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--purple)]">
                Skills
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--gray-primary)]">
                Tools I use to ship polished products.
              </h2>
            </div>
            <p className="max-w-md text-[var(--gray-secondary)] text-base leading-7">
              A mix of design, development, and problem-solving tools that help
              turn rough ideas into clean, production-ready experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 text-center mt-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <div className="group relative aspect-square cursor-default [perspective:1200px]">
                  <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-500 ease-out will-change-transform group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--surface)] rounded-[1.5rem] border border-[var(--line)] [backface-visibility:hidden] pointer-events-none">
                      <div className="w-12 h-12">{skill.icon}</div>
                      {/* <p className="text-sm font-medium text-[var(--gray-primary)] px-3">
                        {skill.name}
                      </p> */}
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--gray-primary)] text-[var(--background)] rounded-[1.5rem] shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] pointer-events-none px-4">
                      <p className="text-base font-medium">{skill.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {Array.from({ length: remaining }).map((_, i) => (
              <motion.div
                key={`placeholder-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.45, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: skills.length * 0.05 + i * 0.05,
                }}
                className="aspect-square rounded-[1.5rem] border border-dashed border-[var(--line)] bg-transparent block"
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
