import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PageId, ProjectItem, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { SearchModal } from './components/SearchModal';
import { ScrollProgress } from './components/ScrollProgress';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { QualitySafetyPage } from './pages/QualitySafetyPage';
import { SocialResponsibilityPage } from './pages/SocialResponsibilityPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const validPageIds: PageId[] = [
  'home',
  'about',
  'services',
  'projects',
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
        onRequestQuote={() => handleOpenQuote()}
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
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Interactive Quotation / Tender Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteServiceInitial}
      />

      {/* Project Detail Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={(projectName) => {
          setSelectedProject(null);
          handleOpenQuote(`Enquiry regarding project: ${projectName}`);
        }}
      />

      {/* Website Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
        onSelectService={handleSelectService}
        onSelectProject={handleSelectProject}
      />

      {/* Floating WhatsApp Green Widget */}
      <WhatsAppWidget phoneNumber="082 853 2960" companyName="HBC Construction (Pty) Ltd" />
    </div>
  );
}
