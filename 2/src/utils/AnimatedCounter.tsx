import { useEffect, useRef, useState, memo } from "react";

export default memo(function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  format,
  duration = 2000,
  delay = 0,
  start,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  format?: (v: number) => string;
  duration?: number;
  delay?: number;
  start?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mode 1: explicit start prop
  // Mode 2: IntersectionObserver (default)
  const useObserver = start === undefined;

  useEffect(() => {
    if (useObserver) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [useObserver]);

  useEffect(() => {
    const shouldStart = useObserver ? triggered : start;
    if (!shouldStart) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setDisplay(ease * target);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timeout);
  }, [triggered, start, useObserver, target, duration, delay]);

  const rendered = format
    ? format(Math.round(display))
    : `${prefix}${Math.round(display).toLocaleString("en-IN")}${suffix}`;

  return (
    <div ref={ref} className="counter" aria-label={rendered}>
      {rendered}
    </div>
  );
});
