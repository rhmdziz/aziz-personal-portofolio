const createEmptyDetailPoints = () => [
  { title: "Summary", content: "" },
  { title: "Origin", content: "" },
  { title: "Team", content: "" },
  { title: "Impact", content: "" },
  { title: "Key Learning", content: "" },
];

export const projects = [
  // {
  //   id: 7,
  //   role: "Frontend Developer",
  //   title: "Rumah Belajar Abi Sakinah",
  //   description:
  //     "A modern landing page for Rumah Belajar Abi Sakinah, showcasing their educational services and resources for students and teachers.",
  //   image: "/images/project/rbas.png",
  //   date: "April 2026",
  //   tech: ["Next.js", "Tailwind CSS"],
  //   link: "https://rbas-topaz.vercel.app/",
  // },
  // {
  //   id: 6,
  //   role: "Frontend Developer",
  //   title: "SelunaTech",
  //   description:
  //     "A modern landing page for SelunaTech, showcasing their services and expertise in software development.",
  //   image: "/images/project/selunatech.png",
  //   date: "March 2026",
  //   tech: ["Next.js", "Tailwind CSS"],
  //   link: "https://selunatech-site.vercel.app",
  // },
  {
    id: 6,
    role: "Full Stack Developer",
    title: "CSL USE",
    description:
      "This project involves the redevelopment of the laboratory management system for the Collaborative STEM Laboratories at Universitas Prasetiya Mulya, introducing a modernized user interface and user experience (UI/UX). The upgraded system incorporates essential enhancements, including automated schedule conflict detection, equipment borrowing management, and centralized inventory tracking. Additionally, it integrates digital laboratory clearance workflows and a centralized information management hub to significantly streamline and improve overall laboratory operations.",
    detailPoints: [
      {
        title: "Summary",
        content:
          "A modernized laboratory management system for the Collaborative STEM Laboratories at Universitas Prasetiya Mulya, featuring automated schedule conflict detection, equipment borrowing management, and centralized inventory tracking.",
      },
      {
        title: "Origin",
        content: "Thesis project.",
      },
      {
        title: "Team",
        content: "Individual project.",
      },
      {
        title: "Impact",
        content:
          "Streamlined laboratory operations and improved user experience through a modernized interface and enhanced features, resulting in increased efficiency and reduced administrative overhead.",
      },
      {
        title: "Key Learning",
        content:
          "Gained experience in full-stack development, UI/UX design, and implementing automated workflows for laboratory management systems.",
      },
    ],
    image: "/images/project/csl.png",
    date: "January - June 2026",
    tech: [
      "Django",
      "React.js",
      "Tailwind CSS",
      "Docker",
      "Figma",
      "PostgreSQL",
    ],
    link: "https://csl-use.prasetiyamulya.ac.id/",
  },
  {
    id: 5,
    role: "Mobile Developer",
    title: "KDMP Mobile",
    description:
      "KDMP Mobile is a super application developed by the Ministry of Cooperatives of the Republic of Indonesia as part of an initiative to support digitalization and improve the operations of the Koperasi Desa Merah Putih (KDMP).",
    detailPoints: [
      {
        title: "Summary",
        content:
          "A super application developed by the Ministry of Cooperatives of the Republic of Indonesia to support digitalization and improve the operations of the Koperasi Desa Merah Putih (KDMP).",
      },
      {
        title: "Origin",
        content:
          "Work Assignment (Ministry of Cooperatives of the Republic of Indonesia)",
      },
      {
        title: "Team",
        content: "Group project. My role was the Mobile App Developer.",
      },
      {
        title: "Impact",
        content:
          "Successfully built and launched a scalable application that bridges the digital gap for rural cooperatives, enabling smoother management, better resource tracking, and data transparency for local communities.",
      },
      {
        title: "Key Learning",
        content:
          "Gained advanced experience in managing complex state architectures in Flutter, integrating multi-layered enterprise APIs, and designing accessible UIs for users with varying levels of tech literacy.",
      },
    ],
    image: "/images/project/kdmp.png",
    date: "June – August 2025",
    tech: ["Flutter"],
    link: "https://play.google.com/store/apps/details?id=id.kop.merahputih.kdmp_mobile_app",
  },
  {
    id: 4,
    role: "Mobile Developer",
    title: "Hydratrack",
    description:
      "A daily hydration tracker app using Flutter, which connects directly to an IoT smart bottle. The app tracks the users water intake in real-time by leveraging the MQTT protocol for instant and automatic data sync",
    detailPoints: [
      {
        title: "Summary",
        content:
          "A smart daily hydration tracker that connects seamlessly to an IoTenabled water bottle to log and sync user water intake automatically.",
      },
      {
        title: "Origin",
        content: "Class assignment.",
      },
      {
        title: "Team",
        content: "Group project. My role was the Mobile App Developer.",
      },
      {
        title: "Impact",
        content:
          "Engineered a completely automated tracking pipeline that eliminates manual entry fatigue, helping users consistently meet their health goals via proactive real-time data sync.",
      },
      {
        title: "Key Learning",
        content:
          "Mastered the integration of hardware and software by leveraging the MQTT protocol for lightweight, low-latency communication between an IoT device and a Flutter application.",
      },
    ],
    image: "/images/project/hydratrack.png",
    date: "February – March 2025",
    tech: ["Flutter", "MQTT"],
    link: "https://github.com/rhmdziz/hydratrack",
  },
  {
    id: 3,
    role: "Mobile Developer",
    title: "PadiCare",
    description:
      " PadiCare is an AI-powered mobile app to assist farmers in diagnosing rice plant diseases through image recognition. Farmers can take pictures of affected plants, which will be analyzed by machine learning models trained to identify common rice diseases and pest attacks",
    detailPoints: [
      {
        title: "Summary",
        content:
          "An AI-powered mobile application designed to assist Indonesian farmers in diagnosing rice plant diseases and pest attacks instantly through computer vision",
      },
      {
        title: "Origin",
        content: "Bangkit Academy 2024 Capstone project.",
      },
      {
        title: "Team",
        content: "Group project. My role was the Mobile App Developer.",
      },
      {
        title: "Impact",
        content:
          "Provided a practical, AI-driven diagnostic tool that empowers local farmers to take immediate action against crop diseases, directly mitigating agricultural yield loss.",
      },
      {
        title: "Key Learning",
        content:
          "Learned how to deploy and run optimized machine learning models on edge mobile devices, ensuring accurate, high-performance image recognition capabilities in remote areas.",
      },
    ],
    image: "/images/project/padicare.png",
    date: "September – December 2024",
    tech: ["Kotlin", "TensorFlow Lite", "Figma"],
    link: "https://github.com/PadiCareID",
  },
  {
    id: 2,
    role: "Mobile/Backend Developer",
    title: "PoBe (Pocket BSD)",
    description:
      "PoBe is a comprehensive city guide and localized mobile application for residents and visitors who want to explore BSD City through curated navigation, local news, and transit features such as Where to Go, News, and Transport.",
    detailPoints: [
      {
        title: "Summary",
        content:
          "A location-aware mobile product built to help users explore BSD City more easily through transportation, discovery, and local information features.",
      },
      {
        title: "Origin",
        content: "Class assignment.",
      },
      {
        title: "Team",
        content: "Group project. My role was the Full-Stack Developer.",
      },
      {
        title: "Impact",
        content:
          "Consolidated fragmented public transportation schedules and regional points of interest into a unified, user-friendly mobile hub, simplifying local navigation.",
      },
      {
        title: "Key Learning",
        content:
          "Built strong full-stack proficiency by developing a Flutter mobile front end alongside a Django backend, ensuring reliable data communication across the app.",
      },
    ],
    image: "/images/project/pobe.png",
    date: "May – July 2024",
    tech: ["Flutter", "Django REST Framework", "Google Maps API"],
    link: "https://github.com/rhmdziz/PoBe",
  },
  {
    id: 1,
    role: "Frontend Developer",
    title: "Agency Youtz Media",
    description:
      "A creative digital agency website built with responsive design and animation for Youtz Media.",
    image: "/images/project/agency.png",
    date: "January – March 2024",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://agency.youtzmedia.id/",
  },
];
