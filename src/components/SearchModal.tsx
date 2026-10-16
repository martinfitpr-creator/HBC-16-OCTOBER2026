import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Layers, 
  Building2, 
  Truck, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  CornerDownLeft, 
  PhoneCall,
  Briefcase
} from 'lucide-react';
import { PageId, ProjectItem, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { getAllSearchItems, SearchResultItem, SearchCategory } from '../data/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectService?: (service: ServiceItem) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

const POPULAR_SEARCHES = [
  'Civil Engineering',
  'Joe Hlahla Bridge',
  'CIDB Grade 9GB / 9CE',
  'Plant Hire Fleet',
  'SAPS Police Stations',
  'Midrand Head Office',
  'Roads & Stormwater',
  'Quality & Safety (SHEQ)'
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectService,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // All indexed items
  const allItems = useMemo(() => getAllSearchItems(), []);

  // Auto-focus input when opened, lock body scroll & reset search
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setQuery('');
      setSelectedCategory('all');
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter items based on query and category
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    return allItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // If no query, don't show full list unless browsing
      if (!trimmed) {
        return true;
      }

      // Match query across title, subtitle, description, keywords
      const titleMatch = item.title.toLowerCase().includes(trimmed);
      const subtitleMatch = item.subtitle?.toLowerCase().includes(trimmed);
      const descriptionMatch = item.description.toLowerCase().includes(trimmed);
      const keywordMatch = item.keywords.some((k) => k.includes(trimmed));

      return titleMatch || subtitleMatch || descriptionMatch || keywordMatch;
    });
  }, [allItems, query, selectedCategory]);

  // Keep selected index in bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Keyboard navigation inside search list
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
        handleSelectItem(filteredResults[selectedIndex]);
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Action dispatcher
  const handleSelectItem = (item: SearchResultItem) => {
    onClose();

    if (item.actionType === 'open_service' && item.serviceId && onSelectService) {
      const foundSvc = servicesData.find((s) => s.id === item.serviceId);
      if (foundSvc) {
        onSelectService(foundSvc);
        return;
      }
    }

    if (item.actionType === 'open_project' && item.projectId && onSelectProject) {
      const foundProj = projectsData.find((p) => p.id === item.projectId);
      if (foundProj) {
        onSelectProject(foundProj);
        return;
      }
    }

    onNavigate(item.pageId);
  };

  const getCategoryIcon = (category: SearchCategory, badge?: string) => {
    switch (category) {
      case 'services':
        return <Layers className="w-4 h-4 text-orange-600" />;
      case 'projects':
        return <Briefcase className="w-4 h-4 text-blue-600" />;
      case 'capabilities':
        return badge?.includes('CIDB') ? (
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
        ) : (
          <Truck className="w-4 h-4 text-emerald-600" />
        );
      case 'contact':
        return <PhoneCall className="w-4 h-4 text-amber-600" />;
      case 'pages':
      default:
        return <FileText className="w-4 h-4 text-neutral-600" />;
    }
  };

  const getCategoryBadgeClass = (category: SearchCategory) => {
    switch (category) {
      case 'services':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'projects':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'capabilities':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'contact':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'pages':
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  if (!isOpen) return null;

  const categoryTabs: { id: SearchCategory; label: string }[] = [
    { id: 'all', label: 'All Results' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'capabilities', label: 'Capabilities & Plant' },
    { id: 'pages', label: 'Pages' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 md:p-6 lg:p-12 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Website Search"
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden mt-6 sm:mt-12 flex flex-col max-h-[85vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-3 sm:px-6 py-3.5 sm:py-4 border-b border-neutral-200 bg-white">
          <Search className="w-5 h-5 text-orange-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search services, projects, fleet, CIDB..."
            className="w-full pl-3 pr-2 sm:pr-4 text-sm sm:text-base md:text-lg text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none font-medium"
            aria-label="Search site content"
          />
          {query ? (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <>
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition sm:hidden"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-neutral-500 bg-neutral-100 border border-neutral-200 rounded-md">
                ESC
              </kbd>
            </>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 bg-neutral-50/80 border-b border-neutral-200 overflow-x-auto no-scrollbar text-xs">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Results / Suggestions Content */}
        <div 
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto divide-y divide-neutral-100 p-2 sm:p-4 max-h-[55vh]"
        >
          {/* Results List */}
          {filteredResults.length > 0 ? (
            <div className="space-y-1">
              {filteredResults.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    data-active={isSelected}
                    onClick={() => handleSelectItem(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`group flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-orange-50/90 border border-orange-200 shadow-sm'
                        : 'hover:bg-neutral-50 border border-transparent'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 shadow-xs flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(item.category, item.badge)}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-orange-600 transition">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${getCategoryBadgeClass(item.category)}`}>
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                          • {item.categoryLabel}
                        </span>
                      </div>

                      {item.subtitle && (
                        <div className="text-xs font-medium text-neutral-600 line-clamp-1">
                          {item.subtitle}
                        </div>
                      )}

                      <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 self-center pl-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-orange-600 text-white shadow-xs scale-105' 
                          : 'text-neutral-400 group-hover:text-orange-600 group-hover:translate-x-0.5'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            query.trim() && (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-neutral-900">
                  No matching results for &ldquo;{query}&rdquo;
                </div>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Try searching with different terms such as &ldquo;civil&rdquo;, &ldquo;bridge&rdquo;, &ldquo;plant hire&rdquo;, &ldquo;CIDB&rdquo;, or &ldquo;Midrand&rdquo;.
                </p>
                <button
                  onClick={() => setQuery('')}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 underline pt-1"
                >
                  Clear search query
                </button>
              </div>
            )
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px]">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px]">↵</kbd>
              <span>to select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px]">ESC</kbd>
              <span>to close</span>
            </span>
          </div>

          <div className="sm:hidden text-[11px] text-neutral-500 font-medium">
            Tap any result to view details
          </div>

          <div className="font-semibold text-neutral-600">
            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
          </div>
        </div>
      </div>
    </div>
  );
};
