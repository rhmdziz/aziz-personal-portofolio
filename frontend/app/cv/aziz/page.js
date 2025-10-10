"use client";

import Image from "next/image";
import { Image as AntImage } from "antd";
import { ExportOutlined } from "@ant-design/icons";

export default function CV() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10">
      <div className="w-full max-w-2xl mx-auto ">
        <div id="header" className="flex mt-24 gap-6">
          <div>
            <Image
              src="/images/aziz.png"
              alt="Picture of the author"
              width={112}
              height={112}
              className="rounded-full border-1 border-gray-200"
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h1 className="text-2xl text-gray-primary">Aziz Rahmad Isnanto</h1>
            <p className="text-base text-gray-secondary">Mobile developer</p>
            {/* <div>
              <a
                href="https://aziz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-secondary bg-gray-100 inline-block px-2 py-1 rounded-2xl mt-1 hover:bg-gray-200"
              >
                aziz.com
              </a>
            </div> */}
          </div>
        </div>
        <div id="about" className="mt-10">
          <h2 className="text-base text-gray1 mb-4">About</h2>
          <p className="text-base text-gray-secondary ">
            A Digital Business Technology student at Prasetiya Mulya University
            with a strong passion for technology development, I am eager to
            utilize my expertise to contribute to innovative projects. I am
            looking for opportunities to apply my knowledge and thrive within a
            dynamic and forward-thinking team.{" "}
          </p>
        </div>
        <div id="experience" className="mt-8">
          <h2 className="text-base text-gray1 mb-4">Experience</h2>

          <div className="flex items-start mb-6 gap-8">
            <div className="w-[125px]">
              <p className="text-base text-gray-secondary">Jun - Aug 2025</p>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px]">
                  <Image
                    width={100}
                    height={100}
                    src="/images/logo/kop.png"
                    alt="img1"
                    className="rounded-sm object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-base text-gray1 mb-1">
                    Mobile Application Developer at Kementerian Koperasi RI{" "}
                    <a
                      href="https://merahputih.kop.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExportOutlined />
                    </a>
                  </p>
                  <p className="text-base text-gray-secondary">
                    Jakarta Selatan, DKI Jakarta
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-base text-gray-secondary mt-2 ">
                <li>
                  Development and modification of KDMP (Koperasi Desa Merah
                  Putih) mobile applications
                </li>
                <li>Support API, database, or dashboard integration</li>
                <li>
                  Collaborate with the main development, QA, and design teams
                </li>
              </ul>
              <AntImage.PreviewGroup>
                <div className="grid grid-cols-4 gap-4 mt-2 w-100% ">
                  <AntImage
                    src="/images/cv/experience/1.webp"
                    alt="img1"
                    className="rounded-sm object-cover w-full h-full"
                  />
                  <AntImage
                    src="/images/cv/experience/2.webp"
                    alt="img2"
                    className="rounded-sm object-cover w-full h-full"
                  />
                  <AntImage
                    src="/images/cv/experience/3.webp"
                    alt="img3"
                    className="rounded-sm object-cover w-full h-full"
                  />
                  <AntImage
                    src="/images/cv/experience/4.webp"
                    alt="img4"
                    className="rounded-sm object-cover w-full h-full"
                  />
                </div>
              </AntImage.PreviewGroup>
            </div>
          </div>
          <div className="flex items-start mb-6 gap-8">
            <div className="w-[125px]">
              <p className="text-base text-gray-secondary">Jan - May 2025</p>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px]">
                  <Image
                    width={100}
                    height={100}
                    src="/images/logo/prasmul.jpg"
                    alt="img1"
                    className="rounded-sm object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-base text-gray1 mb-1">
                    Mobile Development Lab Assistant at Universitas Prasetiya
                    Mulya{" "}
                    <a
                      href="https://www.prasetiyamulya.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExportOutlined />
                    </a>
                  </p>
                  <p className="text-base text-gray-secondary">
                    BSD, Tangerang
                  </p>
                </div>
              </div>

              <ul className="list-disc list-inside text-base text-gray-secondary mt-2 ">
                <li>
                  Led a mentoring cohort spanning 34 individuals related to
                  Flutter and Django REST framework
                </li>
                <li>
                  Developing weekly materials that align with the course
                  objectives and help students grasp key concepts in mobile
                  application development
                </li>
                <li>
                  Creating bi-weekly practice questions to reinforce learning
                  and improve students' problem-solving skills
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="experience" className="mt-8">
          <h2 className="text-base text-gray1 mb-4">Education</h2>

          <div className="flex items-start mb-6 gap-8">
            <div className="w-[125px]">
              <p className="text-base text-gray-secondary">Aug 2022 - Now</p>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px]">
                  <Image
                    width={100}
                    height={100}
                    src="/images/logo/prasmul.jpg"
                    alt="img1"
                    className="rounded-sm object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-base text-gray1 mb-1">
                    Universitas Prasetiya Mulya{" "}
                    <a
                      href="https://www.prasetiyamulya.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExportOutlined />
                    </a>
                  </p>
                  <p className="text-base text-gray-secondary">
                    Bachelor Degree in Digital Business Technology (S. Kom)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start mb-6 gap-8">
            <div className="w-[125px]">
              <p className="text-base text-gray-secondary">Sep - Dec 2024</p>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px]">
                  <Image
                    width={100}
                    height={100}
                    src="/images/logo/bangkit.jpg"
                    alt="img1"
                    className="rounded-sm object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-base text-gray1 mb-1">
                    Bangkit Academy by Google, Goto, Tokopedia, and Traveloka{" "}
                    <a
                      href="https://grow.google/intl/id_id/bangkit/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExportOutlined />
                    </a>
                  </p>
                  <p className="text-base text-gray-secondary">
                    Magang & Studi Independen Bersertifikat 7
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-base text-gray-secondary mt-2 ">
                <li>
                  Selected from more than 45 thousand applicants interested in
                  joining Bangkit – a Google-led interdisciplinary learning
                  program to help prepare me for a successful career at a
                  leading technology company in Indonesia
                </li>
                <li>
                  Successfully developed “PadiCare", an AI-based application
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
