import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import mycvPDF from "./mycv.pdf";

const CVDownload = () => {
  return (
    <div className="cv-pdf">
      <Document file={mycvPDF} onLoadSuccess={onDocumentLoadSuccess}></Document>
    </div>
  );
};

export default CVDownload;
