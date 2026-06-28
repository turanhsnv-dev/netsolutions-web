'use client';

import { useRef } from 'react';
import { Terminal } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export const HeroVisual = () => {
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ scope: visualRef, delay: 0.5 });

    // Window entrance
    tl.from('.terminal-window', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
    
    // Command 1 typing
    tl.to('.cursor-1', { opacity: 0, duration: 0.1 })
      .to('.cmd-1', { text: 'ping -c 4 netsolutions.az', duration: 1.2, ease: 'none' })
      .to('.cursor-1', { opacity: 1, duration: 0.1 })
      .to('.cursor-1', { opacity: 0, duration: 0.1, delay: 0.2 });

    // Output 1
    tl.to('.out-1', { opacity: 1, duration: 0.1, stagger: 0.1 });

    // Command 2 typing
    tl.to('.cursor-2', { opacity: 1, duration: 0.1 })
      .to('.cmd-2', { text: 'systemctl status helpdesk', duration: 1.2, ease: 'none' })
      .to('.cursor-2', { opacity: 0, duration: 0.1, delay: 0.2 });

    // Output 2
    tl.to('.out-2', { opacity: 1, duration: 0.1, stagger: 0.1 });

    // Final blinking cursor
    tl.to('.cursor-3', { opacity: 1, duration: 0.1 })
      .to('.cursor-3', { opacity: 0, duration: 0.5, repeat: -1, yoyo: true });

  }, { scope: visualRef });

  return (
    <div ref={visualRef} className="relative w-full max-w-115  ml-auto" aria-hidden="true">
      {/* Background glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0275d8]/10 dark:bg-[#0275d8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl" />

      {/* Terminal Window */}
      <div className="terminal-window relative z-10 w-full rounded-xl bg-white dark:bg-card/80 dark:backdrop-blur-md border border-slate-200 dark:border-border/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-md overflow-hidden font-mono text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
        {/* Header */}
        <div className="flex items-center px-4 py-3 bg-slate-50 dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-slate-500 text-[11px] flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            root@netsolutions-server
          </div>
        </div>
        
        {/* Body */}
        <div className="p-5 space-y-1.5 min-h-75">
          {/* Command 1 */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">➜</span>
            <span className="text-blue-600 dark:text-blue-400">~</span>
            <span className="cmd-1"></span>
            <span className="cursor-1 w-2 h-4 bg-slate-500 dark:bg-slate-400 inline-block"></span>
          </div>
          
          {/* Output 1 */}
          <div className="out-1 opacity-0 text-slate-500 dark:text-slate-400">PING netsolutions.az (192.168.1.1): 56 data bytes</div>
          <div className="out-1 opacity-0 text-slate-500 dark:text-slate-400">64 bytes from 192.168.1.1: icmp_seq=0 ttl=64 time=0.042 ms</div>
          <div className="out-1 opacity-0 text-slate-500 dark:text-slate-400">64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.038 ms</div>
          <div className="out-1 opacity-0 text-emerald-600 dark:text-emerald-400 mt-2">--- netsolutions.az ping statistics ---</div>
          <div className="out-1 opacity-0 text-slate-500 dark:text-slate-400 mb-4">2 packets transmitted, 2 packets received, 0.0% packet loss</div>

          {/* Command 2 */}
          <div className="out-1 opacity-0 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">➜</span>
            <span className="text-blue-600 dark:text-blue-400">~</span>
            <span className="cmd-2"></span>
            <span className="cursor-2 opacity-0 w-2 h-4 bg-slate-500 dark:bg-slate-400 inline-block"></span>
          </div>

          {/* Output 2 */}
          <div className="out-2 opacity-0 text-emerald-600 dark:text-emerald-400">● helpdesk.service - NetSolutions 24/7 Helpdesk</div>
          <div className="out-2 opacity-0 text-slate-500 dark:text-slate-400">&nbsp;&nbsp;Loaded: loaded (/etc/systemd/system/helpdesk.service)</div>
          <div className="out-2 opacity-0 text-slate-500 dark:text-slate-400">&nbsp;&nbsp;Active: <span className="text-emerald-600 dark:text-emerald-400">active (running)</span> since Mon 2026-06-22</div>
          <div className="out-2 opacity-0 text-slate-500 dark:text-slate-400">&nbsp;&nbsp;Main PID: 1024 (node)</div>
          <div className="out-2 opacity-0 text-slate-500 dark:text-slate-400 mb-4">&nbsp;&nbsp;Status: &quot;All systems operational&quot;</div>

          {/* Command 3 */}
          <div className="out-2 opacity-0 flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">➜</span>
            <span className="text-blue-600 dark:text-blue-400">~</span>
            <span className="cursor-3 opacity-0 w-2 h-4 bg-slate-500 dark:bg-slate-400 inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
