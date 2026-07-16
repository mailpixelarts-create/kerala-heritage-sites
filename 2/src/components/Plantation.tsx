import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const trees = [
  {
    type: "Agarwood",
    latin: "Aquilaria malaccensis",
    count: 225,
    unit: "Trees",
    value: 4500000,
    perTree: 20000,
    note: "Produces Oud — one of the world's most rare and precious fragrant resins.",
  },
  {
    type: "Sandalwood",
    latin: "Santalum album",
    count: 50,
    unit: "Trees",
    value: 15000000,
    perTree: 300000,
    note: "Prized for aromatic heartwood and oil used in perfumes, medicine and cosmetics.",
  },
];

const Plantation = memo(function Plantation() {
  const sectionRef = useReveal(".plant-reveal");

  return (
    <section ref={sectionRef} className="plantation" aria-labelledby="plantation-title">
      <div className="plantation__bg" aria-hidden="true" />
      <div className="plantation__veil" aria-hidden="true" />
      <div className="plantation__inner">
        <div className="plantation__header">
          <div className="plant-reveal">
            <p className="plantation__eyebrow">Long-Term Value</p>
          </div>
          <div className="plant-reveal" data-delay="140">
            <h2 id="plantation-title" className="plantation__title">
              The Plantation
              <span className="plantation__title-accent"> at Maturity</span>
            </h2>
          </div>
        </div>

        <div className="plantation__grid">
          {trees.map((tree, i) => (
            <article
              key={tree.type}
              className="plant-card plant-reveal"
              style={{ "--delay": `${280 + i * 160}ms` } as React.CSSProperties}
            >
              <div className="plant-card__badge">{tree.type}</div>
              <p className="plant-card__latin">{tree.latin}</p>
              <div className="plant-card__numbers">
                <div>
                  <span className="plant-card__count">{tree.count}</span>
                  <span className="plant-card__unit">{tree.unit}</span>
                </div>
                <div className="plant-card__divider" aria-hidden="true" />
                <div>
                  <span className="plant-card__per-tree">₹{tree.perTree.toLocaleString("en-IN")}</span>
                  <span className="plant-card__per-label">per tree at maturity</span>
                </div>
              </div>
              <p className="plant-card__note">{tree.note}</p>
              <div className="plant-card__total">
                <span className="plant-card__total-label">Projected Value</span>
                <span className="plant-card__total-value">
                  ₹{tree.value.toLocaleString("en-IN")}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="plant-reveal plantation__total" data-delay="700">
          <span className="plantation__total-label">Combined Projected Value at Maturity</span>
          <span className="plantation__total-value">₹1,95,00,000</span>
          <span className="plantation__total-sub">₹1.95 Crore from your 275 trees alone</span>
        </div>
      </div>
    </section>
  );
});

export default Plantation;
