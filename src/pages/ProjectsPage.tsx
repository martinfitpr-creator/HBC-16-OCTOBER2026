import React, { useState, useMemo } from 'react';
import { Search, Layers } from 'lucide-react';
import { PageId, ProjectItem } from '../types';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import projectsHeroBg from '../assets/images/projects-hero-bg.jpg';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProject,
  onRequestQuote
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projectsData;
    return projectsData.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.subtitle && project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={projectsHeroBg}
            alt="HBC Construction Projects Portfolio – aerial bridge construction"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-950/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Project Register &amp; Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              South African Infrastructure Portfolio
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Explore public-sector, civil engineering, commercial building, and arterial infrastructure projects delivered by HBC Construction (Pty) Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-4 sm:py-5 bg-white border-b border-neutral-200 sticky top-14 sm:top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end">
            <div className="relative w-full sm:w-auto sm:min-w-[360px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name or location..."
                className="w-full pl-10 pr-12 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 p-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 sm:py-16 bg-neutral-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            <div>Showing {filteredProjects.length} Projects in Portfolio</div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-neutral-200 p-8 space-y-3">
              <Layers className="w-12 h-12 text-neutral-300 mx-auto" />
              <h3 className="text-lg font-bold text-neutral-900">No matching projects found</h3>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto">
                No project matches "{searchQuery}". Try a different search term.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => onSelectProject(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tenders Consultation Bar */}
      <section className="py-14 bg-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Require a formal project history schedule for your tender?</h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              We provide verified CIDB completion certificates, consultant references, and audited track records on request.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex-shrink-0"
          >
            Contact Tender Desk
          </button>
        </div>
      </section>
    </div>
  );
};
