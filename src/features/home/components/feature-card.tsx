import { IFeature } from '@/types/feature';

interface FeatureCardProps {
  feature: IFeature;
  index: number;
}

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const { title, description, icon } = feature;
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <article
      className="feature-card group relative flex flex-col p-8 md:p-10 rounded-[24px] bg-white border border-[#E5E7EB] shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(2,117,216,0.08)] hover:border-[#0275d8]/25 transition-[box-shadow,border-color] duration-500 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0275d8]/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-start justify-between mb-8">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F4F9FF] border border-[#0275d8]/15 group-hover:scale-105 group-hover:bg-[#0275d8] group-hover:border-[#0275d8] transition-[transform,colors,background-color,border-color] duration-500">
          <div className="text-[#0275d8] group-hover:text-white transition-colors duration-500">
            {icon}
          </div>
        </div>
        <span
          className="text-6xl font-black text-slate-100 group-hover:text-[#0275d8]/10 transition-colors duration-500 select-none pointer-events-none -mt-2 -mr-2"
          aria-hidden="true"
        >
          {formattedIndex}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#0275d8] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#6B7280] leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
};
