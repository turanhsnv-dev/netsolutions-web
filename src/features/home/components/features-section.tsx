'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FEATURES_DATA } from '@/constants/features';
import { FeatureCard } from './feature-card';

gsap.registerPlugin(ScrollTrigger);

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const headerEls = gsap.utils.toArray<HTMLElement>('.features-header-anim', section);
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
      tl.fromTo(
        headerEls,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }

    if (cards.length) {
      tl.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: 'start',
          },
          ease: 'power3.out',
        },
        '-=0.2'
      );
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAFAFA] dark:bg-[#050505] py-20 lg:py-28 border-y border-slate-100 dark:border-slate-800/50 overflow-hidden z-20 transition-colors duration-300"
    >
      {/* Arxa plandakı mavi işıq effekti (Dark modda bir az daha tünd) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0275d8]/[0.04] dark:bg-[#0275d8]/[0.08] blur-[100px] rounded-full pointer-events-none transition-colors duration-300"
        aria-hidden="true"
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center mb-14 md:mb-16">
          <div className="features-header-anim flex items-center gap-1.5 text-[#0275d8] dark:text-[#3b82f6] bg-[#F4F9FF] dark:bg-[#0275d8]/10 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-5 transition-colors duration-300">
            ÜSTÜNLÜKLƏRİMİZ
          </div>
          <h2 className="features-header-anim text-[36px] md:text-[44px] font-bold text-[#111111] dark:text-white tracking-tight mb-4 leading-tight transition-colors duration-300">
            Niyə Bizi Seçməlisiniz?
          </h2>
          <p className="features-header-anim text-[#6B7280] dark:text-slate-400 text-[15px] max-w-[560px] leading-relaxed transition-colors duration-300">
            Biznesinizin rəqəmsal inkişafı üçün ən müasir, təhlükəsiz və etibarlı İT həllərini təqdim edirik.
          </p>
        </header>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};