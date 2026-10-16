import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  HardHat, 
  FileCheck, 
  Leaf, 
  Users, 
  ArrowRight,
  ClipboardCheck,
  Building
} from 'lucide-react';
import { PageId } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import qualityHeroBg from '../assets/images/mamelodi-fire-station.jpg';
import safetyBannerImg from '../assets/images/hammanskraal-kudube-stormwater.jpg';

interface QualitySafetyPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const QualitySafetyPage: React.FC<QualitySafetyPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={qualityHeroBg}
            alt="HBC Construction Quality and Safety Standards"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Operational Integrity</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Quality & Safety Governance
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              At HBC Construction (Pty) Ltd, exceptional engineering performance is inseparable from rigorous quality control and an uncompromising zero-harm safety culture.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          1. QUALITY MANAGEMENT SECTION
          "Quality Is Built Into Every Project"
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <Award className="w-4 h-4" />
              <span>Quality Assurance System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Quality Is Built Into Every Project
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              HBC Construction maintains an effective Quality Assurance System structured in strict alignment with ISO 9001 principles. Rather than treating quality as an afterthought during final snagging, quality management is embedded into procurement, site methodology, concrete testing, and subcontractor supervision.
            </p>
          </div>

          {/* 9 Quality Pillars as specified */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Client Satisfaction',
                desc: 'Delivering infrastructure precisely to client specifications, operational requirements, and agreed project timelines.',
                icon: <Users className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Quality-Based Management',
                desc: 'Standardised inspection test plans (ITPs), formal site handover checklists, and systematic project documentation.',
                icon: <ClipboardCheck className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Continuous Improvement',
                desc: 'Iterative review of project outcomes, technical lessons learned, and active refinement of construction processes.',
                icon: <Award className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Compliance with Applicable Standards',
                desc: 'Adherence to SANS (South African National Standards), COLTO civil specifications, and the National Building Regulations (NBR).',
                icon: <FileCheck className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Legal and Statutory Compliance',
                desc: 'Strict conformity with municipal bylaws, environmental authorizations, water-use licenses, and statutory labor laws.',
                icon: <ShieldCheck className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Modern Construction Techniques',
                desc: 'Application of laser leveling, automated concrete batching verification, and high-performance material systems.',
                icon: <Building className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Effective Human Resource Management',
                desc: 'Deploying qualified engineers, certified site agents, experienced foremen, and ongoing skills development programs.',
                icon: <Users className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Strong Communication Channels',
                desc: 'Transparent progress reporting, clear documentation, and proactive stakeholder coordination between client, engineer, and contractor.',
                icon: <ClipboardCheck className="w-5 h-5 text-orange-600" />
              },
              {
                title: 'Reliable Subcontractor & Supplier Relations',
                desc: 'Vetting partner trades rigorously, auditing raw material certifications, and enforcing shared quality accountability.',
                icon: <CheckCircle2 className="w-5 h-5 text-orange-600" />
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 hover:bg-white transition duration-200 space-y-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-base text-neutral-900">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Explicit ISO 9001 Alignment Notice */}
          <div className="p-5 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs sm:text-sm flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-neutral-900">Quality Framework Alignment:</strong> HBC Construction maintains an effective Quality Assurance System aligned with international ISO 9001 quality management principles across our project delivery lifecycles, ensuring traceable material testing, certified subcontractor oversight, and client accountability.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SAFETY SECTION
          "Safety Is Not Optional."
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-neutral-950 text-white border-b border-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <HardHat className="w-4 h-4" />
              <span>Zero-Harm Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Safety Is Not Optional.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Every individual working on or visiting an HBC Construction site has the absolute right to return home safely at the end of every shift. We enforce proactive risk identification, daily toolbox briefings, mandatory certified PPE, and independent safety audits.
            </p>
          </div>

          {/* Core Safety Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Employee Safety',
                desc: 'Comprehensive hazard identification and risk assessment (HIRA), certified personal protective equipment (PPE), and continuous on-site safety training.'
              },
              {
                title: 'Client & Community Safety',
                desc: 'Strict site perimeter fencing, traffic accommodation for road works, dust suppression, and secure public exclusion zones around deep excavations.'
              },
              {
                title: 'Site Safety Protocols',
                desc: 'Daily pre-shift toolbox talks, safe work method statements (SWMS), fall-arrest systems for working at heights, and calibrated plant inspections.'
              },
              {
                title: 'Environmental Responsibility',
                desc: 'Containment of hydrocarbons, silt fence erosion barriers, responsible spoil disposal, and compliant hazardous waste handling on every site.'
              },
              {
                title: 'Safe Procurement',
                desc: 'Rigorous vetting of heavy machinery, lifting tackle, scaffolding, and electrical equipment prior to mobilization to any active contract.'
              },
              {
                title: 'Safe Project Delivery',
                desc: 'Dedicated full-time registered safety officers (SACPCMP registered) conducting weekly audits and holding zero-tolerance site authority.'
              }
            ].map((safetyItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3 hover:border-red-600/50 transition duration-200"
              >
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Protocol 0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-white">{safetyItem.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{safetyItem.desc}</p>
              </div>
            ))}
          </div>

          {/* Construction Imagery Banner */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-neutral-800 shadow-2xl">
            <img
              src={safetyBannerImg}
              alt="HBC Construction Safety Enforcement on South African Infrastructure Site"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent flex items-center p-8 sm:p-12">
              <div className="max-w-lg space-y-3">
                <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded">
                  Occupational Health & Safety Act (OHSA)
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Zero Tolerance for Unsafe Acts
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Every worker on an HBC site holds the full authority to stop work immediately if conditions are deemed unsafe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Strip */}
      <section className="py-14 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Need our SHEQ files and Quality Plan for a tender submission?</h3>
            <p className="text-xs sm:text-sm text-neutral-600">Our safety compliance team will provide project-specific safety plans promptly.</p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition flex-shrink-0"
          >
            Request SHEQ Documentation
          </button>
        </div>
      </section>
    </div>
  );
};
