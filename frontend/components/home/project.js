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
      className="w-full relative flex justify-center px-6 py-24 md:py-32"
    >
      <div className="max-w-5xl w-full relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--purple)]">
              Projects
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--gray-primary)]">
              Selected work across mobile apps and web experiences.
            </h2>
          </div>
          <p className="max-w-md text-[var(--gray-secondary)] text-base leading-7">
            A small set of projects that reflect how I approach product
            thinking, interface polish, and implementation detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleOpen(project)}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="group bg-white/85 rounded-[1.75rem] border border-[var(--line)] shadow-[0_20px_60px_rgba(17,32,49,0.08)] hover:-translate-y-1.5 transition duration-300 overflow-hidden cursor-pointer backdrop-blur-sm">
                <div className="relative w-full sm:h-[220px] h-[200px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--purple)]">
                    {project.role}
                  </p>
                  <h3 className="text-2xl font-medium text-[var(--gray-primary)] mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--gray-secondary)] tracking-wide mb-3">
                    {project.date}
                  </p>
                  <p className="text-sm text-[var(--gray-secondary)] line-clamp-3 leading-6">
                    {project.description}
                  </p>
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
