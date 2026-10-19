import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown, 
  Search
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { HbcLogo } from './HbcLogo';
import { companyDetails } from '../data/companyData';
import { servicesData } from '../data/servicesData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch?: () => void;
  onSelectService?: (service: ServiceItem) => void;
}

interface CompanySubItem {
  id: PageId;
  label: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onSelectService
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const companyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scrolling behind open mobile navigation drawer
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const companyItems: CompanySubItem[] = [
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'quality-safety', label: 'Quality & Safety' },
    { id: 'social-responsibility', label: 'Social Responsibility' },
  ];

  const isCompanyActive = ['capabilities', 'quality-safety', 'social-responsibility'].includes(currentPage);
  const isServicesActive = currentPage === 'services';
  const isHomeHero = currentPage === 'home' && !isScrolled && !mobileMenuOpen;
  const desktopLinkClass = (active: boolean) => `relative px-2 xl:px-2.5 py-2 text-[13px] xl:text-[14px] font-bold transition-colors duration-200 rounded-md ${
    active
      ? 'text-orange-500'
      : isHomeHero
        ? 'text-white hover:text-orange-400 hover:bg-white/10'
        : 'text-neutral-700 hover:text-orange-600 hover:bg-neutral-50'
  }`;

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCompanyDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterServices = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    setCompanyDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const handleMouseEnterCompany = () => {
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(false);
    setCompanyDropdownOpen(true);
  };

  const handleMouseLeaveCompany = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyDropdownOpen(false);
    }, 180);
  };

  const handleServiceSelect = (service: ServiceItem) => {
    setServicesDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(service);
    } else {
      onNavigate('services');
    }
    // Also scroll to section anchor
    setTimeout(() => {
      const target = document.getElementById(`service-${service.id}`) || document.getElementById('services-detail');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  return (
    <header className={`${mobileMenuOpen ? 'fixed' : 'sticky'} top-0 z-[60] w-full transition-all duration-300`}>
      {/* Main Navigation Bar */}
      <nav className={`h-20 w-full transition-all duration-300 ${
        mobileMenuOpen
        ? 'bg-white border-b border-neutral-200'
        : isHomeHero
        ? 'bg-white border-b border-neutral-200 min-[1000px]:border-b-0 min-[1000px]:bg-transparent'
        : isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/90'
        : 'bg-white border-b border-neutral-200'
      }`}>
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-md cursor-pointer"
            aria-label="HBC Construction Home"
          >
            <HbcLogo variant="dark" className="h-[58px] transition-all duration-300 sm:h-[70px]" />
          </button>

          {/* Desktop Navigation Links & Search Magnifier */}
          <div className="hidden min-[1000px]:flex items-center gap-2 xl:gap-4">
            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={desktopLinkClass(currentPage === 'home')}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>

            {/* 2. About Us */}
            <button
              onClick={() => handleNavClick('about')}
              className={desktopLinkClass(currentPage === 'about')}
            >
              About Us
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>

            {/* 3. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`${desktopLinkClass(isServicesActive || servicesDropdownOpen)} inline-flex items-center gap-1.5`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-orange-600' : 'text-neutral-400 group-hover:text-orange-600'
                  }`} 
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
                )}
              </button>

              {/* Services Dropdown Menu - Clean Vertical List */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 top-full pt-2 z-50 w-72 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-2 overflow-hidden">
                    <div className="px-4 py-1.5 border-b border-neutral-100 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">Our Services</span>
                    </div>
                    {servicesData.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => handleServiceSelect(svc)}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-xs xl:text-sm text-neutral-700 hover:text-orange-600 hover:bg-orange-50/70 transition-colors text-left font-medium group cursor-pointer"
                      >
                        <span className="truncate">{svc.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all shrink-0 opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Projects */}
            <button
              onClick={() => handleNavClick('projects')}
              className={desktopLinkClass(currentPage === 'projects')}
            >
              Projects
              {currentPage === 'projects' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>

            {/* 5. Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterCompany}
              onMouseLeave={handleMouseLeaveCompany}
            >
              <button
                onClick={() => handleNavClick('capabilities')}
                className={`${desktopLinkClass(isCompanyActive || companyDropdownOpen)} inline-flex items-center gap-1.5`}
                aria-expanded={companyDropdownOpen}
                aria-haspopup="true"
              >
                <span>Company</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    companyDropdownOpen ? 'rotate-180 text-orange-600' : 'text-neutral-400 group-hover:text-orange-600'
                  }`} 
                />
                {isCompanyActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
                )}
              </button>

              {/* Company Dropdown Menu - Clean Vertical List */}
              {companyDropdownOpen && (
                <div 
                  className="absolute left-0 top-full pt-2 z-50 w-60 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleMouseEnterCompany}
                  onMouseLeave={handleMouseLeaveCompany}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-neutral-200 py-2 overflow-hidden">
                    <div className="px-4 py-1.5 border-b border-neutral-100 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">Company Overview</span>
                    </div>
                    {companyItems.map((comp) => {
                      const isSubActive = currentPage === comp.id;
                      return (
                        <button
                          key={comp.id}
                          onClick={() => handleNavClick(comp.id)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-xs xl:text-sm transition-colors text-left font-medium group cursor-pointer ${
                            isSubActive
                              ? 'text-orange-600 bg-orange-50/70 font-semibold'
                              : 'text-neutral-700 hover:text-orange-600 hover:bg-orange-50/70'
                          }`}
                        >
                          <span>{comp.label}</span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-all shrink-0 ${
                            isSubActive ? 'text-orange-600 opacity-100' : 'text-neutral-400 group-hover:text-orange-600 group-hover:translate-x-0.5 opacity-0 group-hover:opacity-100'
                          }`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={desktopLinkClass(currentPage === 'careers')}
            >
              Careers
              {currentPage === 'careers' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={desktopLinkClass(currentPage === 'contact')}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>

            <button
              onClick={() => onOpenSearch?.()}
              className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-600 ${
                isHomeHero
                  ? 'border-white/30 bg-white/10 text-white hover:border-orange-400/60 hover:bg-white/20'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700'
              }`}
              title="Search website"
              aria-label="Search website"
            >
              <Search className="h-[18px] w-[18px] text-orange-500" />
              <span>Search</span>
            </button>

          </div>

          {/* Mobile Right Controls: Search Magnifier & Hamburger */}
          <div className="flex min-[1000px]:hidden items-center gap-1 sm:gap-1.5">
            <button
              onClick={() => onOpenSearch?.()}
              className="flex h-11 min-h-11 w-11 min-w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 active:scale-95"
              aria-label="Search website"
              title="Search website"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-800 hover:text-orange-600 hover:bg-neutral-100 rounded-lg transition active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="fixed inset-x-0 top-20 bottom-0 z-[70] min-[1000px]:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200 overflow-y-auto overscroll-contain" role="navigation" aria-label="Mobile navigation">
            {/* Quick Search Bar in Mobile Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch?.();
              }}
              className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 bg-neutral-50 hover:bg-orange-50 border border-neutral-200 hover:border-orange-200 rounded-lg text-left transition group cursor-pointer active:scale-[0.99]"
            >
              <div className="flex items-center gap-2.5 text-neutral-600 group-hover:text-orange-600">
                <Search className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-medium">Search services, projects, equipment...</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-200 text-neutral-600">Search</span>
            </button>

            <div className="grid grid-cols-1 gap-1">
              {/* 1. Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold transition ${
                  currentPage === 'home' 
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>

              {/* 2. About Us */}
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold transition ${
                  currentPage === 'about' 
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>

              {/* 3. Services Dropdown / Accordion */}
              <div className="rounded-lg overflow-hidden">
                <div className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold transition ${
                  isServicesActive 
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="flex-1 text-left"
                  >
                    Services
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }}
                    className="p-1.5 -mr-1 rounded-md text-neutral-500 hover:text-orange-600 hover:bg-neutral-200/60 transition cursor-pointer"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180 text-orange-600' : 'text-neutral-400'
                      }`} 
                    />
                  </button>
                </div>

                {/* Mobile Services Sub-items */}
                {mobileServicesOpen && (
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg mx-2 my-1.5 p-2 space-y-1 animate-in slide-in-from-top-1 duration-150">
                    {servicesData.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => handleServiceSelect(svc)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-left text-xs font-medium text-neutral-700 hover:text-orange-600 hover:bg-orange-50/80 transition"
                      >
                        <span className="truncate">{svc.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      </button>
                    ))}
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full pt-1.5 pb-1 text-center text-xs font-bold text-orange-600 hover:text-orange-700 block border-t border-neutral-200/60 mt-1"
                    >
                      View All Services Page →
                    </button>
                  </div>
                )}
              </div>

              {/* 4. Projects */}
              <button
                onClick={() => handleNavClick('projects')}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold transition ${
                  currentPage === 'projects' 
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}
              >
                <span>Projects</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>

              {/* 5. Company Dropdown / Accordion */}
              <div className="rounded-lg overflow-hidden">
                <div className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold transition ${
                  isCompanyActive 
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}>
                  <button
                    onClick={() => {
                      setMobileCompanyOpen(!mobileCompanyOpen);
                    }}
                    className="flex-1 text-left"
                  >
                    Company
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileCompanyOpen(!mobileCompanyOpen);
                    }}
                    className="p-1.5 -mr-1 rounded-md text-neutral-500 hover:text-orange-600 hover:bg-neutral-200/60 transition cursor-pointer"
                    aria-label="Toggle company list"
                  >
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileCompanyOpen ? 'rotate-180 text-orange-600' : 'text-neutral-400'
                      }`} 
                    />
                  </button>
                </div>

                {/* Mobile Company Sub-items */}
                {mobileCompanyOpen && (
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg mx-2 my-1.5 p-2 space-y-1 animate-in slide-in-from-top-1 duration-150">
                    {companyItems.map((comp) => {
                      const isSubActive = currentPage === comp.id;
                      return (
                        <button
                          key={comp.id}
                          onClick={() => handleNavClick(comp.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left text-xs font-medium transition ${
                            isSubActive
                              ? 'text-orange-600 bg-orange-50 font-semibold'
                              : 'text-neutral-700 hover:text-orange-600 hover:bg-orange-50/80'
                          }`}
                        >
                          <span>{comp.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Careers */}
              <button
                onClick={() => handleNavClick('careers')}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold transition ${
                  currentPage === 'careers'
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600'
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}
              >
                <span>Careers</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold transition ${
                  currentPage === 'contact' 
                    ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-orange-600'
                }`}
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            <div className="pt-3 mt-1 border-t border-neutral-100 space-y-2.5">
              <div className="text-xs text-neutral-600 p-3 bg-neutral-50 rounded-lg space-y-1">
                <div className="font-semibold text-neutral-900">Head Office Midrand</div>
                <div>Tel: {companyDetails.telephone}</div>
                <div>Email: {companyDetails.email}</div>
              </div>
            </div>
          </div>
        )}
    </header>
  );
};
