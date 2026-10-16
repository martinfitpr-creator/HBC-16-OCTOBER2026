export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'capabilities' 
  | 'quality-safety' 
  | 'social-responsibility' 
  | 'contact'
  | 'not-found';

export type ProjectCategory = 
  | 'ALL' 
  | 'CIVIL' 
  | 'ROADS' 
  | 'BRIDGES' 
  | 'BUILDING' 
  | 'INFRASTRUCTURE' 
  | 'GOVERNMENT';

export interface ProjectItem {
  id: string;
  name: string;
  subtitle?: string;
  location: string;
  province: string;
  category: ProjectCategory;
  categoryLabel: string;
  completionPeriod?: string;
  contractValue?: string;
  client?: string;
  consultant?: string;
  description: string;
  scopeHighlights: string[];
  imageUrl: string;
  galleryUrls?: string[];
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  cardCaption: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: 'HardHat' | 'Building2' | 'Zap' | 'Truck' | 'Layers' | 'Settings' | 'Wrench';
  capabilities: string[];
  applicableStandards?: string[];
}

export interface StatisticItem {
  value: string;
  label: string;
  subtext?: string;
  highlight?: boolean;
}

export interface CorporateRegistration {
  legalName: string;
  tagline?: string;
  companyReg: string;
  cidbReg: string;
  cidbGrades: string[];
  taxNumber: string;
  physicalAddress: {
    street: string;
    suburb: string;
    city: string;
    postalCode: string;
    country: string;
  };
  postalAddress: {
    box: string;
    city: string;
    postalCode: string;
  };
  telephone: string;
  mobile: string;
  email: string;
  website: string;
}
