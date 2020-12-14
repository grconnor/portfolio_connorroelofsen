import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import mycvPDF from './mycv.pdf';

export default function CVDownload() {
  return (
    <>
    <div>
      <Document
        file="mycv.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      <Document file={mycvPDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

const CVDownload = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="somefile.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default CVDownload;
