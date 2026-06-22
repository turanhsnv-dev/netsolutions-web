import { IFeature } from '@/types/feature';
import { Users, Zap, ShieldCheck, Cpu } from 'lucide-react';

export const FEATURES_DATA: IFeature[] = [
  {
    id: 'pro-team',
    title: 'Peşəkar Komanda',
    description: 'Sahəsində illərin təcrübəsinə malik, sertifikatlı və ixtisaslaşmış İT mütəxəssisləri. Hər bir layihəyə fərdi yanaşma və yüksək keyfiyyət zəmanəti.',
    icon: <Users className="w-6 h-6" strokeWidth={1.75} />,
  },
  {
    id: 'fast-support',
    title: 'Sürətli Dəstək',
    description: 'Yaranan texniki nasazlıqlara anında müdaxilə və 24/7 kəsintisiz helpdesk xidməti.',
    icon: <Zap className="w-6 h-6" strokeWidth={1.75} />,
  },
  {
    id: 'reliable-solutions',
    title: 'Etibarlı Həllər',
    description: 'Biznesinizin ehtiyaclarına tam uyğunlaşdırılmış, sınaqdan keçmiş sistemlər.',
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />,
  },
  {
    id: 'modern-tech',
    title: 'Müasir Texnologiyalar',
    description: 'Ən son innovasiyalar və qlobal trendlərə cavab verən avadanlıq və proqram təminatları. Rəqəmsal transformasiya prosesində ən güclü dəstəkçiniz.',
    icon: <Cpu className="w-6 h-6" strokeWidth={1.75} />,
  },
];
