import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    shortDescription: 'Roads, bridges, stormwater infrastructure and civil works.',
    detailedDescription: 'Comprehensive civil engineering capabilities handling complex municipal, provincial, and national infrastructure projects. Our civil engineering teams execute earthworks, structural concrete, bridge rehabilitation, bulk stormwater drainage, and arterial road construction under strict engineering oversight.',
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
    id: 'building-construction',
    title: 'Building Construction',
    shortDescription: 'Commercial, institutional, public-sector and industrial buildings.',
    detailedDescription: 'Turnkey building solutions spanning civic infrastructure, correctional facilities, higher education lecture complexes, police stations, healthcare clinics, and commercial warehousing. We integrate structural frames, brickwork, roofing, finishes, and specialist trades into cohesive delivery.',
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
    id: 'fencing-security',
    title: 'Fencing & Security Barriers',
    shortDescription: 'Perimeter security, fencing and associated infrastructure.',
    detailedDescription: 'Specialist perimeter defense, high-security anti-climb fencing, concrete barrier systems, and access containment infrastructure engineered for high-security public precincts, correctional departments, municipal depots, and industrial sites.',
    iconName: 'ShieldCheck',
    capabilities: [
      'High-security anti-cut and anti-climb clear-view fencing',
      'Palisade, wire mesh and heavy-duty razor wire perimeter barriers',
      'Concrete boundary walls and reinforced blast/impact barriers',
      'Access control vehicle gates, turnstiles and security guardhouses',
      'Perimeter earthworks and boundary alignment stabilization'
    ],
    applicableStandards: ['Department of Public Works Security Standards', 'SANS High Security Fencing']
  },
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
    id: 'air-conditioning-refrigeration',
    title: 'Air Conditioning & Refrigeration',
    shortDescription: 'HVAC, air conditioning and refrigeration solutions.',
    detailedDescription: 'Engineered climate control, industrial refrigeration, mechanical ventilation, and building management HVAC systems. We design, install, and commission heavy-duty air conditioning systems for commercial complexes, emergency services, and civic offices.',
    iconName: 'Wind',
    capabilities: [
      'Central chiller plants and chilled water distribution circuits',
      'VRV / VRF multi-zone air conditioning systems',
      'Industrial cold storage, freezer rooms and commercial refrigeration',
      'Fire-rated smoke extraction and fresh air ventilation ducting',
      'Automated Building Management System (BMS) HVAC controls'
    ],
    applicableStandards: ['ASHRAE Standards', 'SANS 10173', 'CIDB 7ME PE Certified']
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
    id: 'surface-mining',
    title: 'Surface Mining',
    shortDescription: 'Specialist construction and mining-related services.',
    detailedDescription: 'Targeted opencast civil support, haul road construction and maintenance, tailings dam earthworks, storm diversion channels, and mine surface infrastructure designed to withstand harsh industrial and geological conditions.',
    iconName: 'Pickaxe',
    capabilities: [
      'Mine haul road construction, dust suppression and routine grading',
      'Surface stormwater diversion channels and containment paddocks',
      'Run-of-Mine (ROM) pad construction and crushing plant civils',
      'Topsoil stripping, bulk overburden handling and stockpile management',
      'Mining infrastructure civil foundations and conveyor plinths'
    ],
    applicableStandards: ['Mine Health and Safety Act (MHSA)', 'DMR Environmental Guidelines']
  },
  {
    id: 'infrastructure-development',
    title: 'Infrastructure Development',
    shortDescription: 'Integrated infrastructure solutions for public and private-sector clients.',
    detailedDescription: 'Full turnkey project lifecycle execution, aligning master planning, civil engineering, multidisciplinary construction, and community stakeholder liaison. We deliver essential public services, transport nodes, and economic corridors for South Africa.',
    iconName: 'HardHat',
    capabilities: [
      'Intermodal transport hubs, taxi ranks and commuter precincts',
      'Urban regeneration and township revitalization programs',
      'Bulk municipal water reservoir and sanitation infrastructure',
      'Precinct electrical, stormwater, and road integrated packages',
      'Public-Private Partnership (PPP) civil works turnkey execution'
    ],
    applicableStandards: ['CIDB Best Practice Standards', 'Municipal Infrastructure Grant (MIG) Specs']
  }
];
