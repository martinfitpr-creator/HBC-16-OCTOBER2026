import React from 'react';
import { 
  Users, 
  HeartHandshake, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Target,
  ShieldCheck
} from 'lucide-react';
import { PageId } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import communitySunsetImg from '../assets/images/community-sunset.jpg';
import skillsTransferImg from '../assets/images/skills-transfer.png';

interface SocialResponsibilityPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const SocialResponsibilityPage: React.FC<SocialResponsibilityPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={communitySunsetImg}
            alt="HBC Construction Community Development in South Africa"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-950/65"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Community Investment & Transformation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Building More Than Infrastructure.
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              True construction success leaves communities stronger, more skilled, and economically resilient long after our heavy plant has demobilized from site.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="Genuine Socio-Economic Impact"
                title="Transforming Lives Through Real Site Opportunity"
                description="As a 100% black-owned South African enterprise, HBC Construction views every construction site as a catalyst for local economic upliftment, poverty alleviation, and durable human capability."
              />

              <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Infrastructure delivery cannot be divorced from the community that hosts it. When HBC constructs a road in Soweto, a bridge in Alexandra, a clinic in Midrand, or a police station in the Eastern Cape, we do not merely bring external labor. We establish an active community partnership.
                </p>
                <p>
                  We actively identify, recruit, and train local youth, giving them tangible project responsibilities ranging from site surveying assistance and materials inventory control to specialist equipment operation. We mentor local emerging sub-contractors so that they graduate into self-sustaining commercial enterprises.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-900 text-xs sm:text-sm font-medium flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Empowerment Through Responsibility:</strong> Rather than relegating youth to menial site clean-up, HBC specifically allocates measurable, supervised technical project responsibility to young men and women on our sites, mentoring the next generation of civil engineering professionals.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 relative">
                <img
                  src={skillsTransferImg}
                  alt="Bridge construction - Skills Transfer & Sustainable Livelihoods"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Local Site Participation</div>
                  <div className="text-lg font-bold">Skills Transfer & Sustainable Livelihoods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Community Pillars */}
      <section className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            eyebrow="Key Impact Initiatives"
            title="Six Pillars of Responsible Community Investment"
            description="Our community contribution framework focuses on measurable, verifiable social upliftment programs across our national project footprint."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. SMME Development */}
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-base text-neutral-900">SMME Development & Incubation</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Subcontracting meaningful work packages to emerging local businesses (CIDB Grades 1 to 4). We assist them with site methodology, cash flow management, material procurement, and statutory compliance.
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Structured subcontracting quotas on every contract</li>
                <li className="flex items-center gap-1.5">• Commercial mentoring in pricing and invoicing</li>
              </ul>
            </div>

            {/* 2. ABET */}
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-base text-neutral-900">ABET (Adult Basic Education & Training)</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Facilitating basic literacy, numeracy, and foundational construction education for on-site general laborers, empowering them to read technical drawings, understand safety manuals, and progress in their careers.
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Workplace numeracy and functional English</li>
                <li className="flex items-center gap-1.5">• Construction measurement & trade basics</li>
              </ul>
            </div>

            {/* 3. HIV & Wellness Awareness */}
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-base text-neutral-900">HIV / Wellness & Health Education</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Regular on-site mobile health screening, voluntary counseling, HIV/AIDS educational workshops, mental health awareness, and chronic illness management support for workforce members and their families.
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Confidential on-site voluntary testing clinics</li>
                <li className="flex items-center gap-1.5">• Nutrition, ergonomics and fatigue management</li>
              </ul>
            </div>

            {/* 4. Youth Development */}
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-base text-neutral-900">Youth Development & Mentorship</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Allocating real project responsibilities to unemployed youth from the project ward. Youth receive experiential on-the-job training in plant operation, surveying, bricklaying, steel fixing, and concrete finishing.
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Assigned supervisory mentors for each young recruit</li>
                <li className="flex items-center gap-1.5">• Accredited trade training certificates issued</li>
              </ul>
            </div>

            {/* 5. Local Project Participation */}
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-base text-neutral-900">Local Project Participation</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Working in conjunction with local Ward Councillors and Community Liaison Officers (CLOs) to ensure fair, transparent rotation of employment opportunities, avoiding favoritism and ensuring community peace.
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Transparent community ballot registration</li>
                <li className="flex items-center gap-1.5">• Active engagement with local community forums</li>
              </ul>
            </div>

            {/* 6. Economic Empowerment */}
            <div className="p-7 rounded-xl bg-white border border-neutral-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-base text-neutral-900">Sustainable Economic Empowerment</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Procuring local security, catering, sanitation, transport, and site logistics from township-based suppliers, ensuring the economic multiplier effect remains directly within the project host area.
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-1.5">• Local procurement targets exceeding 30%</li>
                <li className="flex items-center gap-1.5">• Timely payments supporting local business cash flows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Principles */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Partnering on public-sector infrastructure tenders?</h3>
            <p className="text-xs sm:text-sm text-neutral-400">HBC prepares compliant socio-economic development (SED) and SMME subcontracting plans for all bids.</p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex-shrink-0"
          >
            Consult on SED Plans
          </button>
        </div>
      </section>
    </div>
  );
};
