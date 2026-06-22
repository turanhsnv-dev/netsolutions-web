import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, CONTACT_INFO } from '@/constants/navigation';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1100px] mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0275d8] rounded-md">
          <span className="text-2xl font-bold tracking-tight text-[#111111]">
            Net<span className="text-[#0275d8]">Solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-slate-600 hover:text-[#0275d8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0275d8] rounded-sm px-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            asChild 
            className="hidden md:inline-flex bg-[#0275d8] hover:bg-[#025aa5] text-white rounded-full px-7 h-11 font-semibold transition-all"
          >
            <Link href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}>
              Bizimlə əlaqə
            </Link>
          </Button>
          
          <button 
            type="button" 
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-[#0275d8] transition-colors"
            aria-label="Menyunu aç"
          >
            <Menu className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>

      </div>
    </header>
  );
};