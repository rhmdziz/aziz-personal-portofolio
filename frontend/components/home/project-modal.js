"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { CloseOutlined, GlobalOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const techIconMap = {
  "React.js": "/icons/react.png",
  "Tailwind CSS": "/icons/tailwind.png",
  Flutter: "/icons/flutter.png",
  Django: "/icons/django.png",
  "Django REST Framework": "/icons/djangorest.png",
  Kotlin: "/icons/kotlin.png",
  Figma: "/icons/figma.png",
};

function getTechFallbackLabel(tech) {
  return tech
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export default function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const sheetScrollRef = useRef(null);

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

  useEffect(() => {
    if (!isMobile || !sheetScrollRef.current) return;

    let startY = 0;
    const touchTarget = sheetScrollRef.current;

    const onTouchStart = (event) => {
      if (event.touches.length !== 1) return;
      startY = event.touches[0].clientY;
    };

    const onTouchMove = (event) => {
      if (event.touches.length !== 1) return;
      const currentY = event.touches[0].clientY;
      const deltaY = currentY - startY;

      if (deltaY > 80 && touchTarget.scrollTop <= 0) {
        onClose();
      }
    };

    touchTarget.addEventListener("touchstart", onTouchStart, { passive: true });
    touchTarget.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      touchTarget.removeEventListener("touchstart", onTouchStart);
      touchTarget.removeEventListener("touchmove", onTouchMove);
    };
  }, [isMobile, onClose]);

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
      className="fixed inset-0 z-[11000] bg-[rgba(16,32,58,0.22)] backdrop-blur-md"
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
          className="mx-auto flex max-h-[92vh] w-full max-w-[760px] flex-col overflow-hidden rounded-t-[1.9rem] border border-[var(--line)] bg-white shadow-[0_-20px_60px_rgba(17,32,49,0.18)] md:max-h-[85vh] md:w-[min(760px,calc(100vw-2rem))] md:rounded-[1.9rem]"
        >
          <div className="md:hidden flex justify-center pt-3">
            <div className="h-1.5 w-14 rounded-full bg-[var(--line)]" />
          </div>
          <div
            ref={sheetScrollRef}
            className="overflow-y-auto px-5 pb-6 pt-4 md:p-6"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-[1.4rem] sm:h-[240px] md:h-[340px] md:rounded-[1.5rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 sm:mt-4">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <span className="inline-flex h-8 whitespace-nowrap items-center rounded-full border border-white/60 bg-[var(--purple-soft)] px-3 text-[10px] font-medium text-[var(--purple)] sm:h-10 sm:px-4 sm:text-xs">
                    {project.role}
                  </span>
                  <span className="inline-flex h-8 whitespace-nowrap items-center rounded-full border border-white/60 bg-white/56 px-3 text-[10px] font-medium text-[var(--gray-secondary)] sm:h-10 sm:px-4 sm:text-xs">
                    {project.date}
                  </span>
                </div>

                <div className="hidden md:flex flex-wrap items-center gap-2 shrink-0 mt-2 sm:mt-0">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/60 bg-white/56 px-3 text-[11px] font-medium text-[var(--gray-primary)] transition hover:border-[#b59af6] hover:bg-white/72 hover:text-[var(--purple)] sm:h-10 sm:px-4 sm:text-sm"
                  >
                    <GlobalOutlined />
                    Visit
                  </Link>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/56 text-[var(--gray-secondary)] transition hover:border-[#b59af6] hover:bg-white/72 hover:text-[var(--purple)] sm:h-10 sm:w-10"
                  >
                    <CloseOutlined />
                  </button>
                </div>
              </div>

              <div className="mt-4 md:hidden">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gray-secondary)]">
                  Overview
                </p>
              </div>

              <h2 className="mt-3 text-[1.9rem] leading-[1.02] font-medium tracking-[-0.03em] text-[var(--gray-primary)] sm:mt-3 sm:text-2xl md:text-[2rem]">
                {project.title}
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--gray-secondary)] sm:text-base">
              {project.description}
            </p>

            {project.tech && (
              <>
                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gray-secondary)]">
                    Tech Stack
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <div
                      key={`${tech}-${index}`}
                      title={tech}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white shadow-[0_8px_20px_rgba(17,32,49,0.04)]"
                    >
                      {techIconMap[tech] ? (
                        <Image
                          src={techIconMap[tech]}
                          alt={tech}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--gray-secondary)]">
                          {getTechFallbackLabel(tech)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="md:hidden border-t border-[var(--line)] bg-white/96 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#b59af6] bg-[var(--purple)] px-4 text-sm font-medium text-white"
              >
                <GlobalOutlined />
                Open project
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--gray-secondary)]"
              >
                <CloseOutlined />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>,
    document.body,
  );
}
