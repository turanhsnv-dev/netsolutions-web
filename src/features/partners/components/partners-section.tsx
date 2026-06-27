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
  // We duplicate the list to create a seamless infinite scroll effect
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-24 border-y border-border/40 bg-background/50 overflow-hidden relative">
      <div className="container px-4 mx-auto mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Technology Partners
        </h2>
        <p className="text-muted-foreground mt-2">
          Sənayenin qabaqcıl texnologiya təminatçıları ilə əməkdaşlıq edirik
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Left/Right Gradients for fade effect */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background to-transparent" />

        <div className="flex w-max min-w-full animate-marquee gap-8 md:gap-16 items-center px-4">
          {repeatedPartners.map((partner, index) => (
            <div 
              key={`${partner}-${index}`}
              className="flex-none px-6 py-4 bg-card border border-border/50 rounded-xl shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-extrabold text-foreground/80 tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
