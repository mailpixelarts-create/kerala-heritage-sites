import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const phases = [
  {
    year: "Year 1",
    title: "Grace Period",
    return: "Registration & Onboarding",
    sub: "After property registration, your plantation is established and the cottage constructed.",
    emphasis: false,
  },
  {
    year: "Year 2",
    title: "Quarterly Returns",
    return: "₹45,000 / quarter",
    sub: "You begin receiving hospitality and plantation revenue four times a year.",
    emphasis: true,
  },
  {
    year: "Year 3+",
    title: "Monthly Returns",
    return: "₹15,000 / month",
    sub: "Monthly income for the lifetime of the estate, with upside as the trees mature.",
    emphasis: true,
  },
];

const Investment = memo(function Investment() {
  const sectionRef = useReveal(".invest-reveal");

  return (
    <section ref={sectionRef} className="investment" aria-labelledby="invest-title">
      <div className="investment__inner">
        <div className="investment__header">
          <div className="invest-reveal">
            <p className="investment__eyebrow">The Investment Plan</p>
          </div>
          <div className="invest-reveal" data-delay="140">
            <h2 id="invest-title" className="investment__title">
              A Clear Path to
              <span className="investment__title-accent"> Returns</span>
            </h2>
          </div>
          <div className="invest-reveal" data-delay="280">
            <p className="investment__subtitle">
              One share starts at <strong className="text-gold">₹1,10,000</strong>,
              for a total property value of <strong>₹1.10 Crore</strong>. Income
              begins as the resort and plantation mature.
            </p>
          </div>
        </div>

        <div className="investment__timeline">
          {phases.map((phase, i) => (
            <div
              key={phase.year}
              className={`invest-reveal invest-phase ${phase.emphasis ? "invest-phase--highlight" : ""}`}
              style={{ "--delay": `${420 + i * 180}ms` } as React.CSSProperties}
            >
              <div className="invest-phase__marker" aria-hidden="true">
                <span className="invest-phase__dot" />
                {i < phases.length - 1 && <span className="invest-phase__line" />}
              </div>
              <div className="invest-phase__content">
                <span className="invest-phase__year">{phase.year}</span>
                <h3 className="invest-phase__title">{phase.title}</h3>
                <div className="invest-phase__return">{phase.return}</div>
                <p className="invest-phase__sub">{phase.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="invest-reveal investment__note" data-delay="900">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>Returns are based on projected hospitality and plantation yields; see disclosures at the bottom.</span>
        </div>
      </div>
    </section>
  );
});

export default Investment;
