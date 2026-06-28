import { IFeature } from '@/types/feature';

interface FeatureCardProps {
  feature: IFeature;
  index: number;
}

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const { title, description, icon } = feature;
  
  // Sıra nömrəsini 01, 02 formatına salmaq üçün
  const formattedIndex = index.toString().padStart(2, '0');

  return (
    <article className="feature-card relative flex flex-col items-start p-8 bg-white dark:bg-card/80 dark:backdrop-blur-md rounded-[24px] border border-slate-100 dark:border-border/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:hover:shadow-md transition-all duration-300 overflow-hidden group">
      
      {/* Arxaplanda böyük rəqəm (Su nişanı effekti) */}
      <div className="absolute -right-2 -bottom-6 text-[120px] font-black text-slate-50/50 dark:text-slate-800/20 pointer-events-none transition-colors duration-300 selection:bg-transparent">
        {formattedIndex}
      </div>

      <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F4F9FF] dark:bg-[#0275d8]/10 mb-6 transition-colors duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-[90%] transition-colors duration-300">
          {description}
        </p>
      </div>
    </article>
  );
};