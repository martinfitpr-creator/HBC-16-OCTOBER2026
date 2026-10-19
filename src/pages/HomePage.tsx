import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight, 
  ChevronDown,
  Phone,
  CalendarDays,
  UsersRound,
  Layers,
  MapPin,
} from 'lucide-react';
import heroConstructionImg from '../assets/images/hero-highway-bridge-optimized.jpg';
import companyOverviewSunsetImage from '../assets/images/company-overview-sunset-cranes.jpg';
import companyOverviewBackground from '../assets/images/company-overview-background.jpg';
import { PageId, ProjectItem, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { GeographicFootprint } from '../components/GeographicFootprint';
import { SomeOfOurClients } from '../components/SomeOfOurClients';
import { projectsData } from '../data/projectsData';
import { AnimatedCounter } from '../components/AnimatedCounter';
import featuredWorkBackground from '../assets/images/featured-work-background.jpg';

const projectProvinceCount = new Set(projectsData.map((project) => project.province)).size;
const featuredProjectIds = [
  'bridge-crossing-over-rail-soweto',
  'soweto-jabulani-molele-road',
  'mamelodi-fire-station',
  'graaf-reinet-aloe-house',
  'alexandra-bridge-extension'
];
const featuredProjects = featuredProjectIds.flatMap((id) => {
  const project = projectsData.find((item) => item.id === id);
  return project ? [project] : [];
});

const heroMessages = [
  {
    title: 'Building Infrastructure.',
    highlight: 'Creating Opportunity.',
    subtitle: 'HBC Construction delivers quality construction and turnkey infrastructure solutions across South Africa.'
  },
  {
    title: 'Building Dreams,',
    highlight: 'One Project at a Time.',
    subtitle: 'Combining expertise, quality workmanship and reliable project delivery.'
  },
  {
    title: 'Engineering Progress.',
    highlight: 'Connecting Communities.',
    subtitle: 'Delivering roads, bridges and essential infrastructure that bring people closer.'
  },
  {
    title: 'Built on Trust.',
    highlight: 'Delivered with Excellence.',
    subtitle: 'A committed construction partner for public, commercial and community projects.'
  },
  {
    title: 'From Vision to Reality.',
    highlight: 'Building What Matters.',
    subtitle: 'Turning ambitious plans into lasting places, structures and infrastructure.'
  }
];

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
  const [activeHeroMessage, setActiveHeroMessage] = useState(0);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const scrollRevealProps = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' as const }
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveHeroMessage((current) => (current + 1) % heroMessages.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  const currentHeroMessage = heroMessages[activeHeroMessage];

  return (
    <div className="flex w-full flex-col -mt-20">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          Large-scale construction, roads, bridges, heavy equipment
      ───────────────────────────────────────────────────────────── */}
      <section className="home-hero relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[#0A0F14] text-white min-[1000px]:min-h-[100svh]">
        {/* Full-bleed construction photography with a layered, responsive contrast overlay. */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroConstructionImg}
            alt="HBC Construction bridge construction site with workers and concrete pump truck"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-[38%_center] max-sm:object-[80%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,20,0.9)_0%,rgba(10,15,20,0.76)_38%,rgba(10,15,20,0.38)_68%,rgba(10,15,20,0.12)_100%),linear-gradient(0deg,rgba(10,15,20,0.32)_0%,transparent_45%)] max-sm:bg-[linear-gradient(90deg,rgba(10,15,20,0.78)_0%,rgba(10,15,20,0.57)_62%,rgba(10,15,20,0.35)_100%),linear-gradient(0deg,rgba(10,15,20,0.65)_0%,transparent_55%)]" />
        </div>

        {/* Hero Content Container */}
        <div className="home-hero__content relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="home-hero__copy flex w-full max-w-[680px] flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
              <div className="h-px w-8 rounded-full bg-orange-500 sm:w-12" aria-hidden="true" />
              <span
                className="text-[11px] font-semibold tracking-[0.12em] text-orange-400 uppercase sm:text-sm min-[1000px]:text-orange-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                HBC CONSTRUCTION
              </span>
              <div className="h-px w-8 rounded-full bg-orange-500 sm:hidden" aria-hidden="true" />
            </div>
            <div className="grid h-[240px] sm:h-[320px] lg:h-[200px]">
              {heroMessages.map((message) => (
                <div
                  key={message.title}
                  className="invisible flex w-full flex-col items-center gap-4 text-center sm:items-start sm:gap-5 sm:text-left"
                  style={{ gridArea: '1 / 1' }}
                  aria-hidden="true"
                >
                  <h1
                    className="w-full max-w-[680px] text-[clamp(2rem,8.5vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white lg:max-w-[780px] lg:text-[clamp(2.5rem,4.1vw,3.5rem)]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
                  >
                    {message.title}<br />
                    <span className="text-orange-400 min-[1000px]:whitespace-nowrap min-[1000px]:text-orange-500">{message.highlight}</span>
                  </h1>
                  <p
                    className="w-full max-w-[600px] text-pretty text-[clamp(1rem,1.3vw,1.2rem)] font-normal leading-relaxed text-white/90 min-[1000px]:max-w-[540px] min-[1000px]:text-base"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {message.subtitle}
                  </p>
                </div>
              ))}
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={activeHeroMessage}
                  className="relative top-6 flex w-full flex-col items-center gap-4 text-center sm:items-start sm:gap-5 sm:text-left min-[1000px]:top-0"
                  style={{ gridArea: '1 / 1' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: 'easeInOut' }}
                >
                  <h1
                    className="w-full max-w-[680px] text-[clamp(2rem,8.5vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white lg:max-w-[780px] lg:text-[clamp(2.5rem,4.1vw,3.5rem)]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
                  >
                    {currentHeroMessage.title}<br />
                    <span className="text-orange-400 min-[1000px]:whitespace-nowrap min-[1000px]:text-orange-500">{currentHeroMessage.highlight}</span>
                  </h1>

                  <p
                    className="w-full max-w-[600px] text-pretty text-[clamp(1rem,1.3vw,1.2rem)] font-normal leading-relaxed text-white/90 min-[1000px]:max-w-[540px] min-[1000px]:text-base"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {currentHeroMessage.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mx-auto mt-6 grid w-full max-w-[520px] grid-cols-1 gap-2.5 sm:mx-0 sm:mt-8 sm:grid-cols-2 sm:gap-3 min-[1000px]:mt-5 min-[1000px]:max-w-[440px]">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex h-11 min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-2 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-orange-500 active:scale-[0.98] sm:h-12 sm:min-h-12 sm:px-5 sm:text-base"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="group inline-flex h-11 min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/70 bg-[#0A0F14]/35 px-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white hover:bg-[#0A0F14]/60 active:scale-[0.98] sm:h-12 sm:min-h-12 sm:px-5 sm:text-base"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/20 bg-neutral-950/55 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 min-[1000px]:grid-cols-4 lg:px-8">
            {[
              { icon: <CalendarDays className="h-4 w-4 shrink-0 text-orange-500 sm:h-5 sm:w-5" />, title: 'Established', subtitle: '2008' },
              { icon: <UsersRound className="h-4 w-4 shrink-0 text-orange-500 sm:h-5 sm:w-5" />, title: 'Multidisciplinary', subtitle: 'Services' },
              { icon: <Layers className="h-4 w-4 shrink-0 text-orange-500 sm:h-5 sm:w-5" />, title: 'Turnkey', subtitle: 'Solutions' },
              { icon: <MapPin className="h-4 w-4 shrink-0 text-orange-500 sm:h-5 sm:w-5" />, title: 'South Africa', subtitle: 'Based' }
            ].map((item) => (
              <div
                key={item.title}
                className="flex min-h-[52px] items-center gap-1.5 border-white/15 py-1.5 sm:min-h-[60px] sm:gap-2.5 sm:px-3 min-[1000px]:border-r min-[1000px]:last:border-r-0"
              >
                {item.icon}
                <p className="min-w-0 text-[10px] font-semibold leading-tight text-white sm:text-xs">
                  <span className="block">{item.title}</span>
                  <span className="block text-white/75">{item.subtitle}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. COMPANY INTRODUCTION SECTION
          "Building South Africa's Infrastructure With Purpose"
      ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="space-y-8 sm:space-y-10" {...scrollRevealProps}>
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
              <div className="max-w-[680px]">
                <SectionHeader
                  eyebrow="Company Overview"
                  title="Building South Africa's Infrastructure With Purpose"
                  description="We are a Level One-B-BBEE contributor and are registered with the South African Construction Industry Development Board (CIDB). HBC Construction (Pty) Ltd delivers high-impact solutions to clients across civil engineering, building construction, infrastructure and specialist services."
                  titleClassName="text-[clamp(2rem,5vw,2.875rem)] leading-[1.08]"
                  align="left"
                />
              </div>
              <img
                src={companyOverviewSunsetImage}
                alt="Construction cranes and buildings silhouetted against a sunset"
                width={1152}
                height={768}
                loading="lazy"
                className="hidden aspect-[3/2] w-full rounded-2xl object-cover shadow-sm lg:block"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 border-y border-neutral-200 py-5 sm:grid-cols-3 sm:gap-6 sm:py-6">
              <div className="space-y-2 sm:pr-5">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>Technical Capability</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  In-house civil engineers, heavy plant fleet, and specialist project managers executing multi-million Rand tenders.
                </p>
              </div>

              <div className="space-y-2 border-neutral-200 sm:border-l sm:px-5">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>Quality & Safety First</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Zero-harm safety policy and rigorous quality assurance systems across our projects.
                </p>
              </div>

              <div className="space-y-2 border-neutral-200 sm:border-l sm:pl-5">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  <span>Community Development</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Dedicated youth allocation, local SMME sub-contracting, and skills transfer on all project sites.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
        <div className="relative isolate overflow-hidden bg-neutral-950 py-14 text-white sm:py-20 lg:py-24">
          <img
            src={companyOverviewBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_58%]"
          />
          <div className="absolute inset-0 -z-10 bg-neutral-950/65" aria-hidden="true" />
          <motion.div className="relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:mb-2 sm:flex-row sm:items-end sm:px-6 lg:px-8" {...scrollRevealProps}>
            <div className="max-w-[680px] space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-400 sm:text-sm">
                <span className="h-[2.5px] w-5 shrink-0 rounded-full bg-orange-500 sm:w-6" />
                <span>Our Services</span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,2.875rem)] font-bold leading-[1.08] tracking-tight text-white">
                End-to-End Construction &amp; Engineering
              </h2>
              <p className="max-w-[620px] text-sm font-normal leading-relaxed text-white/90 sm:text-base">
                From roads and structural works to public buildings and building services, our seven core divisions deliver reliable, sustainable solutions across South Africa.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex min-h-11 flex-shrink-0 items-center gap-2 rounded-lg border border-white/70 bg-neutral-950/35 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-white hover:bg-neutral-950/60"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </button>
          </motion.div>
        </div>

        <div className="bg-neutral-50 py-10 sm:py-14">
          <motion.div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-5 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8" {...scrollRevealProps}>
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

      <section className="border-b border-neutral-200 bg-neutral-50" aria-label="Projects and Case Studies">
        <div className="relative isolate overflow-hidden bg-neutral-950 py-14 text-white sm:py-20">
          <img
            src={featuredWorkBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-neutral-950/60" aria-hidden="true" />
          <motion.div className="relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-end sm:px-6 lg:px-8" {...scrollRevealProps}>
            <div className="max-w-[680px] space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-400 sm:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span>Featured Work</span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,2.875rem)] font-bold leading-[1.08] tracking-tight text-white">
                Projects and Case Studies
              </h2>
              <p className="max-w-[620px] text-sm leading-relaxed text-white/90 sm:text-base">
                Explore selected infrastructure, construction, and public-sector projects delivered by HBC Construction.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/70 bg-neutral-950/35 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-white hover:bg-neutral-950/60"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </button>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <motion.div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6" {...scrollRevealProps}>
            {featuredProjects.map((project, index) => (
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

      <section className="border-b border-neutral-200 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8" aria-label="HBC Construction at a glance">
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
          {...scrollRevealProps}
        >
          <AnimatedCounter value={0} displayValue="2008" label="Established" />
          <AnimatedCounter value={50} suffix="+" label="Projects in Our Portfolio" />
          <AnimatedCounter value={projectProvinceCount} label="Provinces Represented in Our Portfolio" />
          <AnimatedCounter value={100} suffix="%" label="Black-Owned South African Enterprise" />
        </motion.div>
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

      <section className="bg-neutral-50 py-12 sm:bg-white sm:py-20" aria-label="Frequently Asked Questions">
        <motion.div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" {...scrollRevealProps}>
          <SectionHeader
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            titleClassName="text-[clamp(1.8rem,8vw,2.375rem)] leading-[1.1] sm:text-[clamp(2.375rem,3.2vw,2.875rem)] sm:leading-tight"
            description="Learn more about HBC Construction's services, capabilities, and project delivery."
            descriptionClassName="text-sm leading-relaxed sm:text-lg sm:leading-[1.7]"
            align="center"
          />
          <div className="mt-7 space-y-3 sm:mt-10">
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
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-colors open:border-orange-200 open:bg-orange-50/30"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-left text-[15px] font-semibold leading-snug text-neutral-900 outline-none marker:hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 [&::-webkit-details-marker]:hidden sm:min-h-16 sm:gap-4 sm:px-6 sm:py-4 sm:text-base">
                  <span className="min-w-0 flex-1">{question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-orange-600 transition-colors group-open:border-orange-200 group-open:bg-orange-100">
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mx-4 border-t border-neutral-100 pb-4 pt-3 text-sm leading-relaxed text-neutral-600 sm:mx-6 sm:pb-5 sm:pt-4 sm:text-base">
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
