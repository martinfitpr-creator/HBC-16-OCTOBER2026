import React from 'react';
import { MapPin, ArrowUpRight, CalendarDays, Images } from 'lucide-react';
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
      className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl active:scale-[0.99]"
    >
      {/* Image Container - only rendered if project has a picture */}
      {project.imageUrl && (
        <div className="relative h-28 w-full overflow-hidden bg-neutral-900 sm:h-48 lg:h-56">
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
      <div className="flex flex-1 flex-col justify-between space-y-3 p-3 sm:space-y-4 sm:p-5">
        <div>
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 sm:text-xs">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-orange-600" />
              <span className="truncate">{project.location}</span>
            </div>
            {!project.imageUrl && (
              <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-orange-50 text-neutral-500 group-hover:text-orange-600 flex items-center justify-center flex-shrink-0 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            )}
          </div>

          <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold text-neutral-500 sm:gap-x-4 sm:text-[11px]">
            {project.categoryLabel && (
              <span className="rounded-full bg-orange-50 px-2 py-1 text-[9px] font-bold uppercase leading-none tracking-wide text-orange-700 sm:text-[10px]">
                {project.categoryLabel}
              </span>
            )}
            {project.completionPeriod && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-orange-600" />
                {project.completionPeriod}
              </span>
            )}
            {project.galleryUrls && project.galleryUrls.length > 1 && (
              <span className="inline-flex items-center gap-1.5">
                <Images className="h-3.5 w-3.5 text-orange-600" />
                {project.galleryUrls.length} project photos
              </span>
            )}
          </div>

          <h3 className="text-sm font-extrabold leading-snug text-neutral-900 transition-colors group-hover:text-orange-600 sm:text-lg">
            {project.name}
          </h3>

          {project.subtitle && (
            <p className="mt-1 line-clamp-1 text-[11px] font-medium text-neutral-600 sm:text-xs">
              {project.subtitle}
            </p>
          )}

          <p className="mt-2.5 line-clamp-2 text-[11px] leading-relaxed text-neutral-600 sm:text-xs">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
