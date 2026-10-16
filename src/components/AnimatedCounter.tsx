import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  label
}) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setCount(value);
      return;
    }

    let animationFrame = 0;
    let startTime: number | undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();
      const animate = (timestamp: number) => {
        startTime ??= timestamp;
        const progress = Math.min((timestamp - startTime) / 1200, 1);
        setCount(Math.round(value * progress));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    }, { threshold: 0.4 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div
      ref={counterRef}
      className="rounded-xl border-2 border-neutral-300 bg-white px-4 py-5 text-center shadow-[0_4px_12px_rgba(0,0,0,0.18)] sm:px-6 sm:py-6"
      role="group"
      aria-label={`${value}${suffix} ${label}`}
    >
      <div aria-hidden="true" className="text-3xl font-extrabold tabular-nums text-orange-600 sm:text-4xl">
        {count}{suffix}
      </div>
      <div className="mt-2 text-xs font-semibold leading-snug text-neutral-700 sm:text-sm">
        {label}
      </div>
    </div>
  );
};
