import React, { lazy, Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PageId, ProjectItem, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ScrollProgress } from './components/ScrollProgress';

import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(({ CareersPage }) => ({ default: CareersPage })));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage').then(({ CapabilitiesPage }) => ({ default: CapabilitiesPage })));
const QualitySafetyPage = lazy(() => import('./pages/QualitySafetyPage').then(({ QualitySafetyPage }) => ({ default: QualitySafetyPage })));
const SocialResponsibilityPage = lazy(() => import('./pages/SocialResponsibilityPage').then(({ SocialResponsibilityPage }) => ({ default: SocialResponsibilityPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(({ ContactPage }) => ({ default: ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })));
const QuoteModal = lazy(() => import('./components/QuoteModal').then(({ QuoteModal }) => ({ default: QuoteModal })));
const ProjectDetailModal = lazy(() => import('./components/ProjectDetailModal').then(({ ProjectDetailModal }) => ({ default: ProjectDetailModal })));
const SearchModal = lazy(() => import('./components/SearchModal').then(({ SearchModal }) => ({ default: SearchModal })));

const validPageIds: PageId[] = [
  'home',
  'about',
  'services',
  'projects',
  'careers',
  'capabilities',
  'quality-safety',
  'social-responsibility',
  'contact'
];

const isPageId = (value: string): value is PageId =>
  validPageIds.includes(value as PageId);

const getPageFromHash = (): PageId => {
  const hash = window.location.hash.slice(1);
  return !hash ? 'home' : isPageId(hash) ? hash : 'not-found';
};

export default function App() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceInitial, setQuoteServiceInitial] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcut to open search modal (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Synchronize the current page with the URL hash.
  useEffect(() => {
    const handleHashChange = () => setCurrentPage(getPageFromHash());

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    setQuoteServiceInitial(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    navigateTo('services');
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-neutral-900 font-sans selection:bg-orange-500 selection:text-white">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[70] rounded-md bg-white px-4 py-3 font-semibold text-charcoal shadow-lg focus:not-sr-only focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-hbc-red"
      >
        Skip to main content
      </a>
      <ScrollProgress />

      {/* Persistent Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Main Page View with smooth transition container */}
      <main id="main-content" tabIndex={-1} className="flex-1 w-full flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full flex flex-col"
          >
            <Suspense fallback={<div className="min-h-[50vh] flex-1" aria-hidden="true" />}>
              {currentPage === 'home' && (
                <HomePage
                  onNavigate={navigateTo}
                  onRequestQuote={() => handleOpenQuote()}
                  onSelectProject={handleSelectProject}
                  onSelectService={handleSelectService}
                />
              )}

              {currentPage === 'about' && (
                <AboutPage
                  onNavigate={navigateTo}
                  onRequestQuote={() => handleOpenQuote()}
                />
              )}

              {currentPage === 'services' && (
                <ServicesPage
                  onNavigate={navigateTo}
                  onRequestQuoteWithService={(svc) => handleOpenQuote(svc)}
                  selectedService={selectedService}
                />
              )}

              {currentPage === 'projects' && (
                <ProjectsPage
                  onNavigate={navigateTo}
                  onSelectProject={handleSelectProject}
                  onRequestQuote={() => handleOpenQuote()}
                />
              )}

              {currentPage === 'careers' && (
                <CareersPage onNavigate={navigateTo} />
              )}

              {currentPage === 'capabilities' && (
                <CapabilitiesPage
                  onNavigate={navigateTo}
                  onRequestQuote={() => handleOpenQuote()}
                />
              )}

              {currentPage === 'quality-safety' && (
                <QualitySafetyPage
                  onNavigate={navigateTo}
                  onRequestQuote={() => handleOpenQuote()}
                />
              )}

              {currentPage === 'social-responsibility' && (
                <SocialResponsibilityPage
                  onNavigate={navigateTo}
                  onRequestQuote={() => handleOpenQuote()}
                />
              )}

              {currentPage === 'contact' && (
                <ContactPage
                  onNavigate={navigateTo}
                  onRequestQuote={() => handleOpenQuote()}
                />
              )}

              {currentPage === 'not-found' && (
                <NotFoundPage onNavigate={navigateTo} />
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Interactive Quotation / Tender Modal */}
      {isQuoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
            initialService={quoteServiceInitial}
          />
        </Suspense>
      )}

      {/* Project Detail Deep Dive Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onRequestQuote={(projectName) => {
              setSelectedProject(null);
              handleOpenQuote(`Enquiry regarding project: ${projectName}`);
            }}
          />
        </Suspense>
      )}

      {/* Website Live Search Modal */}
      {isSearchOpen && (
        <Suspense fallback={null}>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
            onSelectProject={handleSelectProject}
          />
        </Suspense>
      )}

      <WhatsAppWidget phoneNumber="082 853 2960" companyName="HBC Construction (Pty) Ltd" />
    </div>
  );
}
