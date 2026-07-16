import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [size, setSize] = useState(12);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const outerRefAnim = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const update = () => {
      const lerpOuter = 0.08;
      outerRefAnim.current.x += (posRef.current.x - outerRefAnim.current.x) * lerpOuter;
      outerRefAnim.current.y += (posRef.current.y - outerRefAnim.current.y) * lerpOuter;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerRefAnim.current.x - 10}px, ${outerRefAnim.current.y - 10}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${posRef.current.x - size / 2}px, ${posRef.current.y - size / 2}px, 0)`;
      }
      requestAnimationFrame(update);
    };
    const raf = requestAnimationFrame(update);

    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.body.addEventListener("mouseenter", handleEnter);
    document.body.addEventListener("mouseleave", handleLeave);

    // Interactive elements
    const interactives = document.querySelectorAll("a, button, [role=button], .detail, .feature-card");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => setSize(48));
      el.addEventListener("mouseleave", () => setSize(12));
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseenter", handleEnter);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, [size]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={outerRef} className={`cursor-ring ${active ? "cursor-ring--visible" : ""} ${size > 14 ? "cursor-ring--expanded" : ""}`} />
      <div ref={innerRef} className={`cursor-dot ${active ? "cursor-dot--visible" : ""}`} />
    </div>
  );
}
