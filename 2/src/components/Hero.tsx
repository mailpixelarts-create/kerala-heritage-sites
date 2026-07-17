import { useEffect, useRef } from "react";
import AnimatedCounter from "../utils/AnimatedCounter";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const setParallax = (x: number, y: number) => {
      hero.style.setProperty("--px", `${x}px`);
      hero.style.setProperty("--py", `${y}px`);
    };

    const handleMove = (e: MouseEvent) => {
      setParallax(
        (e.clientX / window.innerWidth - 0.5) * -14,
        (e.clientY / window.innerHeight - 0.5) * -10
      );
    };
    const handleLeave = () => setParallax(0, 0);
    const handleScroll = () => {
      hero.style.setProperty("--sy", `${Math.min(window.scrollY * 0.13, 38)}px`);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Hero elements are always in view on load, reveal them
    const revealElements = hero.querySelectorAll(".reveal");
    revealElements.forEach((el) => el.classList.add("is-visible"));

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} id="estate" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__corners" aria-hidden="true">
        <span className="corner corner--tl" />
        <span className="corner corner--tr" />
        <span className="corner corner--bl" />
        <span className="corner corner--br" />
      </div>

      <div className="hero__inner">
        <div className="hero__content" ref={contentRef}>
          <div className="reveal stagger" data-delay="100">
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-line" />
              The Opportunity
              <span className="hero__eyebrow-line" />
            </p>
          </div>

          <div className="reveal stagger" data-delay="260">
            <h1 id="hero-title" className="hero__title">
              Own a Piece of Kerala
            </h1>
          </div>

          <div className="reveal stagger" data-delay="460">
            <div className="hero__price">
              <div className="hero__price-value">
                <AnimatedCounter
                  target={110000}
                  prefix="₹"
                  format={(v: number) => `₹${v.toLocaleString("en-IN")}`}
                  duration={2640}
                  delay={3600}
                  start={true}
                />
              </div>
              <p className="hero__price-note">Starting at, per share</p>
            </div>
          </div>

          <div className="reveal stagger" data-delay="620">
            <p className="hero__description">
              Your share unlocks a private plot, a handcrafted cottage, and a
              living legacy in the hills of Kerala.
            </p>
          </div>

          <div className="reveal stagger" data-delay="820">
            <div className="hero__stats" role="list">
              {[
                { value: "25", label: "Cent Private Estate" },
                { value: "225", label: "Agarwood Saplings" },
                { value: "50", label: "Sandalwood Saplings" },
                { value: "550-600", label: "Sq.ft Kerala Cottage" },
                { value: "100%", label: "Legally Registered to You" },
                { value: "Full", label: "Plantation Setup Included" },
              ].map((stat) => (
                <div key={stat.label} className="hero__stat" role="listitem">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line">
          <span className="hero__scroll-thumb" />
        </div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}
