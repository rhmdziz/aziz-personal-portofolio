"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectModal from "./project-modal";
import { container, Em, Pill, SectionLabel } from "../ui/primitives";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section id="project" className="w-full scroll-mt-16 border-b border-line">
      <div className={`${container} py-20 sm:py-28`}>
        <SectionLabel no="02" label="Projects" />
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Selected work across <Em>mobile</Em> and web.
          </h2>
          <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A focused set of projects that shows how I think about product,
            interface quality, and implementation detail.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {sortedProjects.map((project, i) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-haspopup="dialog"
                className="group block w-full cursor-pointer text-left"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-[#EBE8E0]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/75">
                      {project.role}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-1 items-center justify-center rounded-full bg-ink text-lg text-paper opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                    <span className="mr-3 font-mono text-xs tracking-[0.1em] text-muted">
                      {String(sortedProjects.length - i).padStart(2, "0")}
                    </span>
                    {project.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                    {project.date.match(/\d{4}/g)?.pop()}
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-base leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
