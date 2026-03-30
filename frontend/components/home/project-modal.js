"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { CloseOutlined, GlobalOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!mounted || !project) return null;

  const panelAnimation = isMobile
    ? {
        initial: { y: "100%", opacity: 1 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 1 },
      }
    : {
        initial: { y: 28, opacity: 0, scale: 0.985 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 28, opacity: 0, scale: 0.985 },
      };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed inset-0 z-[11000] bg-[rgba(17,32,49,0.2)] backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div className="absolute inset-x-0 bottom-0 top-auto px-0 pb-0 md:inset-0 md:flex md:items-center md:justify-center md:p-4">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={(event) => event.stopPropagation()}
          initial={panelAnimation.initial}
          animate={panelAnimation.animate}
          exit={panelAnimation.exit}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="mx-auto flex max-h-[88vh] w-full max-w-[760px] flex-col overflow-hidden rounded-t-[1.9rem] border border-[var(--line)] bg-white shadow-[0_-20px_60px_rgba(17,32,49,0.18)] md:max-h-[85vh] md:w-[min(760px,calc(100vw-2rem))] md:rounded-[1.75rem]"
        >
          <div className="overflow-y-auto px-6 pt-6 pb-24 md:p-6">
            <div className="relative h-[180px] w-full overflow-hidden rounded-[1.2rem] sm:h-[240px] md:h-[340px] md:rounded-[1.5rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="inline-flex h-8 items-center rounded-full border border-[var(--line)] bg-[var(--purple-soft)] px-3 text-[10px] font-medium text-[var(--purple)] sm:h-10 sm:px-4 sm:text-xs whitespace-nowrap">
                    {project.role}
                  </span>
                  <span className="inline-flex h-8 items-center rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 text-[10px] font-medium text-[var(--gray-secondary)] sm:h-10 sm:px-4 sm:text-xs whitespace-nowrap">
                    {project.date}
                  </span>
                </div>

                <div className="hidden md:flex flex-wrap items-center gap-2 shrink-0 mt-2 sm:mt-0">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 text-[11px] font-medium text-[var(--gray-primary)] transition hover:border-[var(--purple)] hover:bg-[var(--purple-soft)] hover:text-[var(--purple)] sm:h-10 sm:px-4 sm:text-sm"
                  >
                    <GlobalOutlined />
                    Visit
                  </Link>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--gray-secondary)] transition hover:border-[var(--purple)] hover:bg-[var(--purple-soft)] hover:text-[var(--purple)] sm:h-10 sm:w-10"
                  >
                    <CloseOutlined />
                  </button>
                </div>
              </div>

              <h2 className="mt-3 text-[1.8rem] leading-[1.06] font-medium tracking-[-0.02em] text-[var(--gray-primary)] sm:mt-3 sm:text-2xl md:text-[2rem]">
                {project.title}
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--gray-secondary)] sm:text-base">
              {project.description}
            </p>

            {project.tech && (
              <>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="rounded-full border border-[var(--line)] bg-[var(--purple-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--purple)] sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex md:hidden items-center gap-2 mt-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 text-[11px] font-medium text-[var(--gray-primary)] transition hover:border-[var(--purple)] hover:bg-[var(--purple-soft)] hover:text-[var(--purple)]"
                  >
                    <GlobalOutlined />
                    Visit
                  </Link>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--gray-secondary)] transition hover:border-[var(--purple)] hover:bg-[var(--purple-soft)] hover:text-[var(--purple)]"
                  >
                    <CloseOutlined />
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>,
    document.body,
  );
}
