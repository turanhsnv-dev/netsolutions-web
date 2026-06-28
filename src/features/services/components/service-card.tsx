import { IService } from '@/types/service';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ServiceCardGraphic } from './service-card-graphic';

interface ServiceCardProps {
  service: IService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const {
    number,
    category,
    title,
    description,
    icon,
    hasLink,
    hasBackgroundGraphic,
    colSpan = 'col-span-1',
    rowSpan = 'row-span-1',
  } = service;

  const isMainCard = hasBackgroundGraphic;
  const isWideCard = colSpan.includes('col-span-3');

  return (
    <article
      className={cn(
        'service-card relative flex flex-col overflow-hidden rounded-[24px] bg-white dark:bg-card/80 dark:backdrop-blur-md border border-[#E5E7EB] dark:border-border/40 p-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:shadow-sm transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:hover:shadow-md',
        !isMainCard && !isWideCard && 'min-h-42',
        isMainCard && 'min-h-90 md:min-h-0',
        colSpan,
        rowSpan,
      )}
    >
      <header className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 transition-colors">
        <span className="text-[#0275d8] dark:text-[#3b82f6]">{number}</span>
        <span className="text-[#D1D5DB] dark:text-slate-700">/</span>
        <span className="text-[#9CA3AF] dark:text-slate-500">{category}</span>
      </header>

      <div className="relative z-10 flex flex-col flex-1">
        <h3
          className={cn(
            'font-bold text-[#111111] dark:text-white tracking-tight transition-colors duration-300',
            isMainCard ? 'text-[26px] md:text-[28px] leading-tight mb-1' : 'text-[19px] md:text-[20px] leading-snug',
            isWideCard && 'mb-2',
          )}
        >
          {title}
        </h3>

        {description && (
          <p
            className={cn(
              'text-[#6B7280] dark:text-slate-400 text-[14px] leading-[1.65] mt-3 transition-colors duration-300',
              isMainCard && 'max-w-[58%]',
              isWideCard && 'max-w-180',
            )}
          >
            {description}
          </p>
        )}

        <footer className="mt-auto pt-8 flex items-center relative z-10">
          {icon && <div className="text-[#0275d8] dark:text-[#3b82f6] transition-colors">{icon}</div>}

          {hasLink && (
            <button
              type="button"
              className="flex items-center gap-1 text-[13px] font-semibold text-[#0275d8] dark:text-[#3b82f6] hover:text-[#025aa5] dark:hover:text-[#60a5fa] transition-colors"
            >
              Ətraflı oxu
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          )}
        </footer>
      </div>

      {hasBackgroundGraphic && <ServiceCardGraphic />}
    </article>
  );
};