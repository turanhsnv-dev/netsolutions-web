'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set('.contact-left-anim', { x: -50, opacity: 0 });
    gsap.set('.contact-right-anim', { x: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top 80%', once: true }
    });

    tl.to('.contact-left-anim', { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'all' }, 0);
    tl.to('.contact-right-anim', { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'all' }, 0.2);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="contact" className="w-full bg-white dark:bg-[#050505] py-24 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-275 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="contact-left-anim w-full">
            <ContactForm />
          </div>
          <div className="contact-right-anim w-full h-full">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};