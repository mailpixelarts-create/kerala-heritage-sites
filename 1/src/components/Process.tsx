import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const steps = [
  {
    num: "01",
    title: "Reserve a Share",
    text: "Begin with a single share of ₹1,10,000. Your investment is secured against a registered 25-cent parcel of the estate.",
  },
  {
    num: "02",
    title: "Individual Registration",
    text: "Your plot, cottage, and plantation are individually registered in your name with the relevant Kerala authorities.",
  },
  {
    num: "03",
    title: "Cottage & Plantation Built",
    text: "A handcrafted 550-600 sq. ft. Kerala cottage is constructed, and 225 Agarwood plus 50 Sandalwood saplings are planted on your plot.",
  },
  {
    num: "04",
    title: "Earn Quarterly Returns",
    text: "From Year 2, receive ₹45,000 every quarter. From Year 3 onwards, returns shift to ₹15,000 monthly — managed by the resort.",
  },
  {
    num: "05",
    title: "Harvest the Legacy",
    text: "At maturity, your plantation alone projects a value of ₹1.95 Crore — a green inheritance you can enjoy, pass on, or sell.",
  },
];

const Process = memo(function Process() {
  const sectionRef = useReveal(".reveal, .step");

  return (
    <section ref={sectionRef} id="process" className="process" aria-labelledby="process-title">
      <div className="process__inner">
        <div className="process__head">
          <div className="reveal stagger" data-delay="0">
            <p className="process__eyebrow">The Journey</p>
          </div>
          <div className="reveal stagger" data-delay="120">
            <h2 id="process-title" className="process__title">
              Five Steps From
              <span className="process__title-accent"> Share to Legacy</span>
            </h2>
          </div>
        </div>

        <ol className="process__list">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="step reveal stagger"
              style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="step__head">
                <span className="step__num">{s.num}</span>
                <span className="step__line" aria-hidden="true" />
              </div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
});

export default Process;
