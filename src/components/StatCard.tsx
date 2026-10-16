import React from 'react';
import { StatisticItem } from '../types';

interface StatCardProps {
  stat: StatisticItem;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <div className="relative p-6 sm:p-7 rounded-xl bg-neutral-900 border border-neutral-800 text-white overflow-hidden group hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between">
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
      
      <div>
        {/* Main Metric Value */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 font-mono group-hover:text-orange-400 transition-colors">
          {stat.value}
        </div>

        {/* Label */}
        <div className="text-sm sm:text-base font-bold text-neutral-100 mb-1">
          {stat.label}
        </div>

        {/* Subtext */}
        {stat.subtext && (
          <p className="text-xs text-neutral-400 leading-relaxed mt-2">
            {stat.subtext}
          </p>
        )}
      </div>
    </div>
  );
};
