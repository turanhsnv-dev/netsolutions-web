import Image from 'next/image';
import { ITestimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, role, content, date, avatar } = testimonial;

  return (
    <article className="testimonial-card p-6 sm:p-8 bg-white dark:bg-card/80 dark:backdrop-blur-md rounded-[24px] border border-slate-100 dark:border-border/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-sm transition-colors duration-300">
      
      {/* Header: Profil şəkli, Ad, Soyad */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-100 dark:ring-slate-800 bg-slate-100 dark:bg-slate-800">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-[15px] transition-colors">
            {name}
          </h4>
          <p className="text-xs font-semibold text-[#0275d8] dark:text-[#3b82f6] uppercase tracking-wider mt-0.5 transition-colors">
            {role}
          </p>
        </div>
      </div>

      {/* Body: Rəy mətni */}
      <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
        &quot;{content}&quot;
      </p>

      {/* Footer: Tarix */}
      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-1 text-[#f59e0b]">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 transition-colors">
          {date}
        </span>
      </div>
    </article>
  );
};