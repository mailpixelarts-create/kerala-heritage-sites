import { memo } from "react";
import AnimatedCounter from "../utils/AnimatedCounter";
import { useReveal } from "../utils/useReveal";

const estateDetails = [
  { value: 25, label: "Cent private estate", suffix: "" },
  { value: 225, label: "Agarwood saplings", suffix: "" },
  { value: 50, label: "Sandalwood saplings", suffix: "" },
  { value: 575, label: "Sq. ft. Kerala cottage", suffix: "" },
  { value: 100, label: "Legally registered to you", suffix: "%" },
  { value: 0, label: "Plantation setup included", suffix: "", special: "Full" },
];

const DetailCard = memo(function DetailCard({
  value,
  label,
  suffix,
  special,
  index,
}: {
  value: number;
  label: string;
  suffix: string;
  special?: string;
  index: number;
}) {
  return (
    <div
      className="detail-card"
      style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
    >
      <dt className="detail-card__value">
        {special ? (
          special
        ) : (
          <AnimatedCounter
            target={value}
            suffix={suffix}
            format={(v: number) =>
              suffix ? `${Math.round(v)}${suffix}` : `${Math.round(v)}`
            }
            duration={1600}
            delay={index * 150}
          />
        )}
      </dt>
      <dd className="detail-card__label">{label}</dd>
      <div className="detail-card__line" aria-hidden="true" />
    </div>
  );
});

export default memo(function Details() {
  const sectionRef = useReveal(".detail-card");

  return (
    <section ref={sectionRef} id="details" className="details" aria-labelledby="details-title">
      <div className="details__inner">
        <div className="reveal stagger" data-delay="0">
          <p className="details__eyebrow">What You Receive</p>
        </div>

        <div className="reveal stagger" data-delay="160">
          <h2 id="details-title" className="details__title">
            Every Share Is a
            <span className="details__title-accent"> Living Legacy</span>
          </h2>
        </div>

        <dl className="details__grid">
          {estateDetails.map((d, i) => (
            <DetailCard key={d.label} {...d} index={i} />
          ))}
        </dl>
      </div>
    </section>
  );
});
