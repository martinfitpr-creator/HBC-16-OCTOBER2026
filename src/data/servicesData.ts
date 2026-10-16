import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering',
    shortDescription: 'Electrical infrastructure and project-related electrical works.',
    detailedDescription: 'End-to-end electrical engineering for civil infrastructure and building projects. Our electrical teams deliver MV/LV reticulation, substation equipment installation, backup power generation, street lighting networks, and internal electrical distribution.',
    iconName: 'Zap',
    capabilities: [
      'Medium and Low Voltage (MV/LV) reticulation networks',
      'Substation electrification and transformer installations',
      'Commercial and industrial interior power distribution',
      'High-mast and municipal street lighting installations',
      'Emergency diesel standby generator and UPS backup systems'
    ],
    applicableStandards: ['SANS 10142-1 (Code of Practice)', 'Eskom Technical Specifications', 'CIDB 7EB / 7EP PE']
  },
  {
    id: 'general-building',
    title: 'General Building',
    shortDescription: 'Commercial, institutional, public-sector and industrial buildings.',
    detailedDescription: 'Turnkey building solutions spanning civic infrastructure, correctional facilities, higher education lecture complexes, police stations, healthcare clinics, and commercial warehousing. We integrate building structure, brickwork, roofing, finishes, and specialist trades into cohesive delivery.',
    iconName: 'Building2',
    capabilities: [
      'Institutional, university and secondary education campuses',
      'Public sector facilities (police stations, fire stations, civic offices)',
      'Healthcare clinics and municipal medical centers',
      'Industrial warehouses, distribution hubs and logistics facilities',
      'High-security correctional and justice precinct construction'
    ],
    applicableStandards: ['National Building Regulations (NBR)', 'SANS 10400', 'CIDB Grade 9GB']
  },
  {
    id: 'plant-hire',
    title: 'Plant Hire',
    shortDescription: 'Construction plant and equipment supporting project delivery.',
    detailedDescription: 'Modern, rigorously maintained fleet of heavy earthmoving machinery, compaction equipment, transport tippers, and site plant. Backed by certified operators and mobile mechanical field support to maximize uptime on high-production sites.',
    iconName: 'Truck',
    capabilities: [
      'Tracked excavators (20-ton to 35-ton with specialized attachments)',
      'Motor graders with precision laser-leveling capabilities',
      'Front-end wheel loaders and articulated dump trucks (ADTs)',
      'Smooth-drum and padfoot vibratory rollers (10-ton to 16-ton)',
      'Water tankers (10,000L to 18,000L) and 10m³ heavy tipper trucks'
    ],
    applicableStandards: ['Driven Machinery Regulations (OHSA)', 'OEM Maintenance Protocols']
  },
  {
    id: 'civil-construction',
    title: 'Civil Construction',
    shortDescription: 'Roads, bridges, earthworks and civil infrastructure.',
    detailedDescription: 'Comprehensive civil construction capabilities for municipal, provincial, and national infrastructure projects. Our teams execute earthworks, bridge construction and rehabilitation, stormwater drainage, roadworks, and water infrastructure under strict engineering oversight.',
    iconName: 'Layers',
    capabilities: [
      'Bridge construction, rehabilitation and structural upgrades',
      'Arterial, municipal and access road construction',
      'Bulk stormwater management and hydraulic drainage networks',
      'Bulk earthworks, terracing, cut-to-fill and soil stabilization',
      'Water and sanitation reticulation pipelines'
    ],
    applicableStandards: ['COLTO Specifications', 'SANS 1200 / SANS 2001', 'CIDB Grade 9CE']
  },
  {
    id: 'mechanical-engineering',
    title: 'Mechanical Engineering',
    shortDescription: 'Mechanical, HVAC, refrigeration and ventilation systems.',
    detailedDescription: 'Mechanical engineering solutions for building and infrastructure projects, including HVAC, refrigeration, mechanical ventilation, plant rooms, and building services. Our teams install, integrate, and commission systems to meet project specifications.',
    iconName: 'Settings',
    capabilities: [
      'Central chiller plants and chilled water distribution circuits',
      'VRV / VRF multi-zone air conditioning systems',
      'Industrial cold storage and commercial refrigeration',
      'Fire-rated smoke extraction and fresh air ventilation ducting',
      'Mechanical plant rooms and building management system integration'
    ],
    applicableStandards: ['ASHRAE Standards', 'SANS 10173', 'CIDB 7ME PE Certified']
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    shortDescription: 'Water supply, drainage and plumbing systems for buildings.',
    detailedDescription: 'Plumbing installation and maintenance for commercial, institutional, and public buildings. Work includes water supply, hot-water systems, sanitaryware, soil and waste drainage, and stormwater connections, coordinated with the wider building services.',
    iconName: 'Wrench',
    capabilities: [
      'Cold and hot water supply pipework and distribution',
      'Sanitaryware installation and fixture connections',
      'Soil, waste and vent drainage systems',
      'Stormwater connections and building drainage',
      'Pressure testing, commissioning and plumbing repairs'
    ],
    applicableStandards: ['National Building Regulations (NBR)', 'SANS 10252', 'SANS 10254']
  },
  {
    id: 'structural-construction',
    title: 'Structural Construction',
    shortDescription: 'Structural concrete, steelwork and building frameworks.',
    detailedDescription: 'Structural construction for building and infrastructure projects, delivered to approved drawings and engineering specifications. Our work includes reinforced concrete, structural steel, foundations, retaining structures, and bridge components.',
    iconName: 'HardHat',
    capabilities: [
      'Reinforced concrete foundations, slabs, columns and beams',
      'Structural steel fabrication and erection',
      'Retaining walls and structural concrete works',
      'Bridge decks, abutments and associated structures',
      'Construction in accordance with approved structural drawings'
    ],
    applicableStandards: ['SANS 10100', 'SANS 10162', 'Approved project structural drawings']
  }
];
