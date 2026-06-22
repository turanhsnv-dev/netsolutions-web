'use client';

import { useRef } from 'react';
import { Target, CheckCircle2, Shield, Cpu } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Sol tərəfdəki mətnlərin scroll ilə fade-up olması
    gsap.from('.about-text-content > *', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Sağ tərəfdəki şəkil qutularının animasiyası
    gsap.from('.about-visual-box', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.2)',
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Sütun: Məzmun */}
          <div className="about-text-content flex flex-col items-start">
            <div className="flex items-center gap-1.5 text-[#0275d8] bg-[#F4F9FF] px-3 py-1 rounded-md text-[11px] font-bold tracking-widest uppercase mb-6">
              <Target className="w-3.5 h-3.5" />
              BİZ KİMİK
            </div>
            
            <h2 className="text-[36px] lg:text-[42px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
              Müasir Bizneslər Üçün <br className="hidden sm:block"/>
              <span className="text-[#0275d8]">Kompleks İT Tərəfdaşı</span>
            </h2>
            
            <p className="text-[16px] text-slate-500 leading-relaxed mb-6">
              NetSolutions – müxtəlif sahələrdə fəaliyyət göstərən şirkətlər üçün kompleks İT xidmətləri təqdim edən texnoloji tərəfdaşdır. Biz müştərilərimizin ehtiyaclarını analiz edərək onlara uyğun, təhlükəsiz və effektiv həllər təqdim edirik.
            </p>

            <p className="text-[16px] text-slate-500 leading-relaxed mb-8">
              Məqsədimiz – bizneslərin İT yükünü azaltmaq, təhlükəsizliyini artırmaq və onların fokusunu əsas fəaliyyətlərinə yönəltməkdir.
            </p>

            {/* Dəyərlərimiz Siyahısı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-slate-100 pt-8">
              {[
                'Təcrübəli Mütəxəssislər',
                'Şəbəkə İnfrastrukturu',
                'Sistem İnzibatçılığı',
                'Təhlükəsizlik və Avtomatlaşdırma'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0275d8]" />
                  <span className="text-[14px] font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Sütun: Vizual (Gələcəkdə bura real ofis/komanda şəkilləri əlavə edəcəyik) */}
          <div className="relative h-[500px] w-full hidden lg:block">
            
            {/* Böyük arxa şəkil qutusu */}
            <div className="about-visual-box absolute top-0 right-0 w-[85%] h-[400px] bg-slate-100 rounded-[32px] overflow-hidden border border-slate-200">
              {/* Bu div gələcəkdə <Image src="..." /> ilə əvəzlənəcək */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex flex-col items-center justify-center text-slate-400">
                 <Cpu className="w-16 h-16 mb-4 opacity-20" />
                 <span className="text-sm font-semibold opacity-50">Komanda / Ofis Şəkli (Placeholder)</span>
              </div>
            </div>

            {/* Ön tərəfə çıxan kiçik şəkil qutusu */}
            <div className="about-visual-box absolute bottom-0 left-0 w-[55%] h-[260px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden">
               {/* Bu div də həmçinin <Image src="..." /> olacaq */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0275d8] to-[#025aa5] flex flex-col items-center justify-center text-white p-6 text-center">
                  <Shield className="w-12 h-12 mb-3 opacity-80" />
                  <h4 className="font-bold text-lg">Etibarlı İnfrastruktur</h4>
                  <p className="text-xs text-white/80 mt-1">Sizin məlumatlarınız tam təhlükəsizlikdədir.</p>
               </div>
            </div>

            {/* Kiçik dekorativ detal */}
            <div className="about-visual-box absolute top-12 left-8 w-24 h-24 bg-dots-pattern opacity-40" />

          </div>
        </div>
      </div>
    </section>
  );
};