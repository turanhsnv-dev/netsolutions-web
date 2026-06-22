'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck, Activity, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroVisual } from './hero-visual';

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
      .from('.hero-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
      .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-features', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4');
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full overflow-hidden bg-white dark:bg-[#050505] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 transition-colors duration-300">
      
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[500px] bg-[#0275d8]/[0.03] dark:bg-[#0275d8]/[0.08] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start lg:col-span-7">
            
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/50 dark:bg-[#0275d8]/10 border border-blue-100/50 dark:border-[#0275d8]/20 text-[#0275d8] text-xs font-semibold tracking-wide uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0275d8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0275d8]"></span>
              </span>
              Sizin Texnoloji Tərəfdaşınız
            </div>

            <h1 className="hero-title text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold text-[#111111] dark:text-white leading-[1.1] tracking-tight mb-6 transition-colors">
              Biznesinizin <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0275d8] to-[#025aa5] dark:from-[#3b82f6] dark:to-[#0275d8]">
                Texnoloji Gücünü
              </span> <br className="hidden sm:block" />
              Kəşf Edin
            </h1>

            <p className="hero-desc text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-[90%] transition-colors">
              Biz bizneslər üçün etibarlı, təhlükəsiz və müasir İT həlləri təqdim edirik. Məqsədimiz şirkətlərin texnoloji inkişafını sürətləndirmək və əməliyyatlarını optimallaşdırmaqdır.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0275d8] hover:bg-[#025aa5] text-white px-8 h-[52px] rounded-full font-semibold transition-all shadow-[0_8px_20px_rgba(2,117,216,0.25)] dark:shadow-[0_8px_20px_rgba(2,117,216,0.15)] hover:shadow-[0_12px_25px_rgba(2,117,216,0.35)]"
              >
                Bizimlə əlaqə saxla
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-[#151f38] text-slate-700 dark:text-slate-300 px-8 h-[52px] rounded-full font-semibold transition-all"
              >
                Xidmətlərimizə bax
                <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500" />
              </Link>
            </div>

            <div className="hero-features mt-12 flex items-center gap-8 border-t border-slate-100 dark:border-slate-800/50 pt-8 w-full transition-colors">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#0275d8] dark:text-[#3b82f6]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Etibarlı<br/><span className="text-slate-400 dark:text-slate-500 font-normal">Həllər</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-[#0275d8] dark:text-[#3b82f6]" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sürətli<br/><span className="text-slate-400 dark:text-slate-500 font-normal">Dəstək</span></span>
              </div>
            </div>

          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-end">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};