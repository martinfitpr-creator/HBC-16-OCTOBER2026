import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Phone,
} from 'lucide-react';
import heroConstructionImg from '../assets/images/hero-highway-bridge-optimized.jpg';
import { PageId, ProjectItem, ServiceItem } from '../types';
import { companyDetails } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { GeographicFootprint } from '../components/GeographicFootprint';
import { SomeOfOurClients } from '../components/SomeOfOurClients';
import { projectsData } from '../data/projectsData';
import servicesIntroBg from '../assets/images/services-intro-bridge.jpg';
import projectsIntroBg from '../assets/images/projects-intro-warehouse.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onSelectProject?: (project: ProjectItem) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestQuote,
  onSelectProject,
  onSelectService
}) => {
  const [showAlternateHeroCopy, setShowAlternateHeroCopy] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const scrollRevealProps = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' as const }
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShowAlternateHeroCopy((showAlternate) => !showAlternate);
    }, 18000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          Large-scale construction, roads, bridges, heavy equipment
      ───────────────────────────────────────────────────────────── */}
      <section className="home-hero relative isolate flex min-h-[min(820px,calc(100svh_-_80px))] flex-col justify-between overflow-hidden bg-[#0A0F14] text-white">
        {/* Full-bleed construction photography with a layered, responsive contrast overlay. */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroConstructionImg}
            alt="HBC Construction bridge construction site with workers and concrete pump truck"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-[62%_center] max-sm:object-[85%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,20,0.88)_0%,rgba(10,15,20,0.72)_38%,rgba(10,15,20,0.38)_68%,rgba(10,15,20,0.12)_100%),linear-gradient(0deg,rgba(10,15,20,0.32)_0%,transparent_45%)] max-sm:bg-[linear-gradient(0deg,rgba(10,15,20,0.72)_0%,rgba(10,15,20,0.58)_42%,rgba(10,15,20,0.30)_100%)]" />
        </div>

        {/* Hero Content Container */}
        <div className="home-hero__content relative z-10 mx-auto flex w-full max-w-7xl flex-1 translate-y-6 flex-col justify-center px-6 py-12 sm:translate-y-8 sm:py-16 lg:translate-y-12 lg:px-10 lg:py-20">
          <div className="home-hero__copy mx-auto flex max-w-[850px] flex-col items-center text-center lg:max-w-[1100px]">
            {/* Eyebrow Header with Orange Line */}
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-12 rounded-full bg-orange-500" aria-hidden="true" />
              <span
                className="text-xs font-semibold tracking-[0.12em] text-orange-400 uppercase sm:text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                HBC CONSTRUCTION
              </span>
              <div className="h-px w-12 rounded-full bg-orange-500" aria-hidden="true" />
            </div>

            <div className="grid">
              <div
                className="invisible flex flex-col gap-6"
                style={{ gridArea: '1 / 1' }}
                aria-hidden="true"
              >
                <h1
                  className="max-w-[850px] text-[clamp(2.5rem,calc(5vw_+_16px),4.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white lg:max-w-[1100px] lg:text-[clamp(5rem,6vw,6rem)]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
                >
                  Building Infrastructure.<br />
                  <span className="text-orange-400">Creating Opportunity.</span>
                </h1>
                <p
                  className="mx-auto max-w-2xl text-balance text-[clamp(1.0625rem,1.3vw,1.25rem)] font-normal leading-relaxed text-white/90 min-[1000px]:text-xl"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  HBC Construction delivers quality construction and turnkey infrastructure solutions across South Africa.
                </p>
              </div>
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={showAlternateHeroCopy ? 'alternate' : 'primary'}
                  className="flex flex-col gap-6"
                  style={{ gridArea: '1 / 1' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: 'easeInOut' }}
                >
                  <h1
                    className="max-w-[850px] text-[clamp(2.5rem,calc(5vw_+_16px),4.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white lg:max-w-[1100px] lg:text-[clamp(5rem,6vw,6rem)]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
                  >
                    {showAlternateHeroCopy ? (
                      <>
                        Building Dreams,<br />
                        <span className="text-orange-400">One Project at a Time</span>
                      </>
                    ) : (
                      <>
                        Building Infrastructure.<br />
                        <span className="text-orange-400">Creating Opportunity.</span>
                      </>
                    )}
                  </h1>

                  <p
                    className="mx-auto max-w-2xl text-balance text-[clamp(1.0625rem,1.3vw,1.25rem)] font-normal leading-relaxed text-white/90 min-[1000px]:text-xl"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {showAlternateHeroCopy
                      ? 'Combining expertise, quality workmanship and reliable project delivery.'
                      : 'HBC Construction delivers quality construction and turnkey infrastructure solutions across South Africa.'}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex w-full max-w-[560px] flex-col items-stretch gap-3">
              <a
                href="tel:+27113144737"
                className="inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/70 bg-[#0A0F14]/35 px-5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white hover:bg-[#0A0F14]/60 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" />
                <span>Call HBC Construction</span>
              </a>

              <button
                onClick={onRequestQuote}
                className="inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-orange-500 group active:scale-[0.98] cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="mx-auto mt-1 inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full border border-white/40 bg-[#0A0F14]/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                <span>CIDB Grade 9GB</span>
                <span aria-hidden="true">•</span>
                <span>9CE</span>
                <span aria-hidden="true">•</span>
                <span>Level 1 B-BBEE</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. COMPANY INTRODUCTION SECTION
          "Building South Africa's Infrastructure With Purpose"
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="space-y-8" {...scrollRevealProps}>
            <div className="w-full">
              <SectionHeader
                eyebrow="Company Overview"
                title="Building South Africa's Infrastructure With Purpose"
                description="We are a Level One-B-BBEE contributor and are registered with the South African Construction Industry Development Board (CIDB). HBC Construction (Pty) Ltd delivers high-impact solutions to clients across civil engineering, building construction, infrastructure and specialist services."
                align="center"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>30+ Years Experience</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Decades of on-site delivery handling complex geotechnical, structural, and civil site conditions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>Technical Capability</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  In-house civil engineers, heavy plant fleet, and specialist project managers executing multi-million Rand tenders.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>Quality & Safety First</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Zero-harm safety policy and rigorous quality assurance systems aligned with ISO 9001 standards.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>Community Development</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Dedicated youth allocation, local SMME sub-contracting, and skills transfer on all project sites.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700 text-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <button
                onClick={() => onNavigate('capabilities')}
                className="text-neutral-600 hover:text-neutral-900 text-sm font-semibold"
              >
                View Technical Fleet & CIDB Grades
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. SERVICES SECTION
          Seven core service cards with hover transform and line icons
      ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200">
        <div className="relative isolate overflow-hidden bg-neutral-950 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <img
            src={servicesIntroBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-neutral-950/65" aria-hidden="true" />
          <motion.div className="relative mx-auto mb-8 flex max-w-3xl flex-col items-center gap-6 text-center sm:mb-12" {...scrollRevealProps}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-400 sm:text-sm">
                <span className="h-[2.5px] w-5 shrink-0 rounded-full bg-orange-500 sm:w-6" />
                <span>Our Services</span>
              </div>
              <h2 className="text-[clamp(2.375rem,3.2vw,2.875rem)] font-bold leading-tight tracking-tight text-white">
                End-to-End Construction &amp; Engineering
              </h2>
              <p className="text-base font-normal leading-[1.7] text-white sm:text-lg">
                From roads and structural works to public buildings and building services, our seven core divisions deliver reliable, sustainable solutions across South Africa.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border border-white/70 bg-neutral-950/35 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-sm transition hover:border-white hover:bg-neutral-950/60"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </button>
          </motion.div>
        </div>

        <div className="bg-[#F8F9FA] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <motion.div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6" {...scrollRevealProps}>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={(svc) => {
                  onSelectService(svc);
                  onNavigate('services');
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-neutral-200" aria-label="Projects and Case Studies">
        <div className="relative isolate overflow-hidden bg-neutral-950 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <img
            src={projectsIntroBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-neutral-950/60" aria-hidden="true" />
          <motion.div className="relative mx-auto mb-8 flex max-w-3xl flex-col items-center gap-6 text-center sm:mb-12" {...scrollRevealProps}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-400 sm:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span>Our Work</span>
              </div>
              <h2 className="text-[clamp(2.375rem,3.2vw,2.875rem)] font-bold leading-tight tracking-tight text-white">
                Projects and Case Studies
              </h2>
              <p className="text-base font-normal leading-[1.7] text-white sm:text-lg">
                Explore selected infrastructure, construction, and public-sector projects delivered by HBC Construction.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-neutral-950/35 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-sm transition hover:border-white hover:bg-neutral-950/60"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </button>
          </motion.div>
        </div>

        <div className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" {...scrollRevealProps}>
            {projectsData.slice(0, 6).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => {
                  if (onSelectProject) {
                    onSelectProject(project);
                  } else {
                    onNavigate('projects');
                  }
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SOME OF OUR CLIENTS SECTION
          Featuring premier public, municipal, and commercial partners
      ───────────────────────────────────────────────────────────── */}
      <motion.div {...scrollRevealProps}>
        <SomeOfOurClients
          onNavigate={onNavigate}
          onRequestQuote={onRequestQuote}
        />
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          GEOGRAPHIC FOOTPRINT SECTION (AFRICA & PROVINCIAL FOOTPRINT)
      ───────────────────────────────────────────────────────────── */}
      <motion.div {...scrollRevealProps}>
        <GeographicFootprint onNavigate={onNavigate} onSelectProject={onSelectProject} />
      </motion.div>

      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 bg-orange-600/10 blur-3xl" />
        <motion.div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8" {...scrollRevealProps}>
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 rounded border border-orange-500/30 bg-orange-600/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
              <span>Ready for Procurement &amp; Tenders</span>
            </div>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a Project in Mind?
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Talk to HBC Construction about your next infrastructure or construction project. Our estimating team provides detailed bill of quantities consultations and turnkey engineering support.
            </p>
            <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <button
                onClick={onRequestQuote}
                className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-orange-700 hover:shadow-orange-600/30 active:scale-95 sm:w-auto sm:text-base"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-700 active:scale-95 sm:w-auto sm:text-base"
              >
                <Phone className="h-4 w-4 text-orange-500" />
                <span>Contact Head Office (011 314 4737)</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-label="Frequently Asked Questions">
        <motion.div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" {...scrollRevealProps}>
          <SectionHeader
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            description="Learn more about HBC Construction's services, capabilities, and project delivery."
            align="center"
          />
          <div className="mt-10 space-y-3">
            {[
              {
                question: 'What construction and engineering services does HBC provide?',
                answer: 'HBC delivers Electrical Engineering, General Building, Plant Hire, Civil Construction, Mechanical Engineering, Plumbing, and Structural Construction.'
              },
              {
                question: 'Where does HBC Construction operate?',
                answer: 'HBC is headquartered in Midrand, Gauteng, and delivers projects across South Africa, with cross-border infrastructure mobilization capability throughout Southern Africa.'
              },
              {
                question: 'What CIDB grades does HBC hold?',
                answer: 'HBC holds CIDB Grade 9GB for General Building and Grade 9CE for Civil Engineering, with additional Grade 7 ratings in electrical and mechanical disciplines.'
              },
              {
                question: 'Can HBC deliver multidisciplinary or turnkey projects?',
                answer: 'Yes. HBC combines construction and engineering disciplines to coordinate integrated project delivery, from early works through construction and handover.'
              },
              {
                question: 'How can I discuss a project or request a quotation?',
                answer: 'Use the Get in Touch button above or visit the Contact page to find HBC’s enquiry form and direct contact details.'
              }
            ].map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4 open:bg-white open:shadow-sm sm:px-6"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-orange-600 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pt-3 pr-8 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
