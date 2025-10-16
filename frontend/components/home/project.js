"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Tag } from "antd";
import { projects } from "@/data/projects";
import { GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <div
      id="project"
      className="bg-[var(--background)] w-full relative flex justify-center"
    >
      <div className="max-w-5xl w-full   px-6 md:px-0 relative mt-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium  text-[var(--gray-primary)] ">
          Some of my project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 mb-4">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleOpen(project)}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-200 overflow-hidden cursor-pointer">
                <div className="relative w-full h-[220px] overflow-hidden ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-medium text-[var(--gray-primary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--gray-secondary)]  tracking-wide mb-1">
                    {project.date}
                  </p>
                  <p className="text-sm text-[var(--gray-secondary)] ">
                    {project.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        open={!!selectedProject}
        onCancel={handleClose}
        footer={null}
        centered
        width={700}
        styles={{
          header: { display: "none" },
          body: {
            padding: 0,
            fontFamily: "var(--font-dm-sans)",
            maxHeight: "80vh",
            overflowY: "auto",
          },
        }}
      >
        {selectedProject && (
          <div className="px-2 sm:px-4 md:px-6 py-6">
            <div className="relative w-full h-[220px] sm:h-[340px] mb-4 rounded-xl overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between mb-2 items-center">
              <h2 className="text-2xl font-medium text-[var(--gray-primary)]">
                {selectedProject.title}
              </h2>
              <div className="text-[var(--purple)]">
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl cursor-pointer"
                >
                  <GlobalOutlined style={{ color: "var(--purple)" }} />
                </Link>
              </div>
            </div>
            <p className="text-sm text-[var(--gray-secondary)]">
              {selectedProject.role} | {selectedProject.date}
            </p>

            <p className="mt-3 text-base text-[var(--gray-secondary)] leading-relaxed">
              {selectedProject.description}
            </p>

            {selectedProject.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg text-xs font-medium py-1 px-3 border-2 border-[var(--purple)] text-[var(--purple)]"
                  >
                    <p>{t}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
