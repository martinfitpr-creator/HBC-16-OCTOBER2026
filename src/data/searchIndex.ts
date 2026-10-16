import { PageId } from '../types';
import { servicesData } from './servicesData';
import { projectsData } from './projectsData';
import { companyDetails } from './companyData';

export type SearchCategory = 'all' | 'pages' | 'services' | 'projects' | 'capabilities' | 'contact';

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: SearchCategory;
  categoryLabel: string;
  badge?: string;
  pageId: PageId;
  serviceId?: string;
  projectId?: string;
  actionType: 'navigate' | 'open_service' | 'open_project';
  keywords: string[];
}

export const staticSearchItems: SearchResultItem[] = [
  // Core Website Pages
  {
    id: 'page-home',
    title: 'Home',
    subtitle: 'Building Infrastructure. Creating Opportunity.',
    description: 'HBC Construction overview, CIDB Level 8/7 accreditations, key infrastructure projects, and turnkey construction group profile.',
    category: 'pages',
    categoryLabel: 'Page',
    badge: 'Overview',
    pageId: 'home',
    actionType: 'navigate',
    keywords: ['home', 'overview', 'excellence in execution', 'cidb level 8', '100% black owned', 'south africa', 'turnkey']
  },
  {
    id: 'page-about',
    title: 'About HBC Construction',
    subtitle: 'History, Leadership & 100% Black-Owned Profile',
    description: 'Over 30 years of multidisciplinary construction excellence, corporate profile, executive management, and Level 1 B-BBEE commitment.',
    category: 'pages',
    categoryLabel: 'Page',
    badge: 'Corporate',
    pageId: 'about',
    actionType: 'navigate',
    keywords: ['about', 'history', 'company profile', 'leadership', 'b-bbee level 1', 'black owned', 'executives', 'governance']
  },
  {
    id: 'page-services',
    title: 'Our Services',
    subtitle: 'Turnkey Infrastructure & Construction Capabilities',
    description: 'Explore our 8 specialized engineering and construction divisions including Civil Engineering, Building, Electrical, Plant Hire, and Mining.',
    category: 'pages',
    categoryLabel: 'Page',
    badge: 'Services',
    pageId: 'services',
    actionType: 'navigate',
    keywords: ['services', 'solutions', 'civil', 'building', 'electrical', 'infrastructure', 'plant hire', 'mining']
  },
  {
    id: 'page-projects',
    title: 'Featured Projects & Track Record',
    subtitle: 'Bridge, Road, Institutional & Public Works Portfolio',
    description: 'Proven track record of major infrastructure, municipal projects, bridges, roads, SAPS police stations, universities, and commercial developments.',
    category: 'pages',
    categoryLabel: 'Page',
    badge: 'Portfolio',
    pageId: 'projects',
    actionType: 'navigate',
    keywords: ['projects', 'portfolio', 'bridges', 'roads', 'saps', 'fire stations', 'universities', 'civil projects', 'tenders']
  },
  {
    id: 'page-capabilities',
    title: 'Capabilities & In-House Plant Fleet',
    subtitle: 'CIDB Ratings & Heavy Machinery Fleet',
    description: 'CIDB 8GB PE, 8CE PE ratings, fleet of excavators, motor graders, rollers, ADTs, quality standards, and technical workforce capacity.',
    category: 'capabilities',
    categoryLabel: 'Capability',
    badge: 'CIDB 8/7',
    pageId: 'capabilities',
    actionType: 'navigate',
    keywords: ['capabilities', 'plant fleet', 'heavy machinery', 'excavators', 'graders', 'equipment', 'cidb ratings', 'fleet hire']
  },
  {
    id: 'page-quality-safety',
    title: 'Quality Assurance & Safety (SHEQ)',
    subtitle: 'ISO 9001 & OHSAS 18001 / ISO 45001 Compliance',
    description: 'Our Zero Harm commitment, rigorous Occupational Health and Safety systems, environmental management, and continuous site inspections.',
    category: 'capabilities',
    categoryLabel: 'Compliance',
    badge: 'SHEQ',
    pageId: 'quality-safety',
    actionType: 'navigate',
    keywords: ['quality', 'safety', 'sheq', 'iso 9001', 'ohsas 18001', 'iso 45001', 'zero harm', 'health and safety', 'risk assessment']
  },
  {
    id: 'page-csr',
    title: 'Corporate Social Responsibility (CSR)',
    subtitle: 'Community Upliftment & Local Economic Empowerment',
    description: 'Creating sustainable opportunity through local subcontracting, artisan apprenticeships, community infrastructure, and skills transfer.',
    category: 'pages',
    categoryLabel: 'Page',
    badge: 'Empowerment',
    pageId: 'social-responsibility',
    actionType: 'navigate',
    keywords: ['csr', 'social responsibility', 'community', 'local labor', 'skills development', 'training', 'empowerment']
  },
  {
    id: 'page-contact',
    title: 'Contact HBC Construction & Head Office',
    subtitle: 'Midrand Headquarters, Gauteng',
    description: '4 Celliers Road, Glen Austen, Midrand. Direct phone: 011 312 0000, 082 853 2960. Submit tenders, quotes, and enquiries.',
    category: 'contact',
    categoryLabel: 'Contact',
    badge: 'Midrand HQ',
    pageId: 'contact',
    actionType: 'navigate',
    keywords: ['contact', 'office', 'headquarters', 'midrand', 'telephone', 'email', 'address', 'enquiry', 'quote', 'glen austen']
  },

  // Dedicated Equipment & Plant highlights
  {
    id: 'fleet-excavators',
    title: 'Tracked Excavators (20T – 35T)',
    subtitle: 'Heavy Earthmoving & Hydraulic Breaker Plant',
    description: 'Modern fleet of hydraulic excavators equipped with rock breakers, trenching buckets, and GPS grading systems for bulk earthworks.',
    category: 'capabilities',
    categoryLabel: 'Plant Fleet',
    badge: 'Machinery',
    pageId: 'capabilities',
    actionType: 'navigate',
    keywords: ['excavators', 'cat', 'komatsu', 'earthmoving', 'diggers', 'hydraulic', 'trenching', 'plant hire']
  },
  {
    id: 'fleet-graders',
    title: 'Motor Graders (CAT 140K/M)',
    subtitle: 'Precision Roadbed & Terrace Leveling',
    description: 'Heavy motor graders with automated laser blade control for sub-base preparation, road grading, and haul road maintenance.',
    category: 'capabilities',
    categoryLabel: 'Plant Fleet',
    badge: 'Machinery',
    pageId: 'capabilities',
    actionType: 'navigate',
    keywords: ['graders', 'motor grader', 'cat 140', 'road leveling', 'sub-base', 'gravel roads', 'plant hire']
  },
  {
    id: 'fleet-rollers',
    title: 'Vibratory Compaction Rollers (10T – 16T)',
    subtitle: 'Smooth Drum & Padfoot Compaction',
    description: 'Heavy vibratory compaction rollers ensuring strict density standards on highway sub-bases, layer works, and platform fills.',
    category: 'capabilities',
    categoryLabel: 'Plant Fleet',
    badge: 'Machinery',
    pageId: 'capabilities',
    actionType: 'navigate',
    keywords: ['rollers', 'vibratory roller', 'compaction', 'padfoot', 'smooth drum', 'mod aashto', 'layer works']
  },
  {
    id: 'fleet-tippers',
    title: 'Heavy Tipper Trucks (10m³ – 15m³)',
    subtitle: 'Bulk Material Cartage & Aggregate Logistics',
    description: 'High-capacity tipper trucks operating across civil sites for aggregate hauling, cut-and-fill transport, and spoil removal.',
    category: 'capabilities',
    categoryLabel: 'Plant Fleet',
    badge: 'Logistics',
    pageId: 'capabilities',
    actionType: 'navigate',
    keywords: ['tipper trucks', 'tippers', '10m3', 'aggregate haulage', 'transport', 'cartage', 'spoil']
  },

  // Corporate Accreditations
  {
    id: 'accreditation-cidb',
    title: 'CIDB Level 8GB PE & 8CE PE',
    subtitle: 'National Construction Industry Development Board',
    description: 'Certified to undertake public sector building projects (8GB) and civil engineering infrastructure (8CE) up to R200 Million per contract.',
    category: 'capabilities',
    categoryLabel: 'Accreditation',
    badge: 'CIDB 8/7',
    pageId: 'capabilities',
    actionType: 'navigate',
    keywords: ['cidb', '8gb', '8ce', 'grading', 'contractor grading', 'tender limit', 'public works', 'crs 104526']
  },
  {
    id: 'accreditation-bbbee',
    title: 'Level 1 B-BBEE & 100% Black Owned',
    subtitle: 'Broad-Based Black Economic Empowerment',
    description: 'Providing clients with 135% procurement recognition and substantial B-BBEE scorecard points on South African municipal and commercial tenders.',
    category: 'capabilities',
    categoryLabel: 'Corporate',
    badge: 'B-BBEE',
    pageId: 'about',
    actionType: 'navigate',
    keywords: ['b-bbee', 'bee', 'level 1', '100% black owned', 'procurement recognition', 'transformation']
  }
];

