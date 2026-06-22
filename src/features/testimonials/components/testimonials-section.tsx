'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TESTIMONIALS_DISPLAY_DATA } from '@/constants/testimonials';
import { TestimonialCard } from './testimonial-card';
import { MessageSquareQuote } from 'lucide-react';
import { ITestimonial } from '@/types/testimonial';

gsap.registerPlugin(ScrollTrigger);

function distributeToColumns(items: ITestimonial[], columnCount: number): ITestimonial[][] {
  const columns: ITestimonial[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
}

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const masonryRef = useRef<HTMLDivElement>(null);

  const testimonials = TESTIMONIALS_DISPLAY_DATA;
  const columnsLg = distributeToColumns(testimonials, 3);
  const columnsMd = distributeToColumns(testimonials, 2);

  useGSAP(() => {
    const section = sectionRef.current;
    const masonry = masonryRef.current;
    if (!section || !masonry) return;

    const headerEls = gsap.utils.toArray<HTMLElement>('.testimonials-header-anim', section);
    const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card', masonry);

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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
        },
        '-=0.2'
      );
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, { scope: sectionRef });

  const ColumnStack = ({ items }: { items: ITestimonial[] }) => (
    <div className="flex flex-col gap-5 sm:gap-6">
      {items.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-[#FAFAFA] dark:bg-[#050505] py-20 md:py-24 border-t border-slate-100 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0275d8]/[0.02] dark:bg-[#0275d8]/[0.05] blur-[120px] rounded-full pointer-events-none transition-colors duration-300"
        aria-hidden="true"
      />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center mb-14 md:mb-16">
          <div className="testimonials-header-anim flex items-center gap-1.5 text-[#0275d8] dark:text-[#3b82f6] bg-[#F4F9FF] dark:bg-[#0275d8]/10 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-5 transition-colors">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            RƏYLƏR
          </div>
          <h2 className="testimonials-header-anim text-[36px] md:text-[44px] font-bold text-[#111111] dark:text-white tracking-tight mb-4 leading-tight transition-colors">
            Müştərilərimiz Nə Deyir?
          </h2>
          <p className="testimonials-header-anim text-[#6B7280] dark:text-slate-400 text-[15px] max-w-[560px] leading-relaxed transition-colors">
            Xidmət göstərdiyimiz və rəqəmsal infrastrukturlarını gücləndirdiyimiz tərəfdaşlarımızın təcrübələri.
          </p>
        </header>

        <div ref={masonryRef}>
          {/* Mobil — tək sütun */}
          <div className="flex flex-col gap-5 sm:gap-6 md:hidden">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Tablet — 2 sütun Pinterest */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 sm:gap-6 items-start">
            {columnsMd.map((column, index) => (
              <ColumnStack key={index} items={column} />
            ))}
          </div>

          {/* Desktop — 3 sütun Pinterest */}
          <div className="hidden lg:grid grid-cols-3 gap-5 sm:gap-6 items-start">
            {columnsLg.map((column, index) => (
              <div
                key={index}
                className={index === 1 ? 'lg:translate-y-10' : index === 2 ? 'lg:translate-y-5' : undefined}
              >
                <ColumnStack items={column} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
