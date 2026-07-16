import { memo, useState } from "react";
import { useReveal } from "../utils/useReveal";

const faqs = [
  {
    q: "What exactly do I own?",
    a: "An individually registered 25-cent (≈ 10,890 sq. ft.) plot with a premium 550-600 sq. ft. Kerala cottage, 225 Agarwood saplings, and 50 Sandalwood saplings — all legally registered in your name.",
  },
  {
    q: "How much does a share cost?",
    a: "₹1,10,000 per share, contributing to a total property value of ₹1.10 Crore including the plot, cottage, and trees.",
  },
  {
    q: "When do returns begin?",
    a: "Year 1 is a grace period for registration and plantation setup. Year 2 pays ₹45,000 quarterly; Year 3 onwards pays ₹15,000 monthly.",
  },
  {
    q: "What is the long-term value?",
    a: "At maturity, the plantation alone projects a value of approximately ₹1.95 Crore — ₹45,00,000 from Agarwood and ₹1,50,00,000 from Sandalwood based on current market rates.",
  },
  {
    q: "Is the investment speculative?",
    a: "Long-term returns depend on future market values of Agarwood and Sandalwood, which can fluctuate. Agarland provides projections, not guarantees. Please conduct your own due diligence.",
  },
  {
    q: "Where is the project located?",
    a: "In the Western Ghats of Kerala, India — a UNESCO-listed biodiversity hotspot, approximately at 10.0889° N, 76.5253° E. Visit www.agarland.in for more.",
  },
];

const FAQ = memo(function FAQ() {
  const sectionRef = useReveal(".reveal");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={sectionRef} id="faq" className="faq" aria-labelledby="faq-title">
      <div className="faq__inner">
        <div className="faq__head">
          <div className="reveal stagger" data-delay="0">
            <p className="faq__eyebrow">Questions</p>
          </div>
          <div className="reveal stagger" data-delay="120">
            <h2 id="faq-title" className="faq__title">
              Considerations &
              <span className="faq__title-accent"> Clarity</span>
            </h2>
          </div>
        </div>

        <ul className="faq__list">
          {faqs.map((f, i) => (
            <li
              key={f.q}
              className={`faq__item reveal stagger ${open === i ? "faq__item--open" : ""}`}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <button
                type="button"
                className="faq__q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq__plus" aria-hidden="true">
                  <span /><span />
                </span>
              </button>
              <div className="faq__a">
                <p>{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default FAQ;
