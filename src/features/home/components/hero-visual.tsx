'use client';

import { useRef } from 'react';
import { ShieldCheck, Headset, Users, Clock, Activity, Wifi } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const STATS = [
  { icon: Activity, label: 'Uptime', value: '99.9%', accent: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { icon: Users, label: 'Müştərilər', value: '150+', accent: 'text-[#0275d8] dark:text-[#3b82f6]', bg: 'bg-blue-50 dark:bg-[#0275d8]/10' },
  { icon: Clock, label: 'Cavab vaxtı', value: '<15 dəq', accent: 'text-[#0275d8] dark:text-[#3b82f6]', bg: 'bg-blue-50 dark:bg-[#0275d8]/10' },
  { icon: Wifi, label: 'Şəbəkə', value: 'Stabil', accent: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
];

const CHART_POINTS = [28, 42, 35, 58, 45, 72, 55, 68, 48, 82, 60, 75];

export const HeroVisual = () => {
  const visualRef = useRef<HTMLDivElement>(null);

  const chartPath = CHART_POINTS
    .map((y, i) => {
      const x = (i / (CHART_POINTS.length - 1)) * 280;
      const normalizedY = 90 - y;
      return `${i === 0 ? 'M' : 'L'}${x},${normalizedY}`;
    })
    .join(' ');

  useGSAP(() => {
    gsap.from('.visual-main', { scale: 0.9, opacity: 0, duration: 1, ease: 'back.out(1.2)', delay: 0.5 });
    gsap.from('.floating-badge-top', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 1 });
    gsap.from('.floating-badge-bottom', { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 1.2 });

    const path: SVGPathElement | null = document.querySelector('.chart-line');
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut', delay: 1.5 });
    }
  }, { scope: visualRef });

  return (
    <div ref={visualRef} className="relative w-full max-w-[400px] ml-auto" aria-hidden="true">
      <div className="absolute -top-8 -right-6 w-56 h-56 bg-[#0275d8]/10 dark:bg-[#0275d8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0275d8]/5 dark:bg-[#0275d8]/10 rounded-full blur-2xl" />

      {/* Floating badge — security */}
      <div className="floating-badge-top absolute -top-3 right-2 z-20 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-[#0B1120] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-colors">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Təhlükəsizlik</p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Tam qorunma aktiv</p>
        </div>
      </div>

      {/* Main panel */}
      <div className="visual-main relative z-10 mt-8 rounded-[28px] border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0B1120] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.07)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0275d8] dark:text-[#3b82f6] mb-1">
              Monitorinqi
            </p>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">İT infrastruktur</h3>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Canlı</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#0f172a]/50 p-3.5 transition-colors">
              <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${stat.bg} mb-2.5`}>
                <stat.icon className={`w-4 h-4 ${stat.accent}`} strokeWidth={2} />
              </div>
              <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-0.5">{stat.label}</p>
              <p className={`text-lg font-bold ${stat.accent}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-gradient-to-b from-slate-50 to-white dark:from-[#0f172a]/80 dark:to-[#0B1120] p-4 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Şəbəkə aktivliyi</p>
            <p className="text-xs font-bold text-[#0275d8] dark:text-[#3b82f6]">+18% bu həftə</p>
          </div>
          <svg viewBox="0 0 280 90" className="w-full h-[72px]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0275d8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0275d8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${chartPath} L280,90 L0,90 Z`} fill="url(#heroChartFill)" />
            <path
              className="chart-line"
              d={chartPath}
              fill="none"
              stroke="#0275d8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Floating badge — helpdesk */}
      <div className="floating-badge-bottom absolute -bottom-4 -left-4 z-20 flex items-center gap-2.5 px-4 py-3 bg-white dark:bg-[#0B1120] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-colors">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0275d8]">
          <Headset className="w-4 h-4 text-white" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Helpdesk</p>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">24/7 texniki dəstək</p>
        </div>
      </div>
    </div>
  );
};