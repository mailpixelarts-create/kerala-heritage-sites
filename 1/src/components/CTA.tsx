import { memo, useRef } from "react";
import { useReveal } from "../utils/useReveal";

const CTA = memo(function CTA() {
  const sectionRef = useReveal(".reveal");
  const primaryRef = useRef<HTMLButtonElement>(null);

  // Magnetic hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = primaryRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
    el.style.transition = "none";
  };

  const handleMouseLeave = () => {
    const el = primaryRef.current;
    if (!el) return;
    el.style.transform = "translate3d(0, 0, 0)";
    el.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)";
    setTimeout(() => { if (el) el.style.transition = ""; }, 500);
  };

  return (
    <section ref={sectionRef} className="cta">
      <div className="cta__inner">
        <div className="cta__bg" aria-hidden="true" />
        <div className="cta__content">
          <div className="reveal stagger" data-delay="0">
            <p className="cta__eyebrow">Begin Your Journey</p>
          </div>
          <div className="reveal stagger" data-delay="160">
            <h2 className="cta__title">Your Legacy Awaits</h2>
          </div>
          <div className="reveal stagger" data-delay="320">
            <p className="cta__desc">
              Join a community of stewards preserving Kerala's natural heritage.
              Limited shares available — secure yours before the season ends.
            </p>
          </div>
          <div className="reveal stagger" data-delay="480">
            <div className="cta__actions">
              <button
                ref={primaryRef}
                type="button"
                className="cta__primary"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <span className="cta__primary-text">Reserve Your Share</span>
                <span className="cta__primary-icon" aria-hidden="true">→</span>
              </button>
              <a href="#details" className="cta__secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CTA;
