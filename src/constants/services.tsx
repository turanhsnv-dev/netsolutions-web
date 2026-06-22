import { IService } from '@/types/service';
import {
  HeadsetIcon,
  VideoIcon,
  NetworkIcon,
  LandmarkIcon,
  GlobeIcon,
} from '@/features/services/components/service-icons';

export const SERVICES_DATA: IService[] = [
  {
    id: 'it-tech',
    number: '01',
    category: 'ƏSAS',
    title: 'İT Texniki Xidmətlər',
    description:
      'Kompüterlərin, noutbukların təmiri, proqram təminatının yazılması, diaqnostika və profilaktika xidmətləri. Avadanlıqlarınızın fasiləsiz işləməsini təmin edirik.',
    hasLink: true,
    hasBackgroundGraphic: true,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'helpdesk',
    number: '02',
    category: 'DƏSTƏK',
    title: 'Helpdesk (Texniki Dəstək)',
    icon: <HeadsetIcon />,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'cctv',
    number: '03',
    category: 'TƏHLÜKƏSİZLİK',
    title: 'Kamera Nəzarət Sistemləri (CCTV)',
    icon: <VideoIcon />,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'network',
    number: '04',
    category: 'İNFRASTRUKTUR',
    title: 'Şəbəkə Xidmətləri',
    icon: <NetworkIcon />,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'automation',
    number: '05',
    category: 'AVTOMATLAŞDIRMA',
    title: '1C Proqram Təminatı',
    icon: <LandmarkIcon />,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'web',
    number: '06',
    category: 'RƏQƏMSAL',
    title: 'Veb Saytların Yığılması',
    icon: <GlobeIcon />,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'server',
    number: '07',
    category: 'YÜKSƏK PERFORMANS',
    title: 'Server Sistemlərinin Qurulması',
    description:
      'Fiziki və virtual serverlərin sazlanması, klasterizasiya, ehtiyat nüsxələrin çıxarılması (backup) və təhlükəsizlik tənzimləmələri.',
    colSpan: 'md:col-span-3',
    rowSpan: 'md:row-span-1',
  },
];
