export type PageType = 
  | 'home'
  | 'services'
  | 'products'
  | 'product-detail'
  | 'portfolio'
  | 'about'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'disclaimer';

export interface ColorOption {
  name: string;
  hex: string;
  chassisHex: number;
  imageSrc?: string;
}

export type PhoneAngle = 'studio' | 'front' | 'rear' | 'side' | 'orbit';

export interface AngleView {
  id: PhoneAngle;
  label: string;
  description: string;
}

export interface SmartphoneProduct {
  id: string;
  name: string;
  brand: 'Apple' | 'vivo' | 'POCO' | 'realme' | 'Ai+';
  modelLine: string;
  category: 'Flagship' | 'Mid-Range' | 'Value 5G' | 'Performance';
  priceDisplay: 'Contact for Price';
  availability: 'Confirm availability';
  shortDescription: string;
  longDescription: string;
  specs: {
    display: string;
    processor: string;
    rearCamera: string;
    frontCamera: string;
    battery: string;
    connectivity: string;
    variants: string;
    os: string;
  };
  features: string[];
  imagePlaceholder: string;
  imageSrc: string;
  colors: ColorOption[];
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  icon: string;
  category: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Digital Marketing' | 'Web Design & UI' | 'Brand Identity' | 'Social Media' | 'Mobile Commerce';
  tag: string;
  isConcept: true;
  objective: string;
  overview: string;
  solution: string;
  deliverables: string[];
  accentColor: string;
}
