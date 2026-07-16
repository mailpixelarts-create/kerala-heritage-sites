import { useEffect, useRef, useState, memo } from "react";

export default memo(function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  format,
  duration = 2000,
  delay = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  format?: (v: number) => string;
  duration?: number;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now() + delay;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setDisplay(ease * target);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration, delay]);

  const rendered = format
    ? format(Math.round(display))
    : `${prefix}${Math.round(display).toLocaleString("en-IN")}${suffix}`;

  return (
    <div ref={ref} className="counter" aria-label={rendered}>
      {rendered}
    </div>
  );
});
