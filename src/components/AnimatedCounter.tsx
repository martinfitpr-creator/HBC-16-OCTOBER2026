import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  displayValue?: string;
  label: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  displayValue,
  label
}) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;
    if (displayValue) return;

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
  }, [displayValue, value]);

  return (
    <div
      ref={counterRef}
      className="rounded-lg border border-neutral-200 bg-white px-3 py-4 text-center sm:px-5 sm:py-5"
      role="group"
      aria-label={`${displayValue ?? `${value}${suffix}`} ${label}`}
    >
      <div aria-hidden="true" className="text-2xl font-extrabold tabular-nums text-orange-600 sm:text-3xl">
        {displayValue ?? `${count}${suffix}`}
      </div>
      <div className="mt-2 text-xs font-semibold leading-snug text-neutral-700 sm:text-sm">
        {label}
      </div>
    </div>
  );
};
