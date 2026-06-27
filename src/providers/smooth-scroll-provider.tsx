'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { gsap } from 'gsap';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    // GSAP ScrollTrigger ilə Lenis-i tam sinxronizasiya edirik
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false} 
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};