import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import mycvPDF from "./mycv.pdf";

const CVDownload = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="cv-pdf">
      <Document file={mycvPDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default CVDownload;
