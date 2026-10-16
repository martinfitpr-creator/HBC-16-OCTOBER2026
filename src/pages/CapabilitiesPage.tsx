import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  Truck, 
  HardHat, 
  Users, 
  Award, 
  FileCheck, 
  ArrowRight,
  ClipboardList
} from 'lucide-react';
import { PageId } from '../types';
import { companyDetails } from '../data/companyData';
import { SectionHeader } from '../components/SectionHeader';
import capabilitiesHeroBg from '../assets/images/capabilities-crane-site.png';

interface CapabilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={capabilitiesHeroBg}
            alt="HBC Construction Capabilities - Tower Crane Infrastructure Site"
            className="w-full h-full object-cover object-center filter brightness-[0.40] contrast-105"
            loading="eager"
          />
          {/* Gradients to guarantee 100% text legibility and contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/45 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>Execution Strength & Accreditation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Capabilities Built for Major Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed max-w-2xl font-normal">
              Why HBC Construction delivers major projects: We combine commercial stability, material resources, modern plant fleets, and multidisciplinary engineering depth.
            </p>
          </div>
        </div>
      </section>

      {/* 1. CIDB Grading Breakdown */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="Construction Industry Development Board"
            title="CIDB Registration & Contractor Grading Profile"
            description="Our CIDB ratings demonstrate our financial standing, track record, and operational capacity to bid and deliver large-scale national and provincial public works tenders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grade 8GB */}
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 transition duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-neutral-900">8GB PE</span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900">General Building Operations</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Qualified for commercial, civic, correctional, hospital, and multi-storey institutional structures with tender capability up to R200 Million.
              </p>
            </div>

            {/* Grade 8CE */}
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 transition duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-neutral-900">8CE PE</span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900">Civil Engineering Infrastructure</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Approved for major arterial highways, bridge rehabilitation, bulk stormwater channels, earthworks, and municipal services up to R200 Million.
              </p>
            </div>

            {/* Grade 7EB */}
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 transition duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-neutral-900">7EB PE</span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900">Electrical Engineering (Building)</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Internal electrical reticulation, substation equipment, backup generators, and integrated building low-voltage systems up to R60 Million.
              </p>
            </div>

            {/* Grade 7ME */}
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 transition duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-neutral-900">7ME PE</span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900">Mechanical Engineering</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Central HVAC systems, industrial chillers, cold storage, ventilation ducting, and mechanical piping up to R60 Million.
              </p>
            </div>

            {/* Grade 7EP */}
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 transition duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-neutral-900">7EP PE</span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900">Electrical Infrastructure</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Medium and high-voltage power networks, streetlighting corridors, and overhead/underground distribution schemes up to R60 Million.
              </p>
            </div>

            {/* CRS Summary Card */}
            <div className="p-6 rounded-xl bg-neutral-900 text-white border border-neutral-800 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                  Verified Accreditation
                </div>
                <div className="text-lg font-bold text-white mt-1">CIDB Contractor Status</div>
                <p className="text-xs text-neutral-400 mt-2">
                  Audited track record verified by the South African Construction Industry Development Board (CIDB).
                </p>
              </div>
              <button
                onClick={onRequestQuote}
                className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider rounded transition"
              >
                Request Tender Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical & Material Capabilities */}
      <section className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Turnkey Execution"
            title="Combining Commercial, Material and Technical Strengths"
            description="Successful major infrastructure requires seamless alignment between commercial administration, material logistics, plant reliability, and technical site management."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <ClipboardList className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Project & Contract Management</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our registered civil engineers and construction project managers (Pr.CPM) utilize advanced project controls, Primavera, MS Project, and Earned Value Management to enforce critical paths, cost budgets, and milestone handovers.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• FIDIC, GCC 2015, and JBCC contract administration</li>
                <li className="flex items-center gap-1.5">• Rigorous monthly progress auditing & cost forecasting</li>
                <li className="flex items-center gap-1.5">• Proactive risk mitigation on complex brownfield sites</li>
              </ul>
            </div>

            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Heavy Plant & Equipment Fleet</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                HBC maintains a company-owned and managed fleet of modern heavy plant, minimizing project reliance on third-party availability and ensuring immediate deployment to sites.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• 20-35 Ton Tracked Excavators with rock breakers</li>
                <li className="flex items-center gap-1.5">• Heavy Motor Graders with laser levelling systems</li>
                <li className="flex items-center gap-1.5">• 10m³ Tipper Trucks & 16,000L Water Bowsers</li>
              </ul>
            </div>

            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Subcontractor & Supplier Relations</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Long-standing credit facilities and preferential partnerships with South Africa's premier cement, steel, precast, asphalt, and aggregate suppliers guarantee uninterrupted material supply.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Established tier-1 material supplier supply lines</li>
                <li className="flex items-center gap-1.5">• Ethical, on-time payment terms for emerging SMMEs</li>
                <li className="flex items-center gap-1.5">• Structured technical mentoring for specialist trades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Community Engagement & Site Harmony */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionHeader
                eyebrow="Community Engagement"
                title="Seamless Community Liaison & Site Stability"
                description="Delivering large public infrastructure in South African townships and urban nodes requires culturally sensitive, transparent community engagement."
              />
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                HBC establishes structured Project Steering Committees (PSCs), Community Liaison Officers (CLOs), and fair local labour recruitment desks prior to breaking ground. By allocating meaningful project responsibility to youth and local SMMEs, we foster community ownership and eliminate site stoppages.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('social-responsibility')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700"
                >
                  <span>Explore Social Responsibility Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 space-y-4">
                <h4 className="text-lg font-bold text-white">The HBC Delivery Guarantee</h4>
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Single-point responsibility for multidisciplinary projects</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated site quality inspectors and full-time safety officers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Transparent commercial reporting aligned with client governance standards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Full compliance with Occupational Health and Safety (OHSA) requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need our company profile and CIDB certificates for tender vetting?</h3>
            <p className="text-xs sm:text-sm text-neutral-400">Our commercial desk will issue comprehensive compliance packs promptly.</p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex-shrink-0"
          >
            Request Compliance Pack
          </button>
        </div>
      </section>
    </div>
  );
};
