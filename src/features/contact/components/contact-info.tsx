import { CONTACT_INFO } from '@/constants/navigation';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const ContactInfo = () => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] rounded-[24px] p-8 md:p-10 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Əlaqə Məlumatları</h3>
      
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-[#0275d8]">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400 mb-1">Telefon</p>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-slate-800 hover:text-[#0275d8] transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-[#0275d8]">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400 mb-1">E-poçt</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-slate-800 hover:text-[#0275d8] transition-colors">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-[#0275d8]">
            <InstagramIcon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400 mb-1">Sosial Şəbəkə</p>
            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-lg font-bold text-slate-800 hover:text-[#0275d8] transition-colors">
              {CONTACT_INFO.instagram}
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps Placeholder */}
      <div className="mt-auto relative w-full h-[220px] bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400">
          <MapPin className="w-10 h-10 mb-2 opacity-50" />
          <span className="text-sm font-semibold">Xəritə (Google Maps) Yeri</span>
        </div>
      </div>
    </div>
  );
};