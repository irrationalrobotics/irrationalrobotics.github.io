'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'AXIOM', path: '/axiom' },
  { name: 'THEOREM', path: '/theorem' },
  { name: 'V5', path: '/vex' },
  { name: 'DONATE', path: '/donate' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto">
        <div className="hidden sm:inline-flex items-center gap-6 px-7 py-3 bg-white/75 dark:bg-black/75 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full shadow-lg transition-all duration-300">
          <Link href="/" className="text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">
            IRRATIONAL ROBOTICS
          </Link>

          <div className="h-4 w-px bg-black/10 dark:bg-white/10 shrink-0" />

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[9px] font-medium uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                  pathname === item.path 
                    ? 'text-black dark:text-white' 
                    : 'text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-black/10 dark:bg-white/10 shrink-0" />

          <ThemeToggle />
        </div>

        <div className="sm:hidden w-[min(92vw,24rem)]">
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white/75 dark:bg-black/75 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full shadow-lg">
            <Link href="/" className="text-[9px] font-bold tracking-[0.25em] uppercase whitespace-nowrap text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors">
              IRRATIONAL ROBOTICS
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {mobileOpen && (
            <div
              id="mobile-nav-menu"
              className="mt-3 p-4 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                      pathname === item.path
                        ? 'text-black dark:text-white'
                        : 'text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="my-3 h-px w-full bg-black/10 dark:bg-white/10" />
              <div className="flex items-center justify-end">
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
