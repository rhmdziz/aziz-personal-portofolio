"use client";

import Image from "next/image";
import { Image as AntImage } from "antd";
import { ExportOutlined } from "@ant-design/icons";

import React, { useRef, useEffect, useState } from "react";

import { downloadPDF } from "@/utils/downloadPdf";

export default function CV() {
  const [cvData, setCvData] = useState(null);

  const targetRef = useRef();

  useEffect(() => {
    import(`@/data/cv/aziz.js`)
      .then((mod) => setCvData(mod.cvData))
      .catch(() => console.error(`Data CV untuk "aziz" tidak ditemukan.`));
  }, []);

  if (!cvData)
    return (
      <div className="flex min-h-screen justify-center ">
        <p className="text-[var(--gray-primary)]">Loading CV data...</p>
      </div>
    );

  return (
    <div
      className="max-w-2xl w-full mx-auto"
    >
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
        <p className="text-sm text-[#555555] leading-relaxed">{cvData.about}</p>
      </section>

      {/* Experience */}
      <section id="experience" className="mt-8">
        <h2 className="text-base text-[#111111] mb-4">Experience</h2>
        {cvData.experience.map((exp, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-start mb-6 gap-2 md:gap-8"
          >
            <div className="w-full md:w-[125px]">
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
                  <p className="text-sm text-[#555555]">{exp.location}</p>
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
          <div
            key={i}
            className="flex flex-col md:flex-row items-start mb-6 gap-2 md:gap-8"
          >
            <div className="w-full md:w-[125px]">
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
                  <p className="text-sm text-[#555555]">{edu.degree}</p>
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
  );
}
