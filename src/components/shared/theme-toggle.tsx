'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Hydration mismatch-in qarşısını almaq üçün komponentin client-də mount olmasını gözləyirik
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#0B1120]" aria-hidden="true" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-[#0B1120] dark:hover:bg-[#151f38] text-slate-500 hover:text-[#0275d8] dark:text-slate-400 dark:hover:text-[#0275d8] transition-all border border-slate-200 dark:border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0275d8]"
      aria-label="Dark mode toggle"
    >
      {resolvedTheme === 'dark' ? (
        <Moon className="w-5 h-5 transition-transform hover:scale-110" strokeWidth={1.5} />
      ) : (
        <Sun className="w-5 h-5 transition-transform hover:scale-110" strokeWidth={1.5} />
      )}
    </button>
  );
};