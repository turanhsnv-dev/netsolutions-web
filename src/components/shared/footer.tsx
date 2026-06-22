import Link from 'next/link';
import { NAV_LINKS, FOOTER_SERVICES, CONTACT_INFO } from '@/constants/navigation';
import { Logo } from './logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F9FA] dark:bg-[#050505] border-t border-slate-100 dark:border-slate-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Logo variant="full" height={80} className="mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed max-w-sm mb-6 transition-colors">
              Biz bizneslər üçün etibarlı, təhlükəsiz və müasir İT həlləri təqdim edərək texnoloji inkişafı sürətləndiririk.
            </p>
            <div className="text-slate-600 dark:text-slate-300 font-medium text-[15px] transition-colors">
              <p>
                Email:{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#0275d8] dark:hover:text-[#3b82f6] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="mt-1">
                Tel:{' '}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#0275d8] dark:hover:text-[#3b82f6] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] dark:text-white mb-5 uppercase text-[13px] tracking-wider transition-colors">
              Şirkət
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-[#0275d8] dark:hover:text-[#3b82f6] text-[15px] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] dark:text-white mb-5 uppercase text-[13px] tracking-wider transition-colors">
              Əsas Xidmətlər
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-[#0275d8] dark:hover:text-[#3b82f6] text-[15px] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
          <p className="text-slate-400 dark:text-slate-500 text-[14px] transition-colors">
            &copy; {currentYear} NetSolutions.az. Bütün hüquqlar qorunur.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[14px]">
            <Link
              href="/privacy"
              className="text-slate-400 dark:text-slate-500 hover:text-[#0275d8] dark:hover:text-[#3b82f6] font-medium transition-colors"
            >
              Məxfilik Siyasəti
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 dark:text-slate-500 hover:text-[#0275d8] dark:hover:text-[#3b82f6] font-medium transition-colors"
            >
              İstifadə Şərtləri
            </Link>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <a
              href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-[#0275d8] dark:hover:text-[#3b82f6] font-medium transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
