import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle,
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2, 
  Clock, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { PageId } from '../types';
import { companyDetails } from '../data/companyData';
import { SectionHeader } from '../components/SectionHeader';
import { FileAttachmentField } from '../components/FileAttachmentField';
import { submitEnquiry } from '../utils/submitEnquiry';
import contactHeroBg from '../assets/images/ud-trucks-warehouse.jpg';

const whatsappNumber = `27${companyDetails.mobile.replace(/\D/g, '').replace(/^0/, '')}`;
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello HBC Construction, I would like to request a quote.')}`;

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Civil Construction',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setFormError('');
    try {
      await submitEnquiry(form, 'contact');
      setFormSubmitted(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'The enquiry could not be sent. Please contact HBC directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={contactHeroBg}
            alt="HBC Construction Head Office"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Excellence in Execution</span>
              <span className="text-neutral-500">•</span>
              <span>Connect With Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact HBC Construction
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Reach our executive and engineering teams at our Midrand headquarters. We respond promptly to commercial tenders, municipal enquiries, and turnkey project consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info Cards & Interactive Enquiry Form */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Head Office & Official Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeader
                  eyebrow="Excellence in Execution"
                  title="Head Office Midrand"
                  description="Our central administrative, fleet logistics, and engineering management center in Gauteng."
                />
              </div>

              {/* Direct Details Card */}
              <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Physical Address</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">{companyDetails.legalName}</div>
                      <div className="text-xs sm:text-sm text-neutral-700">4 Celliers Road</div>
                      <div className="text-xs sm:text-sm text-neutral-700">Glen Austen, Midrand, 1687</div>
                      <div className="text-xs sm:text-sm text-neutral-700">South Africa</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Telephone & Landline</div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">
                        <a href={`tel:${companyDetails.telephone.replace(/\s+/g, '')}`} className="hover:text-orange-600 transition">
                          Telephone: {companyDetails.telephone}
                        </a>
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-700">
                        <a href={`tel:${companyDetails.mobile.replace(/\s+/g, '')}`} className="hover:text-orange-600 transition">
                          Mobile: {companyDetails.mobile}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email Enquiries</div>
                      <a href={`mailto:${companyDetails.email}`} className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition block mt-0.5">
                        {companyDetails.email}
                      </a>
                      <div className="text-xs text-neutral-500">Procurement, tenders & general correspondence</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">Official Website</div>
                      <a href={`https://${companyDetails.website}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-orange-600 hover:underline mt-0.5 block">
                        {companyDetails.website}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>Office Hours: Monday – Friday, 07:30 – 17:00 (SAST)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${companyDetails.telephone.replace(/\s+/g, '')}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
                >
                  <Phone className="h-4 w-4" />
                  Call HBC
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1fb85a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp HBC
                </a>
              </div>

              {/* Statutory Footnote */}
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-300 text-xs space-y-1.5">
                <div className="font-bold text-white text-[11px] uppercase tracking-wider text-orange-400">
                  Statutory Registration Codes
                </div>
                <div>Company Reg: <span className="text-white font-mono">{companyDetails.companyReg}</span></div>
                <div>CIDB CRS Registration: <span className="text-white font-mono">{companyDetails.cidbReg}</span> (9GB / 9CE)</div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 shadow-xl space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                    Excellence in Execution
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-900">Send an Enquiry</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Fill out the form below and an HBC project director will review your enquiry promptly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900">Enquiry Submitted Successfully</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting HBC Construction. Your enquiry regarding <span className="font-semibold text-neutral-900">{contactForm.projectType}</span> has been sent successfully. We will reach out to you at <span className="font-semibold text-neutral-900">{contactForm.email}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setContactForm({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          projectType: 'Civil Construction',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 bg-neutral-900 text-white font-semibold rounded-lg text-xs hover:bg-neutral-800 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Company / Department <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="company"
                          type="text"
                          required
                          placeholder="Your Organization"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="name@domain.co.za"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="011 314 4737 / 082..."
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Project Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={contactForm.projectType}
                        onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                      >
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="General Building">General Building</option>
                        <option value="Plant Hire">Plant Hire</option>
                        <option value="Civil Construction">Civil Construction (Roads, Bridges, Stormwater)</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Structural Construction">Structural Construction</option>
                        <option value="General Corporate Enquiry">General Corporate Correspondence</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Message / Project Brief <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Please describe your tender details, scope requirements, location and timelines..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-white transition"
                      />
                    </div>

                    <FileAttachmentField id="contact-attachments" />
                    {formError && (
                      <div role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{formError} Contact us at <a className="font-semibold underline" href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a> or <a className="font-semibold underline" href={`tel:${companyDetails.telephone.replace(/[^\d+]/g, '')}`}>{companyDetails.telephone}</a>.</span>
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold text-sm rounded-lg shadow-sm transition transform active:scale-98 group"
                    >
                      <Send className="w-4 h-4 text-orange-600 group-hover:translate-x-0.5 transition-transform" />
                      <span>{isSubmitting ? 'Sending…' : 'Submit Enquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          Google Maps Location Integration Card for Midrand Office
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600">Location Map</div>
              <h3 className="text-2xl font-extrabold text-neutral-900">Head Office Location — Midrand</h3>
              <p className="text-xs sm:text-sm text-neutral-600">4 Celliers Road, Glen Austen, Midrand, 1687, Gauteng</p>
            </div>
            <a
              href="https://maps.google.com/?q=4+Celliers+Road+Glen+Austen+Midrand+1687+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-300 hover:border-orange-500 rounded-lg text-xs font-bold text-neutral-800 shadow-xs transition"
            >
              <Navigation className="w-3.5 h-3.5 text-orange-600" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>

          {/* Interactive Styled Map Card */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md h-80 sm:h-96 bg-neutral-200">
            <iframe
              title="HBC Construction Midrand Office Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=4+Celliers+Road,+Glen+Austen,+Midrand,+1687,+South+Africa&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md text-white border border-neutral-800 shadow-lg max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>HBC Construction (Pty) Ltd</span>
              </div>
              <div className="text-xs text-neutral-300 mt-1">
                4 Celliers Road, Glen Austen, Midrand
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                Conveniently accessible via Old Pretoria Main Road & R101
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          Have a Project in Mind? Large CTA Banner
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-600/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
              <span>National Turnkey Contractor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Talk to HBC Construction about your next infrastructure or construction project.
            </p>
            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-orange-600/30 transition transform active:scale-95"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
