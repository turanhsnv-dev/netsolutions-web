import { ReactNode } from 'react';

export interface IService {
  id: string;
  number: string;
  category: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  hasLink?: boolean;
  colSpan?: string;
  rowSpan?: string;
  hasBackgroundGraphic?: boolean;
}