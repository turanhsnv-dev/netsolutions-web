'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Target, CheckCircle2, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.about-text-content > *', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.about-visual-box',
      { scale: 0.9, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.2)',
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-white dark:bg-[#050505] py-24 lg:py-32 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Sütun: Məzmun */}
          <div className="about-text-content flex flex-col items-start">
            <div className="flex items-center gap-1.5 text-[#0275d8] dark:text-[#3b82f6] bg-[#F4F9FF] dark:bg-[#0275d8]/10 px-3 py-1 rounded-md text-[11px] font-bold tracking-widest uppercase mb-6 transition-colors">
              <Target className="w-3.5 h-3.5" />
              BİZ KİMİK
            </div>
            
            <h2 className="text-[36px] lg:text-[42px] font-bold text-[#111111] dark:text-white leading-[1.15] tracking-tight mb-6 transition-colors">
              Müasir Bizneslər Üçün <br className="hidden sm:block"/>
              <span className="text-[#0275d8] dark:text-[#3b82f6]">Kompleks İT Tərəfdaşı</span>
            </h2>
            
            <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
              NetSolutions – müxtəlif sahələrdə fəaliyyət göstərən şirkətlər üçün kompleks İT xidmətləri təqdim edən texnoloji tərəfdaşdır. Biz müştərilərimizin ehtiyaclarını analiz edərək onlara uyğun, təhlükəsiz və effektiv həllər təqdim edirik.
            </p>

            <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-8 transition-colors">
              Məqsədimiz – bizneslərin İT yükünü azaltmaq, təhlükəsizliyini artırmaq və onların fokusunu əsas fəaliyyətlərinə yönəltməkdir.
            </p>

            {/* Dəyərlərimiz Siyahısı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-slate-100 dark:border-slate-800/50 pt-8 transition-colors">
              {[
                'Təcrübəli Mütəxəssislər',
                'Şəbəkə İnfrastrukturu',
                'Sistem İnzibatçılığı',
                'Təhlükəsizlik və Avtomatlaşdırma'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0275d8] dark:text-[#3b82f6]" />
                  <span className="text-[14px] font-semibold text-slate-700 dark:text-slate-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Sütun: Vizual (Qutular) */}
          <div className="relative h-[500px] w-full hidden lg:block">
            
            {/* Böyük arxa şəkil */}
            <div className="about-visual-box absolute top-0 right-0 w-[85%] h-[400px] rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 transition-colors duration-300">
              <Image
                src="/images/about-img.jpg"
                alt="NetSolutions komandası ofisdə İT sistemləri üzərində işləyir"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 85vw, 470px"
                priority
              />
              <div
                className="absolute inset-0 hidden dark:block bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Ön tərəfə çıxan kiçik şəkil qutusu */}
            <div className="about-visual-box absolute bottom-0 left-0 w-[55%] h-[260px] bg-white dark:bg-[#050505] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white dark:border-[#0B1120] overflow-hidden transition-colors duration-300">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0275d8] to-[#025aa5] dark:from-[#025aa5] dark:to-[#0f172a] flex flex-col items-center justify-center text-white p-6 text-center transition-colors duration-300">
                  <Shield className="w-12 h-12 mb-3 opacity-80" />
                  <h4 className="font-bold text-lg">Etibarlı İnfrastruktur</h4>
                  <p className="text-xs text-white/80 mt-1">Sizin məlumatlarınız tam təhlükəsizlikdədir.</p>
               </div>
            </div>

            {/* Kiçik dekorativ detal */}
            <div className="about-visual-box absolute top-12 left-8 w-24 h-24 bg-dots-pattern opacity-40 dark:opacity-20 transition-opacity duration-300" />

          </div>
        </div>
      </div>
    </section>
  );
};