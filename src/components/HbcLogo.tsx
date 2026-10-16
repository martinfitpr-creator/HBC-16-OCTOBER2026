import React from 'react';
import hbcLogoImg from '../assets/images/hbc-logo.png';

interface HbcLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const HbcLogo: React.FC<HbcLogoProps> = ({
  className = 'h-11',
}) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={hbcLogoImg}
        alt="HBC Construction Logo"
        className="h-full w-auto object-contain max-w-[140px] sm:max-w-[190px]"
        style={{ maxHeight: '100%', maxWidth: '150px', width: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};
