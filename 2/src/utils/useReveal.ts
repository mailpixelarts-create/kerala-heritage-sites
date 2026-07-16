import { useEffect, useRef } from "react";

export function useReveal(selector: string, rootMargin = "0px 0px -80px 0px") {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll(selector);
            targets.forEach((t) => t.classList.add("is-visible"));
          }
        });
      },
      { rootMargin, threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [selector, rootMargin]);

  return sectionRef;
}
