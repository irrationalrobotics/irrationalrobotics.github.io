'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function NotebookPage() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AXIOM Notebook</h1>
          <p className="text-muted-foreground">
            View the engineering notebook for the AXIOM team
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="border rounded-lg overflow-hidden w-full bg-white">
            <Document
              file="/AXIOMNOTEBOOK.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="w-full h-96 flex items-center justify-center">
                  <p>Loading PDF...</p>
                </div>
              }
              error={
                <div className="w-full h-96 flex items-center justify-center text-red-500">
                  <p>Failed to load PDF</p>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={true}
                renderTextLayer={true}
              />
            </Document>
          </div>

          {numPages && (
            <div className="flex items-center gap-4 w-full justify-between">
              <button
                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="text-center">
                <p className="font-semibold">
                  Page {pageNumber} of {numPages}
                </p>
                <input
                  type="number"
                  min="1"
                  max={numPages}
                  value={pageNumber}
                  onChange={(e) => setPageNumber(Math.min(numPages, parseInt(e.target.value) || 1))}
                  className="mt-2 px-2 py-1 border rounded w-16 text-center"
                />
              </div>

              <button
                onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}

          <a
            href="/AXIOMNOTEBOOK.pdf"
            download
            className="mt-4 px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
