import { ITestimonial } from '@/types/testimonial';

const AVATAR_GIRL = '/images/avatar/avatar-girl.jpg';
const AVATAR_MEN = [
  '/images/avatar/avatar-men.jpg',
  '/images/avatar/avatar-men-2.avif',
] as const;

function isFemaleName(name: string): boolean {
  const lastName = name.split(' ').pop() ?? name;
  return /(?:ova|əva)$/i.test(lastName);
}

function getMaleAvatar(id: string): string {
  const hash = id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return AVATAR_MEN[hash % AVATAR_MEN.length];
}

function withAvatar(
  testimonial: Omit<ITestimonial, 'avatar'>,
): ITestimonial {
  return {
    ...testimonial,
    avatar: isFemaleName(testimonial.name)
      ? AVATAR_GIRL
      : getMaleAvatar(testimonial.id),
  };
}

const RAW_TESTIMONIALS: Omit<ITestimonial, 'avatar'>[] = [
  {
    id: 't-3',
    name: 'Orxan Qasımov',
    role: 'Startap Təsisçisi',
    content:
      'Yeni ofisimiz üçün bütün İT infrastrukturunu sıfırdan qurdular. Serverlərin sazlanmasından tutmuş təhlükəsizlik kameralarına qədər hər bir xırda detala xüsusi diqqət yetirdilər. Çox məmnunuq və tövsiyə edirik!',
    date: '24 May 2026',
    initials: 'OQ',
  },
  {
    id: 't-2',
    name: 'Aysel Məmmədova',
    role: 'Layihə Meneceri',
    content: 'Sürətli dəstək, peşəkar yanaşma. Problemlərə anında reaksiya verirlər.',
    date: '08 İyun 2026',
    initials: 'AM',
  },
  {
    id: 't-7',
    name: 'Fərid Həsənov',
    role: 'Marketinq Rəhbəri',
    content:
      'Veb saytımızın yığılması və serverə yerləşdirilməsi prosesini yüksək səviyyədə icra etdilər. Yüklənmə sürəti əvvəlkinə nisbətən qat-qat yaxşıdır.',
    date: '19 Aprel 2026',
    initials: 'FH',
  },
  {
    id: 't-1',
    name: 'Rəşad Əliyev',
    role: 'Texniki Direktor',
    content:
      'NetSolutions komandası ilə işləmək bizim üçün böyük bir təcrübə oldu. Şəbəkə infrastrukturumuzda olan xroniki problemləri cəmi bir neçə gün ərzində kökündən həll etdilər. İndi hər şey saat kimi işləyir.',
    date: '12 İyun 2026',
    initials: 'RƏ',
  },
  {
    id: 't-13',
    name: 'Vüqar İsmayılov',
    role: 'Təsisçi',
    content: 'Təşəkkürlər NetSolutions, işinizin ustasısınız!',
    date: '01 Mart 2026',
    initials: 'Vİ',
  },
  {
    id: 't-14',
    name: 'Zəhra Nəcəfova',
    role: 'Tədris Mərkəzi Rəhbəri',
    content:
      'Sinfi yeni avadanlıqlarla təchiz etmək və tədris sistemini qurmaqda bizə böyük dəstək oldular. Proses boyu göstərdikləri səbir və peşəkarlıq təqdirəlayiqdir.',
    date: '24 Fevral 2026',
    initials: 'ZN',
  },
  {
    id: 't-6',
    name: 'Nərmin Rüstəmova',
    role: 'HR Menecer',
    content:
      'Yeni işçilər üçün kompüterlərin sazlanması və sistemlərə girişin təmin olunması prosesi artıq çox sürətli və problemsizdir.',
    date: '28 Aprel 2026',
    initials: 'NR',
  },
  {
    id: 't-9',
    name: 'Ramil Süleymanov',
    role: 'İT Mütəxəssis',
    content:
      'Serverlərimizin miqrasiya prosesi tam kəsintisiz həyata keçirildi. Sıfır məlumat itkisi, sıfır gecikmə.',
    date: '05 Aprel 2026',
    initials: 'RS',
  },
  {
    id: 't-4',
    name: 'Leyla Hüseynova',
    role: 'Maliyyə Direktoru',
    content:
      '1C proqram təminatı ilə bağlı daim xətalar alırdıq. NetSolutions komandası bazanı optimallaşdırdı və əməliyyatların sürəti 3 dəfə artdı.',
    date: '15 May 2026',
    initials: 'LH',
  },
  {
    id: 't-11',
    name: 'Emin Kərimov',
    role: 'Logistika Rəhbəri',
    content:
      'Anbarımızın CCTV və şəbəkə sistemlərini çox səliqəli və keyfiyyətli qurdular. Çəkiliş bucaqları və uzaqdan nəzarət sistemi qüsursuz işləyir. Qiymət və keyfiyyət nisbəti idealdır.',
    date: '14 Mart 2026',
    initials: 'EK',
  },
  {
    id: 't-12',
    name: 'Günel Ələkbərova',
    role: 'Dizayner',
    content:
      'Komandamızın böyük həcmli qrafik fayllarla rahat işləməsi üçün daxili şəbəkəni optimallaşdırdılar. Fayl transfer sürəti inanılmaz dərəcədə artıb.',
    date: '08 Mart 2026',
    initials: 'GƏ',
  },
  {
    id: 't-10',
    name: 'Apasni Roma',
    role: 'İT Mütəxəssis',
    content:
      'Serverlərimizin miqrasiya prosesi tam kəsintisiz həyata keçirildi. Sıfır məlumat itkisi, sıfır gecikmə.',
    date: '05 Aprel 2026',
    initials: 'AR',
  },
];

export const TESTIMONIALS_DATA: ITestimonial[] = RAW_TESTIMONIALS.map(withAvatar);

/** Pinterest grid üçün — qısa/uzun rəylər qarışıq, 9 kart (3×3 sütun) */
const DISPLAY_IDS = [
  't-3',  // Orxan — uzun
  't-2',  // Aysel — qısa
  't-1',  // Rəşad — uzun
  't-13', // Vüqar — qısa
  't-14', // Zəhra — uzun
  't-6',  // Nərmin — orta
  't-11', // Emin — uzun
  't-4',  // Leyla — orta
  't-12', // Günel — orta (sağ sütunu doldurur)
] as const;

export const TESTIMONIALS_DISPLAY_DATA: ITestimonial[] = DISPLAY_IDS.map((id) =>
  TESTIMONIALS_DATA.find((t) => t.id === id)!,
);