// Helper to generate full searchable dataset including dynamic services & projects
export function getAllSearchItems(): SearchResultItem[] {
  const serviceItems: SearchResultItem[] = servicesData.map((svc) => ({
    id: `service-${svc.id}`,
    title: svc.title,
    subtitle: svc.shortDescription,
    description: `${svc.detailedDescription} Key capabilities: ${svc.capabilities.join(', ')}.`,
    category: 'services',
    categoryLabel: 'Service',
    badge: 'Division',
    pageId: 'services',
    serviceId: svc.id,
    actionType: 'open_service',
    keywords: [
      svc.title.toLowerCase(),
      svc.id.toLowerCase(),
      'service',
      'division',
      ...svc.capabilities.map((c) => c.toLowerCase()),
      ...(svc.applicableStandards || []).map((s) => s.toLowerCase())
    ]
  }));

  const projectItems: SearchResultItem[] = projectsData.map((proj) => ({
    id: `project-${proj.id}`,
    title: proj.name,
    subtitle: `${proj.subtitle || proj.categoryLabel} • ${proj.location}`,
    description: `${proj.description} ${proj.scopeHighlights.join('. ')}`,
    category: 'projects',
    categoryLabel: 'Project',
    badge: proj.categoryLabel,
    pageId: 'projects',
    projectId: proj.id,
    actionType: 'open_project',
    keywords: [
      proj.name.toLowerCase(),
      proj.location.toLowerCase(),
      proj.province.toLowerCase(),
      proj.category.toLowerCase(),
      proj.categoryLabel.toLowerCase(),
      ...(proj.subtitle ? [proj.subtitle.toLowerCase()] : []),
      ...proj.scopeHighlights.map((h) => h.toLowerCase())
    ]
  }));

  return [...staticSearchItems, ...serviceItems, ...projectItems];
}
