import React, { useState } from 'react';
import { Building2, ShieldCheck, CheckCircle2, Landmark, ArrowRight, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import ekurhuleniLogo from '../assets/clients/ekurhuleni.png';
import jdaLogo from '../assets/clients/jda.png';
import publicWorksLogo from '../assets/clients/public-works.png';
import tshwaneLogo from '../assets/clients/city-of-tshwane.png';
import dbsaLogo from '../assets/clients/dbsa.png';
import udTrucksLogo from '../assets/clients/ud-trucks.svg';
import jraLogo from '../assets/clients/jra.jpg';
import clientsIntroBg from '../assets/images/clients-roadworks-background.jpg';
import './SomeOfOurClients.css';

export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  entity: string;
  category: string;
  logoUrl: string;
  aspectClass?: string;
  highlight: string;
  scope: string[];
}

export const clientsList: ClientItem[] = [
  {
    id: 'ud-trucks',
    name: 'UD Trucks Southern Africa',
    shortName: 'UD Trucks',
    entity: 'Multinational Automotive & Commercial',
    category: 'Commercial & Industrial',
    logoUrl: udTrucksLogo,
    aspectClass: 'h-16 sm:h-20',
    highlight: 'Industrial paving, commercial workshops, fleet yard infrastructure and heavy-load testing facilities.',
    scope: ['Commercial Facilities', 'Heavy Duty Paving', 'Industrial Maintenance']
  },
  {
    id: 'public-works',
    name: 'Department of Public Works',
    shortName: 'Public Works (RSA)',
    entity: 'Republic of South Africa',
    category: 'National Government',
    logoUrl: publicWorksLogo,
    aspectClass: 'h-14 sm:h-16',
    highlight: 'National government precincts, public institutions, court infrastructure, and civic facilities.',
    scope: ['National Government Facilities', 'Public Institutional Buildings', 'Turnkey Construction']
  },
  {
    id: 'jda',
    name: 'Johannesburg Development Agency (JDA)',
    shortName: 'JDA',
    entity: 'City of Johannesburg SOC Ltd',
    category: 'Urban Renewal Agency',
    logoUrl: jdaLogo,
    aspectClass: 'h-14 sm:h-16',
    highlight: 'Strategic inner-city transit hubs, commuter interchanges, urban upgrading, and community recreation centers.',
    scope: ['Intermodal Transit Nodes', 'Jeppe Station Precinct', 'Civic Facilities']
  },
  {
    id: 'city-of-tshwane',
    name: 'City of Tshwane Metropolitan Municipality',
    shortName: 'City of Tshwane',
    entity: 'Capital Metropolitan Council',
    category: 'Metropolitan Municipality',
    logoUrl: tshwaneLogo,
    aspectClass: 'h-16 sm:h-20',
    highlight: 'Municipal civil works, arterial road rehabilitation, stormwater management, and public administration facilities.',
    scope: ['Arterial Roads', 'Stormwater Infrastructure', 'Municipal Engineering']
  },
  {
    id: 'dbsa',
    name: 'Development Bank of Southern Africa (DBSA)',
    shortName: 'DBSA',
    entity: 'Development Finance Institution',
    category: 'Infrastructure Finance & Delivery',
    logoUrl: dbsaLogo,
    aspectClass: 'h-16 sm:h-20',
    highlight: 'Accelerated community infrastructure programs, educational complexes, and healthcare infrastructure.',
    scope: ['Education Precincts', 'Healthcare Infrastructure', 'Regional Social Programs']
  },
  {
    id: 'jra',
    name: 'Johannesburg Road Agency (JRA)',
    shortName: 'Joburg / JRA',
    entity: 'City of Johannesburg',
    category: 'Roads & Civil Infrastructure',
    logoUrl: jraLogo,
    aspectClass: 'h-14 sm:h-18',
    highlight: 'Major road resurfacing, bridge maintenance, stormwater drainage channels, and public pedestrian safety corridors.',
    scope: ['Civil Roadworks', 'Bridge & Drainage Works', 'Traffic Infrastructure']
  },
  {
    id: 'ekurhuleni',
    name: 'Ekurhuleni Metropolitan Municipality',
    shortName: 'City of Ekurhuleni',
    entity: 'Metropolitan Municipality',
    category: 'Metropolitan Municipality',
    logoUrl: ekurhuleniLogo,
    aspectClass: 'h-16 sm:h-20',
    highlight: 'East Rand economic corridor engineering, municipal service hubs, arterial paving, and civic infrastructure.',
    scope: ['Municipal Civil Works', 'Substation Facilities', 'Township Urban Upgrades']
  }
];

