import React from 'react';
import { 
  Layers, 
  Building2, 
  Zap, 
  Truck, 
  HardHat, 
  ArrowRight,
  Settings,
  Wrench,
  LayoutGrid
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const getIcon = () => {
    switch (service.iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'Settings':
        return <Settings className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
      case 'HardHat':
      default:
        return <HardHat className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      className="group relative flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-neutral-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[160px] sm:min-h-[190px]"
    >
      <div>
        {/* Top-Left Icon Container */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#F4F5F7] text-neutral-800 flex items-center justify-center transition-colors duration-200 group-hover:bg-orange-50 group-hover:text-orange-600">
          {getIcon()}
        </div>

        {/* Title and Disciplines Count */}
        <div className="mt-3.5 sm:mt-5">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-orange-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-neutral-400 font-normal mt-1 sm:mt-1.5">
            {service.capabilities.length} Core Disciplines
          </p>
        </div>
      </div>

      {/* Bottom-Right Circular Arrow Button */}
      <div className="flex justify-end pt-2 sm:pt-4">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F4F5F7] text-neutral-700 flex items-center justify-center transition-all duration-200 group-hover:bg-neutral-900 group-hover:text-white">
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};
