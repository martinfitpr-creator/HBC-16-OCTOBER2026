import { ArrowLeft } from 'lucide-react';
import { PageId } from '../types';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage = ({ onNavigate }: NotFoundPageProps) => (
  <section className="flex flex-1 items-center justify-center bg-cream px-6 py-24 text-charcoal">
    <div className="max-w-xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-hbc-red">Page not found</p>
      <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">404</h1>
      <p className="mt-4 text-base leading-relaxed text-warm-grey sm:text-lg">
        The page you’re looking for may have moved or is no longer available.
      </p>
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hbc-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-hbc-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hbc-red"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Return to home
      </button>
    </div>
  </section>
);
