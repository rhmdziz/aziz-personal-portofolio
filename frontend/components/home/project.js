"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectModal from "./project-modal";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section
      id="project"
      className="relative flex w-full justify-center px-6 py-24 md:py-32"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">
              Selected work across mobile and web.
            </h2>
          </div>
          <p className="section-copy max-w-md">
            A focused set of projects that reflects how I think about product,
            interface quality, and implementation detail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleOpen(project)}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="ios-panel-strong group cursor-pointer overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#10203a]/24 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold text-[var(--purple)]">
                      {project.role}
                    </p>
                    <span className="text-xs font-medium text-[var(--gray-secondary)]">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-medium tracking-[-0.04em] text-[var(--gray-primary)]">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-6 text-[var(--gray-secondary)]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--purple)]">
                      View details
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/65 text-lg text-[var(--gray-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.74)]">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
