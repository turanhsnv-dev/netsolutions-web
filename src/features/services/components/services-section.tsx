'use client'; // GSAP üçün komponenti Client Component edirik

import { useRef } from 'react';
import { SERVICES_DATA } from '@/constants/services';
import { ServiceCard } from './service-card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Plaginləri qeydiyyatdan keçiririk
gsap.registerPlugin(ScrollTrigger);

const BadgeIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 transition-colors duration-300" aria-hidden="true">
    <rect x="1" y="1" width="5" height="5" rx="1" className="stroke-[#0275d8] dark:stroke-[#3b82f6]" strokeWidth="1.25" />
    <rect x="8" y="1" width="5" height="5" rx="1" className="stroke-[#0275d8] dark:stroke-[#3b82f6]" strokeWidth="1.25" />
    <rect x="1" y="8" width="5" height="5" rx="1" className="stroke-[#0275d8] dark:stroke-[#3b82f6]" strokeWidth="1.25" />
    <rect x="8" y="8" width="5" height="5" rx="1" className="stroke-[#0275d8] dark:stroke-[#3b82f6]" strokeWidth="1.25" />
  </svg>
);

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const headerEls = gsap.utils.toArray<HTMLElement>('.services-header-anim', section);
    const cards = Array.from(grid.children) as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        once: true,
        invalidateOnRefresh: true,
      },
    });

    if (headerEls.length) {
      tl.from(headerEls, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        immediateRender: false,
      });
    }

    if (cards.length) {
      tl.from(
        cards,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: 'start',
          },
          ease: 'power3.out',
          immediateRender: false,
        },
        '-=0.2',
      );
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="services" className="w-full bg-white dark:bg-[#050505] py-20 md:py-24 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlıq Hissəsi */}
        <header className="flex flex-col items-center text-center mb-14 md:mb-16">
          <div className="services-header-anim flex items-center gap-1.5 text-[#0275d8] dark:text-[#3b82f6] bg-[#F4F9FF] dark:bg-[#0275d8]/10 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-5 transition-colors">
            <BadgeIcon />
            XİDMƏTLƏRİMİZ
          </div>
          <h2 className="services-header-anim text-[36px] md:text-[44px] font-bold text-[#111111] dark:text-white tracking-tight mb-4 leading-tight transition-colors">
            Kompleks İT Həllər Baza
          </h2>
          <p className="services-header-anim text-[#6B7280] dark:text-slate-400 text-[15px] max-w-[560px] leading-relaxed transition-colors">
            Biznesinizin hər bir ehtiyacını qarşılayacaq geniş çeşiddə texnoloji xidmətlər portfeli.
          </p>
        </header>

        {/* Xidmətlər Qutusu */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[minmax(168px,auto)]"
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};