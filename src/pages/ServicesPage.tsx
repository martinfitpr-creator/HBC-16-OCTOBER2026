import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Building2, 
  Zap, 
  Truck, 
  HardHat, 
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Phone,
  Settings,
  Wrench
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { SectionHeader } from '../components/SectionHeader';
import servicesHeroBg from '../assets/images/services-hero-bg.jpg';
import servicesCalloutBg from '../assets/images/services-cta-roofing.jpg';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuoteWithService: (serviceName: string) => void;
  selectedService?: ServiceItem | null;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onRequestQuoteWithService,
  selectedService: initialService
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    initialService ? initialService.id : servicesData[0].id
  );

  useEffect(() => {
    if (initialService) {
      setActiveServiceId(initialService.id);
      setTimeout(() => {
        const target = document.getElementById(`service-${initialService.id}`) || document.getElementById('services-detail');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [initialService]);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Settings': return <Settings className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'HardHat':
      default: return <HardHat className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="HBC Construction Engineering Services – aerial infrastructure"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-neutral-950/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Multidisciplinary Disciplines</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Turnkey Engineering & Construction Services
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              HBC Construction (Pty) Ltd operates across seven specialized divisions, offering unified management, robust capital resources, and technical engineering delivery under South African standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Service Explorer */}
      <section id="services-detail" className="py-16 sm:py-20 bg-neutral-50 border-b border-neutral-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav: 7 Service Tabs */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 px-2">
                Select Service Division
              </div>
              {servicesData.map((svc) => {
                const isActive = svc.id === activeServiceId;
                return (
                  <button
                    key={svc.id}
                    id={`service-${svc.id}`}
                    onClick={() => setActiveServiceId(svc.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                      isActive
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-md translate-x-1'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-orange-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                        {getIcon(svc.iconName)}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{svc.title}</div>
                        <div className={`text-[11px] truncate max-w-[200px] ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {svc.shortDescription}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-neutral-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display: Deep Dive Detail Card */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-10 space-y-8">
              {/* Top Banner */}
              <div className="border-b border-neutral-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    {getIcon(activeService.iconName)}
                    <span>Division Focus</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                    {activeService.title}
                  </h2>
                  <p className="text-sm font-semibold text-neutral-600">
                    {activeService.shortDescription}
                  </p>
                </div>

                <button
                  onClick={() => onRequestQuoteWithService(activeService.title)}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex-shrink-0 inline-flex items-center gap-2"
                >
                  <span>Tender for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Detailed Narrative */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                  Engineering Scope & Technical Method
                </h3>
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  {activeService.detailedDescription}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                  Core Technical Capabilities & Project Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standards & Compliance */}
              {activeService.applicableStandards && (
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-orange-600" />
                    <span>Applicable Codes, Specifications & Quality Standards</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeService.applicableStandards.map((std, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded bg-white text-neutral-800 text-xs font-semibold border border-neutral-200"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Project Link */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-500">
                  Want to see completed projects under this discipline?
                </div>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5"
                >
                  <span>Filter Related Projects in Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of all seven services at a glance */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="Comprehensive Disciplines"
            title="Overview of All 7 Divisions"
            description="Integrated civil, structural, electrical, and plant hire support tailored for commercial developers, provincial departments, and municipal clients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((s) => (
              <div
                key={s.id}
                onClick={() => {
                  setActiveServiceId(s.id);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="p-6 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-orange-500/50 hover:shadow-lg transition duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-200 group-hover:bg-orange-600 group-hover:text-white transition flex items-center justify-center text-neutral-700">
                    {getIcon(s.iconName)}
                  </div>
                  <h4 className="font-extrabold text-neutral-900 group-hover:text-orange-600 transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {s.shortDescription}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-neutral-200/60 text-xs font-bold text-neutral-900 group-hover:text-orange-600 flex items-center justify-between">
                  <span>Inspect Division</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="relative isolate overflow-hidden py-14 text-white">
        <img
          src={servicesCalloutBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/70" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Need a customized turnkey package?</h3>
            <p className="text-xs text-white sm:text-sm">Our engineering team combines multiple divisions into single-point contractual responsibility.</p>
          </div>
          <button
            onClick={() => onRequestQuoteWithService('Multi-disciplinary Turnkey')}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex-shrink-0"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