interface SomeOfOurClientsProps {
  onNavigate?: (page: any) => void;
  onRequestQuote?: () => void;
  condensed?: boolean;
}

export const SomeOfOurClients: React.FC<SomeOfOurClientsProps> = ({
  onNavigate,
  onRequestQuote,
  condensed = false
}) => {
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);

  return (
    <section id="some-of-our-clients" className="border-b border-neutral-200 bg-neutral-50">
      <div className="relative isolate overflow-hidden bg-neutral-950 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <img
          src={clientsIntroBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/60" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <SectionHeader
            eyebrow="Trusted Partnerships"
            title="Some of Our Clients"
            description="HBC Construction takes pride in delivering institutional-grade civil, structural, and infrastructure contracts for South Africa's most prominent public entities, metropolitan municipalities, development agencies, and commercial leaders."
            descriptionClassName="text-white"
            align="center"
            dark
          />

          <div className="flex flex-shrink-0 items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-neutral-950/35 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Verified On-Site Delivery Track Record</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:space-y-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div
          className="clients-marquee"
          role="region"
          aria-label="Client logos moving from right to left; hover or focus to pause"
          tabIndex={0}
        >
          <div className="clients-marquee__track">
            {[false, true].map((isDuplicate) => (
              <ul
                key={isDuplicate ? 'duplicate' : 'clients'}
                className="clients-marquee__group"
                aria-hidden={isDuplicate || undefined}
              >
                {clientsList.map((client) => (
                  <li key={client.id} className="clients-marquee__item">
                    <img src={client.logoUrl} alt="" loading="lazy" decoding="async" />
                    <span>{client.shortName}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clientsList.map((client) => {
            const isSelected = selectedClient?.id === client.id;
            return (
              <div
                key={client.id}
                onClick={() => setSelectedClient(isSelected ? null : client)}
                className={`relative group bg-white rounded-2xl border p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer active:scale-[0.99] ${
                  isSelected 
                    ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-md transform -translate-y-1' 
                    : 'border-neutral-200 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Sector Badge */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors">
                    {client.category}
                  </span>
                </div>

                {/* Logo Canvas Wrapper */}
                <div className="h-20 sm:h-28 flex items-center justify-center p-2 rounded-xl bg-neutral-50/70 border border-neutral-100 group-hover:bg-white transition-colors">
                  <img
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
                    className={`max-w-full max-h-full object-contain filter drop-shadow-2xs transition-transform duration-300 group-hover:scale-105`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Client Identification & Meta */}
                <div className="pt-4 sm:pt-5 space-y-1.5 sm:space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {client.name}
                  </h3>
                  <div className="text-xs text-neutral-500 font-medium line-clamp-1">
                    {client.entity}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pt-0.5 sm:pt-1 line-clamp-2">
                    {client.highlight}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {client.scope.slice(0, 2).map((item, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-600 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 8th Card: Partner With HBC CTA */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-500">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-500">
                Partner With HBC
              </div>
              <h4 className="text-lg font-extrabold text-white leading-snug">
                Need Tier-1 Delivery Capacity?
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Contact our commercial estimating and tendering office for pre-qualification submissions, joint ventures, and municipal tenders.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              {onRequestQuote ? (
                <button
                  onClick={onRequestQuote}
                  className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : onNavigate ? (
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : null}
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* Interactive Detail Drawer / Modal when a client is clicked */}
        {selectedClient && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-orange-200 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-neutral-100">
              <div className="flex items-center gap-5">
                <div className="w-24 h-20 p-2 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                  <img
                    src={selectedClient.logoUrl}
                    alt={selectedClient.name}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <span>{selectedClient.category}</span>
                    <span>•</span>
                    <span className="text-neutral-500">{selectedClient.entity}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-1">
                    {selectedClient.name}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setSelectedClient(null)}
                className="text-xs font-bold text-neutral-500 hover:text-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition"
              >
                Close View
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-center">
              <div className="md:col-span-2 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Engagement Overview & Infrastructure Capability
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {selectedClient.highlight} HBC Construction executes civil works under strict quality, safety, and project lifecycle milestones conforming to GCC, JBCC, and NEC3/4 contract specifications.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedClient.scope.map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Explore Project Register
                </div>
                <p className="text-xs text-neutral-600">
                  View completed construction contracts and civic infrastructure delivered across South Africa.
                </p>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('projects')}
                    className="w-full py-2 px-3 bg-neutral-900 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition text-center flex items-center justify-center gap-1.5"
                  >
                    <span>View Project Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
