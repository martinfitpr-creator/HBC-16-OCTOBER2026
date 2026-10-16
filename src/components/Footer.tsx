import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import { PageId } from '../types';
import { HbcLogo } from './HbcLogo';
import hbcFooterLogo from '../assets/images/hbc-logo-footer.jpg';
import { companyDetails } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#9E3504] via-[#351204] via-40% to-[#0A0402] text-white relative overflow-hidden border-t border-white/10">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand Profile (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <button 
              onClick={() => handleNav('home')} 
              className="text-left focus:outline-none block cursor-pointer group"
            >
              <img
                src={hbcFooterLogo}
                alt="HBC Construction Logo"
                className="h-20 sm:h-24 w-auto object-contain rounded-xl shadow-lg border border-white/10"
              />
            </button>

            <p className="text-sm text-neutral-200 leading-relaxed">
              HBC Construction (Pty) Ltd is a 100% black-owned South African construction group delivering high-impact solutions across civil engineering, building construction, infrastructure and specialist services.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 border border-white/20 text-amber-200">
                Excellence in Execution
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/30 border border-white/15 text-neutral-200">
                100% Black-Owned
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/30 border border-white/15 text-neutral-200">
                Level 1 B-BBEE
              </span>
            </div>
          </div>

          {/* Col 2: Our Services */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#EB5A24] pl-2.5">
              Our Services
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1 text-xs">
              {[
                'Electrical Engineering',
                'General Building',
                'Plant Hire',
                'Civil Construction',
                'Mechanical Engineering',
                'Plumbing',
                'Structural Construction'
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2 group text-left py-0.5"
                  >
                    <span className="text-amber-400 text-[9px] flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                      ▶
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Head Office Contact (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#EB5A24] pl-2.5">
              Head Office
            </h4>
            <div className="space-y-4 text-xs text-neutral-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div className="text-white font-semibold">{companyDetails.legalName}</div>
                  <div>4 Celliers Road, Glen Austen</div>
                  <div>Midrand, 1687, South Africa</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <a href={`tel:${companyDetails.telephone.replace(/\s+/g, '')}`} className="hover:text-white transition">
                      Tel: {companyDetails.telephone}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${companyDetails.mobile.replace(/\s+/g, '')}`} className="hover:text-white transition">
                      Mobile: {companyDetails.mobile}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition">
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-10 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div>© 2026 HBC Construction (Pty) Ltd. All rights reserved.</div>
          <button
            onClick={onRequestQuote}
            className="min-h-[44px] px-5 py-3 bg-[#EB5A24] hover:bg-[#D84E1A] text-white font-bold text-xs tracking-wide rounded-lg shadow-md transition transform active:scale-95 cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </footer>
  );
};
