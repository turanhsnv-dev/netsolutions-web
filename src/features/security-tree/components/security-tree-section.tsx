'use client';

import React, { useState } from 'react';
import { ChevronDown, Shield, Server, Key, Database, Bug, HardDrive, Cloud, Code, BrainCircuit } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Kompleks Təhlükəsizlik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            İnfrastrukturunuzu ən son təhdidlərdən qorumaq üçün tam miqyaslı kibertehlükəsizlik yanaşması.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tree Root */}
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex items-center justify-between p-6 bg-card border border-border/50 rounded-2xl cursor-pointer hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  KiberTəhlükəsizlik Həlləri
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Müasir çağırışlara qarşı tam müdafiə strukturu
                </p>
              </div>
            </div>
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground transition-transform duration-300",
              isOpen ? "rotate-180" : ""
            )}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          {/* Tree Branches */}
          <div className={cn(
            "grid transition-all duration-500 ease-in-out",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
          )}>
            <div className="overflow-hidden">
              <div className="relative pl-6 md:pl-12 py-2 space-y-4">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-[3.25rem] top-0 bottom-6 w-px bg-border/50" />

                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={service.id} 
                      className="relative flex items-center gap-4 group"
                      style={{
                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      {/* Horizontal Branch */}
                      <div className="absolute left-0 md:left-[0.75rem] top-1/2 w-6 md:w-8 h-px bg-border/50 group-hover:bg-primary/50 transition-colors" />
                      
                      <div className="relative z-10 flex-1 ml-8 md:ml-12 p-4 bg-background border border-border/40 rounded-xl hover:border-primary/40 hover:bg-card transition-all duration-300 flex items-center gap-4 shadow-sm group-hover:-translate-y-0.5">
                        <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
