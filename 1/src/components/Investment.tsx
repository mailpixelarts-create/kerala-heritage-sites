import { memo } from "react";
import { useReveal } from "../utils/useReveal";
import AnimatedCounter from "../utils/AnimatedCounter";

const timeline = [
  {
    year: "Year 01",
    title: "Registration & Grace",
    amount: "—",
    note: "After registration, your plot is documented and plantation development begins.",
  },
  {
    year: "Year 02",
    title: "Quarterly Returns",
    amount: "₹45,000",
    cadence: "Every 3 months",
    note: "Four payouts of ₹45,000 per year — ₹1,80,000 annually.",
  },
  {
    year: "Year 03+",
    title: "Monthly Income",
    amount: "₹15,000",
    cadence: "Every month",
    note: "Steady monthly income of ₹1,80,000 per year — for the life of the lease.",
  },
];

const Investment = memo(function Investment() {
  const sectionRef = useReveal(".reveal, .timeline-card, .maturity-row");

  return (
    <section ref={sectionRef} id="investment" className="investment" aria-labelledby="investment-title">
      <div className="investment__inner">
        <div className="investment__head">
          <div className="reveal stagger" data-delay="0">
            <p className="investment__eyebrow">Investment & Returns</p>
          </div>
          <div className="reveal stagger" data-delay="120">
            <h2 id="investment-title" className="investment__title">
              A Share Today,
              <span className="investment__title-accent"> A Harvest Tomorrow</span>
            </h2>
          </div>
        </div>

        <div className="investment__grid">
          <div className="investment__col">
            <h3 className="investment__col-title reveal stagger" data-delay="200">Income Schedule</h3>
            <div className="timeline">
              {timeline.map((t, i) => (
                <article
                  key={t.year}
                  className="timeline-card reveal stagger"
                  style={{ "--delay": `${300 + i * 120}ms` } as React.CSSProperties}
                >
                  <div className="timeline-card__year">{t.year}</div>
                  <div className="timeline-card__body">
                    <h4 className="timeline-card__title">{t.title}</h4>
                    <p className="timeline-card__note">{t.note}</p>
                  </div>
                  <div className="timeline-card__amount">
                    <span className="timeline-card__value">{t.amount}</span>
                    {t.cadence && <span className="timeline-card__cadence">{t.cadence}</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="investment__col">
            <h3 className="investment__col-title reveal stagger" data-delay="200">Maturity Value</h3>
            <div className="maturity reveal stagger" data-delay="320">
              <div className="maturity-row">
                <div className="maturity-row__label">
                  <span className="maturity-row__count">225</span>
                  <span className="maturity-row__name">Agarwood Trees</span>
                  <span className="maturity-row__unit">@ ₹20,000 / tree</span>
                </div>
                <div className="maturity-row__value">
                  <AnimatedCounter
                    target={4500000}
                    format={(v: number) => `₹${v.toLocaleString("en-IN")}`}
                    duration={2000}
                    delay={400}
                  />
                </div>
              </div>
              <div className="maturity-row">
                <div className="maturity-row__label">
                  <span className="maturity-row__count">50</span>
                  <span className="maturity-row__name">Sandalwood Trees</span>
                  <span className="maturity-row__unit">@ ₹3,00,000 / tree</span>
                </div>
                <div className="maturity-row__value">
                  <AnimatedCounter
                    target={15000000}
                    format={(v: number) => `₹${v.toLocaleString("en-IN")}`}
                    duration={2000}
                    delay={600}
                  />
                </div>
              </div>
              <div className="maturity__total">
                <span className="maturity__total-label">Projected Value at Maturity</span>
                <span className="maturity__total-value">
                  <AnimatedCounter
                    target={19500000}
                    format={(v: number) => `₹${v.toLocaleString("en-IN")}`}
                    duration={2400}
                    delay={900}
                  />
                </span>
                <span className="maturity__total-note">≈ ₹1.95 Crore · per share</span>
              </div>
            </div>

            <p className="investment__disclaimer reveal stagger" data-delay="480">
              * Projected long-term values are estimates based on prevailing
              market prices for Agarwood and Sandalwood and may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Investment;
