"use client";
import { skills } from "@/data/skills";
import { container, Em, SectionLabel } from "../ui/primitives";

export default function Skill() {
  return (
    <section id="skill" className="w-full scroll-mt-16 border-b border-line">
      <div className={`${container} py-20 sm:py-28`}>
        <SectionLabel no="03" label="Skills" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Tools I use to build <Em>polished</Em> products.
          </h2>
          <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A working set of design, development, and problem-solving tools,
            used to turn ideas into production-ready experiences.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="group flex aspect-square flex-col justify-between bg-paper p-5 transition-colors duration-300 hover:bg-white"
            >
              <div className="h-12 w-12 transition-transform duration-300 group-hover:-translate-y-0.5 [&_img]:h-full [&_img]:w-full [&_img]:object-contain">
                {skill.icon}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
