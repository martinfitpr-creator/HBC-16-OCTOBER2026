import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative flex flex-col bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-500/40 active:scale-[0.99]"
    >
      {/* Image Container - only rendered if project has a picture */}
      {project.imageUrl && (
        <div className="relative h-48 sm:h-64 w-full bg-neutral-900 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>

          {/* Action Indicator */}
          <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 text-neutral-900 flex items-center justify-center opacity-100 sm:opacity-0 transform sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
            <ArrowUpRight className="w-4 h-4 text-orange-600" />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider min-w-0">
              <MapPin className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
            {!project.imageUrl && (
              <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-orange-50 text-neutral-500 group-hover:text-orange-600 flex items-center justify-center flex-shrink-0 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            )}
          </div>

          <h3 className="font-extrabold text-neutral-900 text-lg leading-snug group-hover:text-orange-600 transition-colors">
            {project.name}
          </h3>

          {project.subtitle && (
            <p className="text-xs text-neutral-600 mt-1 font-medium line-clamp-1">
              {project.subtitle}
            </p>
          )}

          <p className="text-neutral-600 text-xs mt-2.5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
