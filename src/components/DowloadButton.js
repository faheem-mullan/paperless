import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadButton = () => {
  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button onClick={handleDownload} id="download-btn">
      Download Resume (PDF)
    </button>
  );
};

export default DownloadButton;
