"use client";

import Image from "next/image";
import { Image as AntImage } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import React, { useRef, useEffect, useState } from "react";

import Main from "@/components/layout/main";

import { DownloadOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CV() {
  const { slug } = useParams();
  const [cvData, setCvData] = useState(null);
  const [html2pdfLib, setHtml2pdfLib] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const targetRef = useRef();

  useEffect(() => {
    import("html2pdf.js").then((mod) => {
      const lib = mod.default || mod.html2pdf || mod;
      setHtml2pdfLib(() => lib);
    });
  }, []);

  useEffect(() => {
    import(`@/data/cv/${slug}.js`)
      .then((mod) => setCvData(mod.cvData))
      .catch(() => console.error(`Data CV untuk "${slug}" tidak ditemukan.`));
  }, [slug]);

  if (!cvData)
    return (
      <div className="flex min-h-screen justify-center items-center">
        <p className="text-[var(#555555]">Loading CV data...</p>
      </div>
    );

  const handleDownload = () => {
    if (!html2pdfLib || !targetRef.current) return;

    const style = document.createElement("style");
    style.id = "pdf-export-style";
    style.innerHTML = `
      .pdf-export,
      .pdf-export * {
        color: rgb(85, 85, 85) !important;
        background-color: rgb(255, 255, 255) !important;
        border-color: rgb(229, 231, 235) !important;
      }
      .pdf-export h1, 
      .pdf-export h2, 
      .pdf-export .text-\\[\\#111111\\] {
        color: rgb(17, 17, 17) !important;
      }
      .pdf-export img {
        background-color: transparent !important;  
        /* display: none !important; */
      }
      /* Override Ant Design styles */
      .pdf-export .ant-image,
      .pdf-export .ant-image-img {
        background-color: transparent !important;
      }

      .pdf-export .experience-images {
        display: none !important; 
      }
      /* Hide icons in PDF */
      .pdf-export .anticon,
      .pdf-export [role="img"] {
        display: none !important;
      }
      .pdf-export section {
        page-break-inside: avoid;
      }
      /*
      .pdf-export .experience-item,
      .pdf-export .education-item {
        page-break-inside: avoid;
      }
      */

      /* Scale down all fonts by 50% */
      .pdf-export * {
        font-size: 1em !important;
        line-height: 1.7 !important;
      }
      .pdf-export {
        font-size: 16px !important;
      }
    `;
    document.head.appendChild(style);
    targetRef.current.classList.add("pdf-export");

    const options = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `${slug}-cv.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
        backgroundColor: "#ffffff",
        allowTaint: true,
        ignoreElements: (element) => {
          return (
            element.classList.contains("ant-image-preview") ||
            element.classList.contains("ant-image-preview-mask") ||
            element.classList.contains("ant-modal") ||
            element.classList.contains("anticon") ||
            (element.tagName === "svg" &&
              element.parentElement?.tagName === "SPAN")
          );
        },
        onclone: (clonedDoc) => {
          const allElements = clonedDoc.querySelectorAll("*");
          allElements.forEach((el) => {
            const computed = window.getComputedStyle(el);
            if (computed.color) {
              el.style.color = "rgb(85, 85, 85)";
            }
            if (
              computed.backgroundColor &&
              computed.backgroundColor !== "rgba(0, 0, 0, 0)"
            ) {
              el.style.backgroundColor = "rgb(255, 255, 255)";
            }
          });

          const icons = clonedDoc.querySelectorAll(".anticon, [role='img']");
          icons.forEach((icon) => icon.remove());
        },
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdfLib()
      .from(targetRef.current)
      .set(options)
      .save()
      .then(() => {
        // Cleanup
        targetRef.current.classList.remove("pdf-export");
        const styleEl = document.getElementById("pdf-export-style");
        if (styleEl) {
          document.head.removeChild(styleEl);
        }
      })
      .catch((error) => {
        console.error("PDF generation failed:", error);
        targetRef.current.classList.remove("pdf-export");
        const styleEl = document.getElementById("pdf-export-style");
        if (styleEl) {
          document.head.removeChild(styleEl);
        }
      });
  };

  return (
    <>
      <Drawer
        title={
          <h1 className="text-lg font-medium text-[#673DE6]">My Resume</h1>
        }
        placement="left"
        onClose={() => setOpenSidebar(false)}
        open={openSidebar}
        mask={false}
        closable={false}
        width={400}
        extra={
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setOpenSidebar(false)}
          />
        }
        styles={{
          body: {
            padding: "1rem",
            backgroundColor: "#fff",
            fontFamily: "var(--font-dm-sans)",
          },
        }}
      >
        <div className="flex flex-col items-start gap-3 text-[#555]">
          <p className="text-sm cursor-pointer" onClick={handleDownload}>
            <DownloadOutlined /> Download PDF
          </p>
        </div>
      </Drawer>

      <div className=" bg-white fixed p-[1rem] h-full shadow-2xl">
        <motion.div
          animate={{
            x: openSidebar ? -100 : 0,
            transition: { type: "spring", stiffness: 120, damping: 15 },
          }}
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpenSidebar(true)}
          />
        </motion.div>
      </div>

      <Main>
        <motion.div
          animate={{
            x: openSidebar ? 200 : 0,
            transition: { type: "spring", stiffness: 120, damping: 15 },
          }}
        >
          <br />
          <br />
          <div ref={targetRef} className="w-full  max-w-2xl mx-auto">
            {/* Header */}
            <div id="header" className="flex gap-6">
              <Image
                src="/images/aziz.png"
                alt="Aziz Rahmad"
                width={112}
                height={112}
                className="rounded-full border border-gray-200"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl text-[#111111]">{cvData.name}</h1>
                <p className="text-base text-[#555555]">{cvData.title}</p>
              </div>
            </div>

            {/* About */}
            <section id="about" className="mt-10">
              <h2 className="text-base text-[#111111] mb-4">About</h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                {cvData.about}
              </p>
            </section>

            {/* Experience */}
            <section id="experience" className="mt-8">
              <h2 className="text-base text-[#111111] mb-4">Experience</h2>
              {cvData.experience.map((exp, i) => (
                <div key={i} className="flex items-start mb-6 gap-8">
                  <div className="w-[125px]">
                    <p className="text-sm text-[#555555]">{exp.period}</p>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center gap-3">
                      <Image
                        width={35}
                        height={35}
                        src={exp.logo}
                        alt={exp.company}
                        className="rounded-sm object-cover"
                      />
                      <div>
                        <p className="text-base text-[#111111] mb-1">
                          {exp.role} at {exp.company}{" "}
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExportOutlined />
                          </a>
                        </p>
                        <p className="text-base text-[#555555]">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="list-disc list-inside text-sm text-[#555555] mt-2 leading-relaxed">
                      {exp.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>

                    {exp.images && (
                      <AntImage.PreviewGroup>
                        <div className="experience-images grid grid-cols-4 gap-4 mt-2">
                          {exp.images.map((img, j) => (
                            <AntImage
                              key={j}
                              src={img}
                              alt={`img${j}`}
                              className="rounded-sm object-cover"
                            />
                          ))}
                        </div>
                      </AntImage.PreviewGroup>
                    )}
                  </div>
                </div>
              ))}
            </section>

            {/* Education */}
            <section id="education" className="mt-8">
              <h2 className="text-base text-[#111111] mb-4">Education</h2>
              {cvData.education.map((edu, i) => (
                <div key={i} className="flex items-start mb-6 gap-8">
                  <div className="w-[125px]">
                    <p className="text-sm text-[#555555]">{edu.period}</p>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center gap-3">
                      <Image
                        width={35}
                        height={35}
                        src={edu.logo}
                        alt={edu.institution}
                        className="rounded-sm object-cover"
                      />
                      <div>
                        <p className="text-base text-[#111111] mb-1">
                          {edu.institution}{" "}
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExportOutlined />
                          </a>
                        </p>
                        <p className="text-base text-[#555555]">{edu.degree}</p>
                      </div>
                    </div>
                    {edu.points && (
                      <ul className="list-disc list-inside text-sm text-[#555555] mt-2 leading-relaxed">
                        {edu.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </section>
          </div>
          <br />
          <br />
        </motion.div>
      </Main>
    </>
  );
}
