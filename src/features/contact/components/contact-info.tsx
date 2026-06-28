import { CONTACT_INFO } from '@/constants/navigation';
import { MapPin, Phone, Mail, type LucideIcon } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

type ContactItem = {
  icon: LucideIcon | typeof InstagramIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const ContactInfo = () => {
  const items: ContactItem[] = [
    { icon: Phone, label: 'Telefon', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}` },
    { icon: Mail, label: 'E-poçt', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    {
      icon: InstagramIcon,
      label: 'Sosial Şəbəkə',
      value: CONTACT_INFO.instagram,
      href: `https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`,
      external: true,
    },
  ];
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-card/80 dark:backdrop-blur-md rounded-[24px] p-8 md:p-10 border border-slate-100 dark:border-border/40 transition-colors shadow-sm dark:shadow-md">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Əlaqə Məlumatları</h3>
      
      <div className="flex flex-col gap-6 mb-10">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 dark:bg-[#0275d8]/10 text-[#0275d8] dark:text-[#3b82f6]">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1">{item.label}</p>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.external ? `${item.label} (opens in a new tab)` : undefined}
                className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-[#0275d8] dark:hover:text-[#3b82f6] transition-colors"
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto relative w-full h-55 bg-slate-200 dark:bg-[#050505] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-linear-to-br from-slate-100 to-slate-200 dark:from-[#050505] dark:to-[#0f172a] flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 transition-colors">
          <MapPin className="w-10 h-10 mb-2 opacity-50" />
          <span className="text-sm font-semibold">Xəritə (Google Maps)</span>
        </div>
      </div>
    </div>
  );
};