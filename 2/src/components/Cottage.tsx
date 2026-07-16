import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const features = [
  { label: "Plot Size", value: "25 Cents", sub: "≈ 10,890 sq.ft registered land" },
  { label: "Cottage", value: "550–600", sub: "Sq.ft built-up Kerala cottage" },
  { label: "Architecture", value: "Traditional", sub: "Laterite stone, teak wood & tile" },
  { label: "Ownership", value: "Registered", sub: "100% individual title deed" },
];

const Cottage = memo(function Cottage() {
  const sectionRef = useReveal(".cottage-reveal");

  return (
    <section ref={sectionRef} className="cottage" aria-labelledby="cottage-title">
      <div className="cottage__bg" aria-hidden="true" />
      <div className="cottage__veil" aria-hidden="true" />
      <div className="cottage__inner">
        <div className="cottage__header">
          <div className="cottage-reveal">
            <p className="cottage__eyebrow">The Cottage</p>
          </div>
          <div className="cottage-reveal" data-delay="140">
            <h2 id="cottage-title" className="cottage__title">
              Handcrafted by
              <span className="cottage__title-accent"> Master Artisans</span>
            </h2>
          </div>
        </div>

        <div className="cottage__body">
          <div className="cottage__visual cottage-reveal" data-delay="240">
            <div className="cottage__image" />
            <div className="cottage__tag">
              <span className="cottage__tag-dot" />
              <span>Rendering of interior</span>
            </div>
          </div>

          <div className="cottage__specs">
            {features.map((f, i) => (
              <div
                key={f.label}
                className="cottage-spec cottage-reveal"
                style={{ "--delay": `${340 + i * 100}ms` } as React.CSSProperties}
              >
                <span className="cottage-spec__label">{f.label}</span>
                <span className="cottage-spec__value">{f.value}</span>
                <span className="cottage-spec__sub">{f.sub}</span>
                <div className="cottage-spec__line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cottage;
