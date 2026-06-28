"use client";

import { Shield, Server, Key, Database, Bug, HardDrive, Cloud, Code, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  { id: 'siem', name: 'SIEM & SOAR', icon: Shield, desc: 'Təhdidlərin aşkarlanması və idarə edilməsi' },
  { id: 'endpoint', name: 'Endpoint Security', icon: Server, desc: 'Son nöqtə cihazlarının qorunması' },
  { id: 'identity', name: 'Identity Security', icon: Key, desc: 'İdentifikasiya və girişin idarə edilməsi' },
  { id: 'data', name: 'Data Protection', icon: Database, desc: 'Məlumatların məxfiliyi və bütövlüyü' },
  { id: 'vulnerability', name: 'Vulnerability Management', icon: Bug, desc: 'Zəifliklərin idarə olunması' },
  { id: 'backup', name: 'Backup & Disaster Recovery', icon: HardDrive, desc: 'Yedəkləmə və fəlakətdən qurtarma' },
  { id: 'cloud', name: 'Cloud Security', icon: Cloud, desc: 'Bulud infrastrukturunun qorunması' },
  { id: 'application', name: 'Application Security', icon: Code, desc: 'Tətbiqlərin təhlükəsizliyi' },
  { id: 'ai', name: 'AI Security', icon: BrainCircuit, desc: 'Süni intellekt sistemlərinin qorunması' },
];

export function SecurityTreeSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Kompleks Təhlükəsizlik
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-x-0 lg:gap-y-6 items-center w-full relative max-w-7xl mx-auto py-12">
            
          {/* Center Trigger Node */}
          <div className="col-start-1 lg:col-start-2 row-start-1 lg:row-span-4 flex flex-col items-center justify-center z-20 mx-0 lg:mx-4">
            <div 
              className="relative p-6 md:p-8 bg-card/60 backdrop-blur-2xl border border-border/20 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center w-70 md:w-[320px]"
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full" />
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 relative z-10">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground relative z-10">
                KiberTəhlükəsizlik<br/>Həlləri
              </h3>
            </div>
          </div>

          {/* Left Items */}
          {services.slice(0, 4).map((service, i) => {
            const rowStarts = ["lg:row-start-1", "lg:row-start-2", "lg:row-start-3", "lg:row-start-4"];
            return (
              <div 
                key={service.id} 
                className={cn(
                  "col-start-1 flex flex-row items-center justify-center lg:justify-end gap-2 lg:gap-0",
                  rowStarts[i]
                )}
              >
                <ServiceCard service={service} />
                <div className="w-6 xl:w-12 h-px bg-border/80 hidden lg:block" />
              </div>
            );
          })}

          {/* Right Items */}
          {services.slice(4, 8).map((service, i) => {
            const rowStarts = ["lg:row-start-1", "lg:row-start-2", "lg:row-start-3", "lg:row-start-4"];
            return (
              <div 
                key={service.id} 
                className={cn(
                  "col-start-1 lg:col-start-3 flex flex-row items-center justify-center lg:justify-start gap-2 lg:gap-0",
                  rowStarts[i]
                )}
              >
                <div className="w-6 xl:w-12 h-px bg-border/80 hidden lg:block" />
                <ServiceCard service={service} />
              </div>
            );
          })}

          {/* Bottom Item */}
          <div className="col-start-1 lg:col-start-2 lg:row-start-5 flex flex-col items-center justify-start">
             <div className="h-6 xl:h-10 w-px bg-border/80 hidden lg:block" />
             <ServiceCard service={services[8]} />
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <div className="w-full max-w-70 sm:max-w-[320px] p-4 bg-card/80 backdrop-blur-md border border-border/40 rounded-xl hover:border-primary/50 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm hover:shadow-md z-10 group">
      <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary/50 flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">{service.name}</h4>
        <p className="text-xs md:text-sm text-muted-foreground">{service.desc}</p>
      </div>
    </div>
  );
}
