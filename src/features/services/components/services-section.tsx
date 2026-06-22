'use client'; // GSAP üçün komponenti Client Component edirik

import { useRef } from 'react';
import { SERVICES_DATA } from '@/constants/services';
import { ServiceCard } from './service-card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Plaginləri qeydiyyatdan keçiririk
gsap.registerPlugin(useGSAP, ScrollTrigger);

const BadgeIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
    <rect x="1" y="1" width="5" height="5" rx="1" stroke="#0275d8" strokeWidth="1.25" />
    <rect x="8" y="1" width="5" height="5" rx="1" stroke="#0275d8" strokeWidth="1.25" />
    <rect x="1" y="8" width="5" height="5" rx="1" stroke="#0275d8" strokeWidth="1.25" />
    <rect x="8" y="8" width="5" height="5" rx="1" stroke="#0275d8" strokeWidth="1.25" />
  </svg>
);

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // ScrollTrigger ilə taymlayn yaradırıq
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%', // Section ekranın 80%-nə çatanda animasiya başlayır
      }
    });

    // 1. Başlıqların (Header) animasiyası
    tl.from('.services-header-anim', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // 2. Bento Kartlarının (article) ardıcıl gəlməsi
    // Qeyd: Grid strukturunu pozmamaq üçün birbaşa 'article' teqlərini hədəfləyirik
    tl.from('article', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1, // Hər kartın arasında 0.1 saniyə fərq olacaq
      ease: 'back.out(1.1)',
    }, '-=0.2');

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="services" className="w-full bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Başlıq Hissəsi */}
        <header className="flex flex-col items-center text-center mb-14 md:mb-16">
          <div className="services-header-anim flex items-center gap-1.5 text-[#0275d8] bg-[#F4F9FF] px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            <BadgeIcon />
            XİDMƏTLƏRİMİZ
          </div>
          <h2 className="services-header-anim text-[36px] md:text-[44px] font-bold text-[#111111] tracking-tight mb-4 leading-tight">
            Kompleks İT Həllər Baza
          </h2>
          <p className="services-header-anim text-[#6B7280] text-[15px] max-w-[560px] leading-relaxed">
            Biznesinizin hər bir ehtiyacını qarşılayacaq geniş çeşiddə texnoloji xidmətlər portfeli.
          </p>
        </header>

        {/* Xidmətlər Qutusu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[minmax(168px,auto)]">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};