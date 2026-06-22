import Link from 'next/link';
import { NAV_LINKS, FOOTER_SERVICES, CONTACT_INFO } from '@/constants/navigation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F9FA] border-t border-slate-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-[#111111]">
                Net<span className="text-[#0275d8]">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm mb-6">
              Biz bizneslər üçün etibarlı, təhlükəsiz və müasir İT həlləri təqdim edərək texnoloji inkişafı sürətləndiririk.
            </p>
            <div className="text-slate-600 font-medium text-[15px]">
              <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#0275d8] transition-colors">{CONTACT_INFO.email}</a></p>
              <p className="mt-1">Tel: <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#0275d8] transition-colors">{CONTACT_INFO.phone}</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#111111] mb-5 uppercase text-[13px] tracking-wider">Şirkət</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-500 hover:text-[#0275d8] text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-[#111111] mb-5 uppercase text-[13px] tracking-wider">Əsas Xidmətlər</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-500 hover:text-[#0275d8] text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-[14px]">
            &copy; {currentYear} NetSolutions.az. Bütün hüquqlar qorunur.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[14px]">
            <Link href="/privacy" className="text-slate-400 hover:text-[#0275d8] font-medium transition-colors">
              Məxfilik Siyasəti
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-[#0275d8] font-medium transition-colors">
              İstifadə Şərtləri
            </Link>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></span>
            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0275d8] font-medium transition-colors">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};