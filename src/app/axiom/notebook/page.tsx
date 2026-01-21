'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./pdf-viewer'), { ssr: false });

export default function NotebookPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">AXIOM Notebook</h1>
            <p className="text-muted-foreground">
              View the engineering notebook for the AXIOM team
            </p>
          </div>
          <div className="w-full h-96 flex items-center justify-center border rounded-lg">
            <p>Loading PDF...</p>
          </div>
        </div>
      </div>
    );
  }

  return <PDFViewer />;
}
