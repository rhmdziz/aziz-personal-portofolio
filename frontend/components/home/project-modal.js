"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const techIconMap = {
  "Google Maps API": "/icons/maps.png",
  Docker: "/icons/docker.png",
  Figma: "/icons/figma.png",
  PostgreSQL: "/icons/posgresql.png",
  "TensorFlow Lite": "/icons/tflite.png",
  "React.js": "/icons/react.png",
  "Tailwind CSS": "/icons/tailwind.png",
  Flutter: "/icons/flutter.png",
  Django: "/icons/django.png",
  "Django REST Framework": "/icons/djangorest.png",
  Kotlin: "/icons/kotlin.png",
  MQTT: "/icons/mqtt.png",
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
  const [scrollIndicator, setScrollIndicator] = useState({
    visible: false,
    height: 0,
    offset: 0,
  });
  const isMobile = useIsMobile();
  const sheetScrollRef = useRef(null);
  const detailIntro = project?.detailIntro?.trim();
  const detailPoints = [
    ...(project?.detailPoints?.filter((item) => item?.content?.trim()) ?? []),
    ...(project?.tech?.length
      ? [
          {
            title: "Tech Stack",
            techItems: project.tech,
          },
        ]
      : []),
  ];

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

  useEffect(() => {
    if (!project || !sheetScrollRef.current) return;

    const scrollElement = sheetScrollRef.current;

    const updateScrollIndicator = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const hasOverflow = scrollHeight > clientHeight + 8;

      if (!hasOverflow) {
        setScrollIndicator({
          visible: false,
          height: 0,
          offset: 0,
        });
        return;
      }

      const trackHeight = Math.max(clientHeight - 32, 80);
      const thumbHeight = Math.max(
        (clientHeight / scrollHeight) * trackHeight,
        52,
      );
      const maxThumbOffset = trackHeight - thumbHeight;
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);

      setScrollIndicator({
        visible: true,
        height: thumbHeight,
        offset: maxThumbOffset * scrollProgress,
      });
    };

    updateScrollIndicator();

    scrollElement.addEventListener("scroll", updateScrollIndicator, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollIndicator);

    const resizeObserver = new ResizeObserver(() => {
      updateScrollIndicator();
    });

    resizeObserver.observe(scrollElement);

    return () => {
      scrollElement.removeEventListener("scroll", updateScrollIndicator);
      window.removeEventListener("resize", updateScrollIndicator);
      resizeObserver.disconnect();
    };
  }, [project]);

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
      className="fixed inset-0 z-[11000] bg-ink/40"
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
          className="relative mx-auto grid h-[92vh] min-h-0 w-full max-w-[760px] grid-rows-[auto,minmax(0,1fr),auto] overflow-hidden rounded-t-xl border border-line bg-paper md:h-[85vh] md:w-[min(760px,calc(100vw-2rem))] md:rounded-xl"
        >
          <div className="md:hidden flex justify-center pt-3">
            <div className="h-1.5 w-14 rounded-full bg-line" />
          </div>
          <div className="relative min-h-0 overflow-hidden">
            <div
              ref={sheetScrollRef}
              className="modal-scrollbar h-full min-h-0 overflow-y-auto px-5 pb-6 pt-4 md:px-6 md:pb-6 md:pr-10 md:pt-6"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-[#EBE8E0]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 sm:mt-4">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
                  <div className="flex w-full items-center justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                      {project.role}
                    </p>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {project.date}
                    </span>
                  </div>
                </div>

                <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">
                  {project.title}
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {project.description}
              </p>

              {(detailIntro || detailPoints?.length) && (
                <div className="mt-7">
                  {detailIntro && (
                    <p className="text-sm leading-7 text-ink sm:text-base">
                      {detailIntro}
                    </p>
                  )}

                  {detailPoints.length > 0 && (
                    <div className="mt-5 grid gap-px border border-line bg-line">
                      {detailPoints.map((item) => (
                        <div key={item.title} className="bg-paper p-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                            {item.title}
                          </p>
                          {item.techItems?.length ? (
                            <div className="mt-3 flex flex-wrap items-center gap-3">
                              {item.techItems.map((tech) => (
                                <div
                                  key={tech}
                                  title={tech}
                                  className="flex h-8 w-8 items-center justify-center"
                                >
                                  {techIconMap[tech] ? (
                                    <Image
                                      src={techIconMap[tech]}
                                      alt={tech}
                                      width={48}
                                      height={48}
                                      className="h-18 w-18 shrink-0 object-contain"
                                    />
                                  ) : (
                                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                                      {getTechFallbackLabel(tech)}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="mt-2 text-sm leading-6 text-ink">
                              {item.content}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {scrollIndicator.visible && (
              <div className="pointer-events-none absolute inset-y-4 right-2 hidden w-1.5 md:block">
                <div className="relative h-full rounded-full bg-line">
                  <div
                    className="absolute left-0 right-0 rounded-full bg-accent"
                    style={{
                      height: `${scrollIndicator.height}px`,
                      transform: `translateY(${scrollIndicator.offset}px)`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-line bg-paper px-5 py-4 md:px-6">
            <div className="flex items-center gap-3 md:justify-end">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink md:flex-none"
              >
                Open project
                <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
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
