import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, ShieldAlert, Building2 } from 'lucide-react';
import { companyDetails } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultProjectRef?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Civil Construction',
  defaultProjectRef = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: defaultService,
    projectLocation: '',
    estimatedTimeline: 'Immediate (Within 1 Month)',
    projectScope: defaultProjectRef ? `Inquiry regarding project scope similar to: ${defaultProjectRef}\n` : ''
  });

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-neutral-900 text-white px-4 sm:px-6 py-4 sm:py-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="pr-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
              <Building2 className="w-4 h-4" />
              <span>HBC Construction (Pty) Ltd</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">Request a Project Tender & Quotation</h3>
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
              CIDB Grades 9GB / 9CE Turnkey Multidisciplinary Construction Solutions
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-neutral-900">Enquiry Successfully Logged</h4>
            <p className="text-neutral-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Our estimating and engineering team at HBC Construction has received your project briefing. We will review the specifications and contact you at <span className="font-semibold text-neutral-900">{formData.email}</span>.
            </p>

            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 text-left text-xs text-neutral-600 max-w-md mx-auto space-y-1">
              <div className="font-semibold text-neutral-800 mb-1">Direct Head Office Contact:</div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>Telephone: {companyDetails.telephone} | Mobile: {companyDetails.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-600" />
                <span>Email: {companyDetails.email}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition shadow-sm text-sm"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sipho Ndlovu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Company / Organization <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Department of Infrastructure / Private Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.co.za"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Contact Telephone / Mobile <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 011 314 4737 / 082 853 2960"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Primary Discipline / Service <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                >
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="General Building">General Building</option>
                  <option value="Plant Hire">Plant Hire</option>
                  <option value="Civil Construction">Civil Construction (Roads, Bridges, Stormwater)</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Structural Construction">Structural Construction</option>
                  <option value="Multi-disciplinary Turnkey">Multi-disciplinary Turnkey Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Project Location (City / Province)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Midrand, Gauteng / Eastern Cape"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Project Scope & Requirements Description <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder="Please outline the tender or project scope, estimated bill of quantities, key milestones or site specifics..."
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
              <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Direct procurement routing to Midrand HQ</span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Tender Enquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
