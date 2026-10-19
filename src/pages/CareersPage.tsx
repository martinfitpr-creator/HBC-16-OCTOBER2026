import React from 'react';
import { ArrowRight, BriefcaseBusiness, Mail } from 'lucide-react';
import { PageId } from '../types';
import careersHeroImage from '../assets/images/capabilities-crane-site-optimized.jpg';
import { companyDetails } from '../data/companyData';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => (
  <div className="flex w-full flex-col">
    <section className="relative isolate overflow-hidden bg-neutral-950 py-16 text-white sm:py-24">
      <img
        src={careersHeroImage}
        alt="Construction team working on site"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-neutral-950/70" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Work with HBC
          </div>
          <h1 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Build a future that lasts.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">
            Our work brings together people who care about delivering quality construction and infrastructure across South Africa.
          </p>
        </div>
      </div>
    </section>

    <section className="flex-1 bg-[#FAF6F1] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
              <BriefcaseBusiness className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-600">
                Current opportunities
              </span>
              <h2 className="mt-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
                No positions are being advertised at the moment.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                Please check back here for future vacancies. For general career-related enquiries, you are welcome to contact our team.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
                >
                  Contact HBC
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`mailto:${companyDetails.email}?subject=Career%20enquiry`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-sm font-bold text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
                >
                  <Mail className="h-4 w-4" />
                  Email a career enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
