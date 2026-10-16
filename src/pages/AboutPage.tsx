import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  ClipboardCheck, 
  AlertTriangle,
  ArrowRight,
  FileText,
  Briefcase
} from 'lucide-react';
import { PageId } from '../types';
import { 
  companyDetails, 
  companyVision, 
  companyMission, 
  companyMissionStatement,
  coreValues, 
  businessPillars,
  companyStatistics 
} from '../data/companyData';
import { SectionHeader } from '../components/SectionHeader';
import { SomeOfOurClients } from '../components/SomeOfOurClients';
import aboutHeroBg from '../assets/images/about-hero-bg.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Customers': return <Users className="w-5 h-5 text-orange-600" />;
      case 'People': return <HeartHandshake className="w-5 h-5 text-orange-600" />;
      case 'Leadership': return <Award className="w-5 h-5 text-orange-600" />;
      case 'Integrity': return <ShieldCheck className="w-5 h-5 text-orange-600" />;
      case 'Quality': return <CheckCircle2 className="w-5 h-5 text-orange-600" />;
      case 'Accountability': return <ClipboardCheck className="w-5 h-5 text-orange-600" />;
      case 'Safety': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default: return <Award className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header with Real Site Background Image */}
      <section className="relative py-20 sm:py-28 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroBg}
            alt="HBC Construction Site Works"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-105"
          />
          {/* Subtle gradient overlay to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>About HBC Construction</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering South Africa’s Future With Purpose & Integrity
            </h1>
            <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed max-w-2xl font-normal">
              Established in 2008, HBC Construction (Pty) Ltd is a 100% black-owned multidisciplinary construction and infrastructure enterprise delivering high-impact civil and building projects across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Heritage */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl space-y-8 text-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: 'easeOut' }}
          >
            <SectionHeader
              eyebrow="Company Overview"
              title="A Trusted Infrastructure Contractor"
              description="HBC Construction (Pty) Ltd operates as a high-capacity multidisciplinary contractor. We specialize in taking complex civil engineering, institutional facilities, arterial roads, and municipal infrastructure projects from technical design and earthworks through to commissioned handover."
              align="center"
            />

            <div className="space-y-4 text-center text-sm leading-relaxed text-neutral-700 sm:text-base">
              <p>
                With CIDB Grade 8GB PE (General Building) and Grade 8CE PE (Civil Engineering) accreditations, HBC is authorized and equipped to undertake major infrastructure contracts exceeding R200 million. Complementary Grade 7 ratings in Electrical (EB/EP) and Mechanical Engineering (ME) allow us to execute comprehensive, self-performed infrastructure solutions without fragmentation.
              </p>
              <p>
                Headquartered in Midrand, Gauteng, our footprint spans national provincial corridors, urban revitalisation zones, and developing municipal nodes. We combine heavy equipment capital, experienced site agents, strict safety protocols, and deep commitment to local socio-economic transformation.
              </p>
            </div>

            {/* Highlights List */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 pt-2 text-center sm:grid-cols-2 lg:grid-cols-3">
              {[
                '100% Black-Owned South African Enterprise',
                'CIDB Grades: 8GB PE, 8CE PE, 7EB, 7ME, 7EP',
                'Over 30 Years of Construction Experience',
                'Strict Alignment with ISO 9001 Quality Principles',
                'Dedicated Youth & Local SMME Empowerment',
                'In-House Plant & Equipment Fleet'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-center text-xs font-semibold text-neutral-800 sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Sections */}
      <section className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Vision Callout */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white border border-neutral-800 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
                  <Target className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-medium tracking-normal text-neutral-100 leading-relaxed">
                  "{companyVision}"
                </blockquote>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center gap-2 text-xs font-semibold text-neutral-400">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Strategic Vision & Long-Term Aspiration</span>
              </div>
            </div>

            {/* Mission Callout */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <blockquote className="text-base sm:text-lg font-medium tracking-normal text-neutral-800 leading-relaxed">
                  "{companyMissionStatement}"
                </blockquote>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <div className="w-2 h-2 rounded-full bg-orange-600" />
                <span>HBC Construction (Pty) Ltd Mandate</span>
              </div>
            </div>
          </div>

          {/* Mission Strategic Focus Areas */}
          <div className="space-y-6 pt-4">
            <SectionHeader
              eyebrow="Mission Pillars"
              title="Delivering Impact Across Four Strategic Focus Areas"
              description="Our mission translates our broader societal commitment into operational execution across every site, tender, and commercial engagement."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyMission.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h4 className="font-extrabold text-neutral-900 text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Core Values"
            title="The Principles Guiding Every Project"
            description="Our organizational values guide how we negotiate tenders, protect workers on site, collaborate with municipal engineers, and deliver infrastructure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.name}
                className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-orange-500/50 hover:bg-white transition duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-orange-50 transition">
                  {getValueIcon(val.name)}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                  {val.name}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional & Commercial Clients */}
      <SomeOfOurClients onNavigate={onNavigate} onRequestQuote={onRequestQuote} />

      {/* Business Approach */}
      <section className="py-16 sm:py-20 bg-neutral-950 text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            dark
            eyebrow="Business Approach"
            title="Partnerships Built on Performance"
            description="We believe lasting commercial success is founded upon transparent relationships, honest pricing models, rigorous technical capabilities, and an unbending commitment to safety."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessPillars.map((pillar) => (
              <div key={pillar.number} className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
                <div className="text-3xl font-extrabold font-mono text-orange-500">{pillar.number}</div>
                <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{pillar.subtitle}</div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Action */}
      <section className="py-14 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Interested in our technical capability and plant fleet?</h3>
            <p className="text-xs sm:text-sm text-neutral-600">Review our CIDB grading, project management methodology and machinery resources.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('capabilities')}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
            >
              View Capabilities
            </button>
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
