import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Layers
} from 'lucide-react';
import { companyDetails } from '../data/companyData';
import { PageId, ProjectItem } from '../types';

interface GeographicFootprintProps {
  onNavigate?: (page: PageId) => void;
  onSelectProject?: (project: ProjectItem) => void;
  compact?: boolean;
}

export const GeographicFootprint: React.FC<GeographicFootprintProps> = ({
  onNavigate,
  compact = false
}) => {
  const [activeTab, setActiveTab] = useState<'continental' | 'provincial'>('continental');
  const [selectedRegion, setSelectedRegion] = useState<string>('zaf');

  return (
    <section id="geographic-footprint" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─────────────────────────────────────────────────────────────
            HEADER (MATCHING USER REFERENCE IMAGE WITH UNDERLINE RULE)
        ───────────────────────────────────────────────────────────── */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mx-auto inline-block text-center">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-[#0A3670] sm:text-3xl lg:text-4xl">
              HBC Construction Geographic Footprint
            </h2>
            {/* Crisp Corporate Accent Underline Rule */}
            <div className="h-1 bg-[#0A3670] mt-2.5 w-full rounded-full"></div>
          </div>
          
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-neutral-600 sm:text-base">
            Headquartered in Midrand, Gauteng, HBC Construction combines national CIDB Grade 9GB and 9CE delivery capacity across South Africa’s provincial economic corridors with cross-border infrastructure mobilization capability throughout Southern Africa.
          </p>

          {/* View Mode Toggle Tabs */}
          <div className="mx-auto mt-6 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 p-1">
            <button
              onClick={() => {
                setActiveTab('continental');
                setSelectedRegion('zaf');
              }}
              className={`px-3 sm:px-4 py-2 text-center text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'continental'
                  ? 'bg-[#0A3670] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>Southern Africa Footprint</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20">SADC</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('provincial');
                setSelectedRegion('gauteng');
              }}
              className={`px-3 sm:px-4 py-2 text-center text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeTab === 'provincial'
                  ? 'bg-[#0A3670] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>South Africa Provincial Reach</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20">Provinces</span>
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MAP & REGIONAL OVERVIEW GRID
        ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Map Container */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl p-4 sm:p-8 border border-neutral-200 shadow-xs relative">
            
            {activeTab === 'continental' ? (
              /* ─── TAB 1: CONTINENTAL AFRICA & SOUTHERN AFRICA FOOTPRINT ─── */
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[480px] aspect-[1/1.15] relative">
                  <svg
                    viewBox="0 0 500 580"
                    className="w-full h-full drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Definitions for map gradients / patterns */}
                    <defs>
                      <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    {/* ─── CONTINENT BASE SHAPES (GREY - NON-OPERATIONAL REGIONS) ─── */}
                    <g fill="#CBD5E1" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round">
                      
                      {/* Morocco & Western Sahara */}
                      <path 
                        d="M105,45 L135,32 L150,55 L125,95 L95,145 L70,150 L60,120 L80,75 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Morocco & Western Sahara</title>
                      </path>

                      {/* Algeria */}
                      <path 
                        d="M135,32 L205,30 L220,55 L200,105 L180,165 L125,160 L125,95 L150,55 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Algeria</title>
                      </path>

                      {/* Tunisia */}
                      <path 
                        d="M205,30 L220,18 L228,38 L220,55 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Tunisia</title>
                      </path>

                      {/* Libya */}
                      <path 
                        d="M220,55 L228,38 L305,58 L320,85 L320,160 L240,160 L200,105 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Libya</title>
                      </path>

                      {/* Egypt */}
                      <path 
                        d="M320,85 L395,85 L390,155 L320,160 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Egypt</title>
                      </path>

                      {/* Mauritania, Senegal, Mali, Guinea, West Africa Bulge */}
                      <path 
                        d="M60,120 L95,145 L125,160 L125,210 L160,210 L155,255 L120,255 L90,250 L65,225 L45,175 L50,140 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>West Africa (Mauritania, Senegal, Mali, Guinea)</title>
                      </path>

                      {/* Niger & Chad */}
                      <path 
                        d="M180,165 L240,160 L320,160 L315,225 L285,260 L225,260 L210,215 L160,210 L180,165 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Niger & Chad</title>
                      </path>

                      {/* Nigeria, Ghana, Ivory Coast coastal arc */}
                      <path 
                        d="M120,255 L155,255 L210,255 L230,285 L180,285 L140,280 L120,255 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Gulf of Guinea (Nigeria, Ghana, Ivory Coast)</title>
                      </path>

                      {/* Sudan & South Sudan */}
                      <path 
                        d="M320,160 L390,155 L410,205 L375,265 L335,265 L315,225 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Sudan & South Sudan</title>
                      </path>

                      {/* Horn of Africa: Ethiopia, Eritrea, Djibouti, Somalia */}
                      <path 
                        d="M390,155 L425,185 L475,220 L450,280 L395,285 L375,265 L410,205 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Horn of Africa (Ethiopia, Somalia, Eritrea)</title>
                      </path>

                      {/* Central Africa: Cameroon, CAR, Gabon, Congo, DRC */}
                      <path 
                        d="M230,285 L285,260 L335,265 L370,290 L360,365 L300,395 L255,385 L240,335 L225,305 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Central Africa & DRC</title>
                      </path>

                      {/* East Africa: Kenya, Uganda, Tanzania */}
                      <path 
                        d="M375,265 L395,285 L450,280 L420,335 L405,395 L360,395 L360,365 L370,290 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>East Africa (Kenya, Tanzania, Uganda)</title>
                      </path>

                      {/* Angola */}
                      <path 
                        d="M240,335 L255,385 L300,395 L300,440 L248,440 L240,375 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Angola</title>
                      </path>

                      {/* Madagascar */}
                      <path 
                        d="M445,410 L470,435 L455,505 L435,510 L430,460 Z" 
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Madagascar</title>
                      </path>
                    </g>

                    {/* ─── SOUTHERN AFRICA OPERATIONAL FOOTPRINT (SOLID DEEP NAVY #0A3670) ─── */}
                    <g className="cursor-pointer">
                      
                      {/* Zambia */}
                      <path 
                        d="M300,395 L360,395 L385,410 L375,445 L320,445 L300,440 Z" 
                        fill={selectedRegion === 'zmb' ? '#07244A' : '#0A3670'}
                        stroke="#FFFFFF" 
                        strokeWidth="1.4"
                        onClick={() => setSelectedRegion('zmb')}
                        className="transition-all hover:brightness-110"
                      >
                        <title>Zambia - SADC Operational Capability</title>
                      </path>

                      {/* Mozambique */}
                      <path 
                        d="M385,410 L405,395 L420,440 L395,495 L375,545 L365,545 L355,510 L375,445 Z" 
                        fill={selectedRegion === 'moz' ? '#07244A' : '#0A3670'}
                        stroke="#FFFFFF" 
                        strokeWidth="1.4"
                        onClick={() => setSelectedRegion('moz')}
                        className="transition-all hover:brightness-110"
                      >
                        <title>Mozambique - Established Regional Footprint</title>
                      </path>

                      {/* Zimbabwe */}
                      <path 
                        d="M320,445 L375,445 L375,495 L345,510 L325,480 Z" 
                        fill={selectedRegion === 'zwe' ? '#07244A' : '#0A3670'}
                        stroke="#FFFFFF" 
                        strokeWidth="1.4"
                        onClick={() => setSelectedRegion('zwe')}
                        className="transition-all hover:brightness-110"
                      >
                        <title>Zimbabwe - Established Operations</title>
                      </path>

                      {/* Namibia */}
                      <path 
                        d="M248,440 L300,440 L320,445 L300,470 L295,530 L265,535 L248,440 Z" 
                        fill={selectedRegion === 'nam' ? '#07244A' : '#0A3670'}
                        stroke="#FFFFFF" 
                        strokeWidth="1.4"
                        onClick={() => setSelectedRegion('nam')}
                        className="transition-all hover:brightness-110"
                      >
                        <title>Namibia - SADC Operational Capability</title>
                      </path>

                      {/* Botswana */}
                      <path 
                        d="M295,450 L320,445 L325,480 L345,510 L315,530 L295,530 Z" 
                        fill={selectedRegion === 'bwa' ? '#07244A' : '#0A3670'}
                        stroke="#FFFFFF" 
                        strokeWidth="1.4"
                        onClick={() => setSelectedRegion('bwa')}
                        className="transition-all hover:brightness-110"
                      >
                        <title>Botswana - Established Operations</title>
                      </path>

                      {/* South Africa (Primary Base & Head Office) */}
                      <path 
                        d="M265,535 L295,530 L315,530 L345,510 L355,510 L365,545 L375,545 L360,575 L335,595 L305,605 L280,590 L265,535 Z" 
                        fill={selectedRegion === 'zaf' ? '#07244A' : '#0A3670'}
                        stroke="#FFFFFF" 
                        strokeWidth="1.6"
                        onClick={() => setSelectedRegion('zaf')}
                        className="transition-all hover:brightness-110"
                      >
                        <title>South Africa - National Head Office & Delivery Corridors</title>
                      </path>

                      {/* Lesotho enclave outline */}
                      <circle cx="340" cy="565" r="7" fill="#0A3670" stroke="#FFFFFF" strokeWidth="1.2" />
                      
                      {/* Eswatini enclave outline */}
                      <circle cx="360" cy="535" r="5" fill="#0A3670" stroke="#FFFFFF" strokeWidth="1" />
                    </g>

                    {/* ─── HEAD OFFICE PINPOINT (MIDRAND, GAUTENG) ─── */}
                    <g transform="translate(332, 524)" className="cursor-pointer" onClick={() => setSelectedRegion('zaf')}>
                      <circle cx="0" cy="0" r="10" fill="#EA580C" opacity="0.3" className="animate-ping" />
                      <circle cx="0" cy="0" r="5" fill="#EA580C" stroke="#FFFFFF" strokeWidth="1.5" />
                    </g>

                    {/* Midrand Label on Map */}
                    <g transform="translate(342, 528)">
                      <rect x="0" y="-12" width="94" height="18" rx="4" fill="#0F172A" opacity="0.85" />
                      <text x="6" y="0" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                        Midrand HQ
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Legend matching user reference image */}
                <div className="w-full mt-4 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-xs bg-[#0A3670] flex-shrink-0"></span>
                    <span className="font-semibold text-neutral-800">
                      Registered offices / Established operations
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-600 flex-shrink-0"></span>
                    <span className="font-semibold text-neutral-800">
                      Corporate Head Office (Midrand)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-500">
                    <span className="w-3.5 h-3.5 rounded-xs bg-neutral-300 flex-shrink-0"></span>
                    <span>Continental Reach</span>
                  </div>
                </div>
              </div>
            ) : (
              /* ─── TAB 2: SOUTH AFRICA PROVINCIAL CORRIDORS ─── */
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[500px] aspect-[1.2/1] relative">
                  <svg
                    viewBox="0 0 540 450"
                    className="w-full h-full drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* South Africa Provinces Map */}
                    <g stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" className="cursor-pointer">
                      
                      {/* Northern Cape (Grey / Expansion) */}
                      <path
                        d="M40,160 L140,140 L195,185 L180,265 L125,295 L40,240 Z"
                        fill="#CBD5E1"
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Northern Cape</title>
                      </path>

                      {/* Western Cape (Grey / Expansion) */}
                      <path
                        d="M40,240 L125,295 L150,340 L130,400 L80,410 L45,340 Z"
                        fill="#CBD5E1"
                        className="hover:fill-neutral-400 transition-colors"
                      >
                        <title>Western Cape</title>
                      </path>

                      {/* Eastern Cape (ACTIVE - e.g. Steytlerville SAPS) */}
                      <path
                        d="M150,340 L240,300 L285,320 L270,390 L180,400 L130,400 Z"
                        fill={selectedRegion === 'eastern_cape' ? '#07244A' : '#0A3670'}
                        onClick={() => setSelectedRegion('eastern_cape')}
                        className="hover:brightness-110 transition-colors"
                      >
                        <title>Eastern Cape - Active Civic & Police Infrastructure</title>
                      </path>

                      {/* Free State */}
                      <path
                        d="M195,185 L285,170 L305,245 L250,285 L180,265 Z"
                        fill={selectedRegion === 'mpumalanga' ? '#07244A' : '#1E4E8C'}
                        onClick={() => setSelectedRegion('mpumalanga')}
                        className="hover:brightness-110 transition-colors"
                      >
                        <title>Free State - Transport Corridors</title>
                      </path>

                      {/* KwaZulu-Natal */}
                      <path
                        d="M285,240 L345,210 L370,260 L340,330 L285,320 L250,285 Z"
                        fill={selectedRegion === 'mpumalanga' ? '#07244A' : '#1E4E8C'}
                        onClick={() => setSelectedRegion('mpumalanga')}
                        className="hover:brightness-110 transition-colors"
                      >
                        <title>KwaZulu-Natal - Coastal Infrastructure</title>
                      </path>

                      {/* North West (ACTIVE - e.g. NWU Lecture Halls) */}
                      <path
                        d="M140,140 L245,110 L260,165 L200,185 Z"
                        fill={selectedRegion === 'north_west' ? '#07244A' : '#0A3670'}
                        onClick={() => setSelectedRegion('north_west')}
                        className="hover:brightness-110 transition-colors"
                      >
                        <title>North West - NWU Lecture Halls & Civic Infrastructure</title>
                      </path>

                      {/* Gauteng (HEAD OFFICE & MAJOR INFRASTRUCTURE) */}
                      <path
                        d="M260,140 L305,130 L315,165 L275,175 Z"
                        fill={selectedRegion === 'gauteng' ? '#C2410C' : '#EA580C'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        onClick={() => setSelectedRegion('gauteng')}
                        className="hover:brightness-110 transition-colors drop-shadow-md"
                      >
                        <title>Gauteng - National Head Office & Primary Infrastructure Hub</title>
                      </path>

                      {/* Mpumalanga */}
                      <path
                        d="M305,130 L375,120 L385,185 L345,210 L305,175 Z"
                        fill={selectedRegion === 'mpumalanga' ? '#07244A' : '#1E4E8C'}
                        onClick={() => setSelectedRegion('mpumalanga')}
                        className="hover:brightness-110 transition-colors"
                      >
                        <title>Mpumalanga - Infrastructure & Mining Corridors</title>
                      </path>

                      {/* Limpopo (ACTIVE - e.g. Mankweng Taxi Rank) */}
                      <path
                        d="M245,110 L340,50 L385,100 L305,130 L260,110 Z"
                        fill={selectedRegion === 'limpopo' ? '#07244A' : '#0A3670'}
                        onClick={() => setSelectedRegion('limpopo')}
                        className="hover:brightness-110 transition-colors"
                      >
                        <title>Limpopo - Mankweng Intermodal Taxi Rank</title>
                      </path>

                      {/* Lesotho Enclave */}
                      <path
                        d="M250,285 L285,270 L285,320 L240,300 Z"
                        fill="#CBD5E1"
                      >
                        <title>Lesotho</title>
                      </path>
                    </g>

                    {/* Gauteng Head Office Indicator Marker */}
                    <g transform="translate(287, 152)" className="cursor-pointer" onClick={() => setSelectedRegion('gauteng')}>
                      <circle cx="0" cy="0" r="12" fill="#EA580C" opacity="0.3" className="animate-ping" />
                      <circle cx="0" cy="0" r="6" fill="#EA580C" stroke="#FFFFFF" strokeWidth="2" />
                    </g>

                    <g transform="translate(300, 150)">
                      <rect x="0" y="-12" width="120" height="20" rx="4" fill="#0F172A" />
                      <text x="8" y="2" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        HBC Midrand HQ
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Provincial Legend */}
                <div className="w-full mt-4 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-orange-600 flex-shrink-0"></span>
                    <span className="font-bold text-neutral-900">Gauteng (Head Office & Central Depot)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-xs bg-[#0A3670] flex-shrink-0"></span>
                    <span className="font-semibold text-neutral-800">Delivered Civic & Infrastructure Projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <span className="w-3 h-3 rounded-xs bg-neutral-300 flex-shrink-0"></span>
                    <span>National Capacity</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Regional Capability Pillars */}
          <div className="lg:col-span-5 space-y-6">

            {/* Core Capability Pillars in Territory */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              
              <div className="min-w-0 rounded-xl border border-neutral-200 bg-neutral-50 p-3 sm:p-4 space-y-2">
                <div className="flex min-w-0 items-start gap-2 text-xs font-bold leading-snug text-neutral-900">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A3670]" />
                  <span>National CIDB Grades 9GB / 9CE</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Authorized to tender and lead public infrastructure works up to R200M+ across all provinces.
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-neutral-200 bg-neutral-50 p-3 sm:p-4 space-y-2">
                <div className="flex min-w-0 items-start gap-2 text-xs font-bold leading-snug text-neutral-900">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                  <span>In-House Fleet Mobility</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Heavy plant depot in Midrand with rapid cross-provincial and SADC deployment capability.
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-neutral-200 bg-neutral-50 p-3 sm:p-4 space-y-2">
                <div className="flex min-w-0 items-start gap-2 text-xs font-bold leading-snug text-neutral-900">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>100% Black Owned</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Deep socio-economic commitment with mandatory local youth and SMME site participation.
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-neutral-200 bg-neutral-50 p-3 sm:p-4 space-y-2">
                <div className="flex min-w-0 items-start gap-2 text-xs font-bold leading-snug text-neutral-900">
                  <Layers className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span>Turnkey Multidisciplinary</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Seamless execution combining civil engineering, roads, bridges, and electrical/mechanical services.
                </p>
              </div>

            </div>

            {/* Head Office Address Callout */}
            <div className="flex flex-col items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-100/70 p-4 text-xs sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-bold text-neutral-900">Head Office Coordinates:</span>{' '}
                <span className="text-neutral-600">4 Celliers Road, Glen Austen, Midrand</span>
              </div>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('contact')}
                  className="font-bold text-[#0A3670] hover:underline flex items-center gap-1 flex-shrink-0"
                >
                  <span>Directions</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
