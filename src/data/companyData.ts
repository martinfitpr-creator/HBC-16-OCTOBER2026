import { CorporateRegistration, StatisticItem } from '../types';

export const companyDetails: CorporateRegistration = {
  legalName: 'HBC Construction (Pty) Ltd',
  tagline: 'Excellence in Execution',
  companyReg: '2008/019463/07',
  cidbReg: '104526',
  cidbGrades: [
    '8GB PE (General Building)',
    '8CE PE (Civil Engineering)',
    '7EB PE (Electrical Engineering Building)',
    '7ME PE (Mechanical Engineering)',
    '7EP PE (Electrical Engineering Infrastructure)'
  ],
  taxNumber: '9136018836',
  physicalAddress: {
    street: '4 Celliers Road',
    suburb: 'Glen Austen',
    city: 'Midrand',
    postalCode: '1687',
    country: 'South Africa'
  },
  postalAddress: {
    box: 'P O Box 2382',
    city: 'Kempton Park',
    postalCode: '1620'
  },
  telephone: '011 314 4737',
  mobile: '082 853 2960',
  email: 'info@hbconstruction.co.za',
  website: 'www.hbconstruction.co.za'
};

export const companyStatistics: StatisticItem[] = [
  {
    value: '100%',
    label: 'Black Owned',
    subtext: 'Committed to empowerment and inclusive economic development across South Africa'
  },
  {
    value: 'Level 8 / 7',
    label: 'CIDB Accreditation',
    subtext: '8GB PE, 8CE PE, 7EB PE, 7ME PE, 7EP PE for major infrastructure projects'
  },
  {
    value: '30+',
    label: 'Years of Experience',
    subtext: 'Three decades of proven execution across civil, commercial and public works'
  },
  {
    value: '8+',
    label: 'Core Service Areas',
    subtext: 'Multidisciplinary turnkey delivery from ground-breaking to handover'
  },
  {
    value: '50+',
    label: 'Completed Projects',
    subtext: 'Major infrastructure, institutional, road, bridge and civic facilities'
  }
];

export const companyVision = 
  "To grow our services to be renowned for excellence in our business relations with our clients, delivery of infrastructure-related projects and services, and creating opportunities for wealth, economic empowerment and poverty alleviation.";

export const companyMissionStatement =
  "To be the most successful black people owned company and to empower disadvantaged communities by involving them in projects within the allocated area. HBC Construction (PTY)Ltd strength lies in its ability to capitalize on the commercial, material and technical capabilities, while developing close-knit community relationships at the local level";

export const companyMission = [
  {
    title: "Black Economic Empowerment",
    description: "Pioneering sustainable transformation by driving genuine equity, enterprise development, and active local participation."
  },
  {
    title: "Technical & Engineering Excellence",
    description: "Executing complex multidisciplinary civil and building infrastructure projects with uncompromising quality and rigorous standards."
  },
  {
    title: "Community & Socio-Economic Participation",
    description: "Allocating substantial project responsibility to youth, local labour, and emerging SMMEs on all construction sites."
  },
  {
    title: "Commercial Integrity & Value",
    description: "Upholding transparent procurement, honest pricing structures, and sustainable growth through long-term client partnerships."
  }
];

export const coreValues = [
  {
    name: 'Customers',
    description: 'Understanding client needs intimately and consistently exceeding delivery expectations.',
    icon: 'Users'
  },
  {
    name: 'People',
    description: 'Investing in our workforce, developing skills, and fostering an environment of mutual respect.',
    icon: 'HeartHandshake'
  },
  {
    name: 'Leadership',
    description: 'Inspiring disciplined execution, operational foresight, and visionary infrastructure development.',
    icon: 'Award'
  },
  {
    name: 'Integrity',
    description: 'Honest pricing, ethical conduct, and uncompromised transparency across all contractual relationships.',
    icon: 'ShieldCheck'
  },
  {
    name: 'Quality',
    description: 'Strict adherence to engineering specifications and continuous quality-based management.',
    icon: 'CheckCircle2'
  },
  {
    name: 'Accountability',
    description: 'Taking ownership of delivery timelines, project budgets, and environmental stewardship.',
    icon: 'ClipboardCheck'
  },
  {
    name: 'Safety',
    description: 'Zero-harm philosophy safeguarding employees, clients, communities, and project sites.',
    icon: 'AlertTriangle'
  }
];

export const businessPillars = [
  {
    number: '01',
    title: 'CONTINUOUS INNOVATION',
    subtitle: 'Modern Engineering Methodologies',
    description: 'Applying contemporary construction technologies, optimized resource planning, and advanced civil engineering methods to overcome site complexities efficiently.'
  },
  {
    number: '02',
    title: 'CUSTOMER CARE',
    subtitle: 'Partnerships Built on Performance',
    description: 'Generating sustainable repeat business through deep alignment with client objectives, transparent communication channels, and disciplined project lifecycle management.'
  },
  {
    number: '03',
    title: 'SAFETY',
    subtitle: 'Uncompromising Site Protection',
    description: 'Enforcing stringent occupational health and safety standards that protect our workforce, subcontractors, visitors, and surrounding communities every single day.'
  }
];
