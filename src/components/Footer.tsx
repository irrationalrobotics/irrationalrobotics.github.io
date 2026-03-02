'use client';

import { Instagram, Mail, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-12 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-6">
          <a
            href="mailto:irrationalvexrobotics@gmail.com"
            aria-label="Email"
            className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/irrationalrobotics"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com/@irrationalrobotics"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
