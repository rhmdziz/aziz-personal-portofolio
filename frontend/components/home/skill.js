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
      className="relative w-full flex justify-center bg-[var(--background)]"
    >
      <div className="max-w-5xl w-full px-6 md:px-0 relative mt-24 ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--gray-primary)]">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center mt-8">
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
              <div className="group relative aspect-square [transform-style:preserve-3d] transition-transform duration-300 hover:[transform:rotateY(180deg)] cursor-default">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-md backface-hidden">
                  <div className="w-12 h-12 text-4xl">{skill.icon}</div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--purple)] text-[var(--background)] rounded-xl shadow-md [transform:rotateY(180deg)] backface-hidden">
                  <p className="text-sm sm:text-base font-medium">
                    {skill.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {Array.from({ length: remaining }).map((_, i) => (
            <motion.div
              key={`placeholder-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: skills.length * 0.05 + i * 0.05,
              }}
              className="aspect-square bg-gray-300 rounded-xl"
            ></motion.div>
          ))}
        </div>

        <p className="text-[var(--gray-secondary)] mt-10 text-base">
          A mix of design, development, and problem-solving — I love turning
          ideas into seamless digital experiences.
        </p>
      </div>
    </section>
  );
}
