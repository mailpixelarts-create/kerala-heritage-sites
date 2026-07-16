import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const disclosures = [
  {
    title: "Speculative Investment",
    body: "Returns are heavily based on the future market value of mature Agarwood and Sandalwood timber, which may fluctuate based on harvest timing, regulations and global demand.",
  },
  {
    title: "Developer Information",
    body: "This brochure does not include full developer track record. We encourage every prospective shareholder to review Agarland Developers' credentials, legal clearances and references before investing.",
  },
  {
    title: "Registration & Title",
    body: "Each 25-cent plot is individually registered in the buyer's name. Legal documentation and title deed are provided upon completion of the purchase process.",
  },
];

const Disclosures = memo(function Disclosures() {
  const sectionRef = useReveal(".disc-reveal");

  return (
    <section ref={sectionRef} className="disclosures" aria-labelledby="disc-title">
      <div className="disclosures__inner">
        <div className="disc-reveal">
          <p className="disclosures__eyebrow">Important Considerations</p>
        </div>
        <div className="disc-reveal" data-delay="140">
          <h2 id="disc-title" className="disclosures__title">
            Please Note
            <span className="disclosures__title-accent"> Carefully</span>
          </h2>
        </div>

        <div className="disclosures__grid">
          {disclosures.map((d, i) => (
            <div
              key={d.title}
              className="disc-card disc-reveal"
              style={{ "--delay": `${280 + i * 140}ms` } as React.CSSProperties}
            >
              <span className="disc-card__icon" aria-hidden="true">⚠</span>
              <h3 className="disc-card__title">{d.title}</h3>
              <p className="disc-card__body">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Disclosures;
