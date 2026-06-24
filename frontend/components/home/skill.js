"use client";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Skill() {
  const totalColumns = 7;
  const remaining =
    totalColumns - (skills.length % totalColumns || totalColumns);

  return (
    <section
      id="skill"
      className="relative flex w-full justify-center px-6 py-24 md:pt-28"
    >
      <div className="section-shell">
        <div className="ios-panel-strong overflow-hidden rounded-[2.5rem] p-6 sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Skills</p>
              <h2 className="section-title">
                Tools I use to build polished products.
              </h2>
            </div>
            <p className="section-copy max-w-md">
              A working set of design, development, and problem-solving tools
              used to turn ideas into clear, production-ready experiences.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      aria-label={skill.name}
                      className="ios-panel group flex aspect-square w-full items-center justify-center rounded-[1.7rem] px-4 transition duration-300 hover:-translate-y-1 hover:bg-white/78"
                    >
                      <div className="h-12 w-12 transition duration-300 group-hover:scale-105">
                        {skill.icon}
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={10}
                    className="rounded-full bg-[var(--gray-primary)] px-3 py-1.5 text-xs text-white"
                  >
                    {skill.name}
                  </TooltipContent>
                </Tooltip>
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
                className="aspect-square rounded-[1.7rem] border border-dashed border-white/55 bg-white/18 block"
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
