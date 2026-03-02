'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-4 w-4 rounded-full bg-black/5 dark:bg-white/5" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center transition-opacity hover:opacity-100 opacity-40"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-3 w-3 text-white transition-all" />
      ) : (
        <Moon className="h-3 w-3 text-black transition-all" />
      )}
    </button>
  );
}
