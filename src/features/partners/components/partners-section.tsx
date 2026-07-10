'use client';

const partners = [
  'Logpoint',
  'Bitdefender',
  'Forcepoint',
  'Tenable',
  'Delinea',
  'Fidelis Security',
  'Veeam',
  'Invicti',
  'Acronis',
  'AlgoSec',
  'Logsign'
];

export function PartnersSection() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="py-8 md:py-12 border-y border-border/40 bg-background/50 overflow-hidden relative">
      <div className="relative flex overflow-hidden py-4 md:py-8">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

        <div className="flex w-max min-w-full animate-marquee gap-8 md:gap-12 items-center px-4">
          {repeatedPartners.map((partner, index) => (
            <div 
              key={`${partner}-${index}`}
              className="group flex-none relative overflow-hidden rounded-2xl bg-card/20 border border-border/10 transition-all duration-500 hover:bg-card/40 hover:border-border/30 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="px-10 py-6 flex items-center justify-center relative z-10">
                <span className="text-xl md:text-2xl font-semibold text-muted-foreground/70 group-hover:text-foreground transition-colors duration-500 tracking-wide">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
