import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  eyebrowStyle?: 'dot' | 'dash';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  eyebrowStyle = 'dot'
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] ${
          dark ? 'text-orange-400' : eyebrowStyle === 'dash' ? 'text-neutral-600' : 'text-orange-600'
        }`}>
          {eyebrowStyle === 'dash' ? (
            <span className="w-5 sm:w-6 h-[2.5px] bg-orange-500 rounded-full shrink-0" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
          )}
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`text-[clamp(2.375rem,3.2vw,2.875rem)] font-bold tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-neutral-900'
      }`}>
        {title}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg leading-[1.7] font-normal ${
          dark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
