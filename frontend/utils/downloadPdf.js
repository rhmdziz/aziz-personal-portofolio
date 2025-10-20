export async function downloadPDF(targetRef, slug) {
  if (!targetRef?.current) return;

  const mod = await import("html2pdf.js");
  const html2pdfLib = mod.default || mod.html2pdf || mod;

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
    .pdf-export img,
    .pdf-export .ant-image,
    .pdf-export .ant-image-img {
      background-color: transparent !important;
    }
    .pdf-export .experience-images {
      display: none !important;
    }
    .pdf-export .anticon,
    .pdf-export [role="img"] {
      display: none !important;
    }
    .pdf-export section {
      page-break-inside: avoid;
    }
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
      ignoreElements: (el) =>
        el.classList.contains("ant-image-preview") ||
        el.classList.contains("ant-modal") ||
        el.classList.contains("anticon"),
      onclone: (clonedDoc) => {
        clonedDoc
          .querySelectorAll(".anticon, [role='img']")
          .forEach((icon) => icon.remove());
      },
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  try {
    await html2pdfLib().from(targetRef.current).set(options).save();
  } catch (err) {
    console.error("PDF generation failed:", err);
  } finally {
    targetRef.current.classList.remove("pdf-export");
    const styleEl = document.getElementById("pdf-export-style");
    if (styleEl) document.head.removeChild(styleEl);
  }
}
