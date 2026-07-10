'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, CONTACT_INFO } from '@/constants/navigation';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 dark:border-slate-800/50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-275 mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Logo variant="mark" height={52} priority={true} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-slate-600 dark:text-slate-300 hover:text-[#0275d8] dark:hover:text-[#0275d8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0275d8] rounded-sm px-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle, CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <Button 
            asChild 
            className="hidden md:inline-flex bg-[#0275d8] hover:bg-[#025aa5] text-white rounded-full px-7 h-11 font-semibold transition-all shadow-[0_4px_14px_rgba(2,117,216,0.25)] dark:shadow-[0_4px_14px_rgba(2,117,216,0.15)]"
          >
            <Link href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}>
              Bizimlə əlaqə
            </Link>
          </Button>
          
          <button 
            type="button" 
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 -mr-2 text-slate-600 dark:text-slate-300 hover:text-[#0275d8] transition-colors"
            aria-label="Menyunu aç"
          >
            <Menu className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-dvh w-[85vw] sm:w-[360px] bg-white dark:bg-[#050505] shadow-2xl z-50 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.3,0.0,0.0,1.0)] md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-slate-100 dark:border-slate-800/50">
          <Logo variant="mark" height={40} />
          <button 
            type="button" 
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
              setIsOpen(false);
            }}
            className="p-2 -mr-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Menyunu bağla"
          >
            <X className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
                setIsOpen(false);
              }}
              className="flex items-center justify-between group py-4 px-2 rounded-xl hover:bg-[#F4F9FF] dark:hover:bg-[#0275d8]/10 transition-colors"
            >
              <span className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#0275d8] dark:group-hover:text-[#3b82f6]">
                {link.label}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-700 group-hover:text-[#0275d8] dark:group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800/50">
          <Button 
            asChild 
            className="w-full bg-[#0275d8] hover:bg-[#025aa5] text-white rounded-full h-14 text-lg font-semibold transition-all shadow-[0_8px_20px_rgba(2,117,216,0.25)]"
          >
            <Link href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} onClick={() => setIsOpen(false)}>
              Bizimlə əlaqə
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};