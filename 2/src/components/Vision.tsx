import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const Vision = memo(function Vision() {
  const sectionRef = useReveal(".vision-reveal");

  return (
    <section ref={sectionRef} className="vision" aria-labelledby="vision-title">
      <div className="vision__inner">
        <div className="vision__col vision__col--content">
          <div className="vision-reveal">
            <p className="vision__eyebrow">Our Philosophy</p>
          </div>
          <div className="vision-reveal" data-delay="140">
            <h2 id="vision-title" className="vision__title">
              A Green Legacy,
              <span className="vision__title-accent"> Rooted in Kerala</span>
            </h2>
          </div>
          <div className="vision-reveal" data-delay="280">
            <p className="vision__lede">
              Agarland Developers blends luxury hospitality with sustainable
              agroforestry — offering you a sanctuary in the Western Ghats that
              grows in value year after year.
            </p>
          </div>
          <div className="vision-reveal" data-delay="420">
            <p className="vision__body">
              Your share is not just land. It is a registered 25-cent plot, a
              handcrafted Kerala cottage, and a working plantation of rare
              Agarwood and Sandalwood trees — assets that appreciate for
              generations.
            </p>
          </div>
          <div className="vision-reveal" data-delay="560">
            <div className="vision__stats">
              <div className="vision-stat">
                <span className="vision-stat__num">11,000</span>
                <span className="vision-stat__label">Agarwood Plants</span>
              </div>
              <div className="vision-stat">
                <span className="vision-stat__num">3,000</span>
                <span className="vision-stat__label">Sandalwood Plants</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vision__col vision__col--visual">
          <div className="vision-reveal vision-reveal--img" data-delay="200">
            <div className="vision__image">
              <div className="vision__image-inner" />
            </div>
            <div className="vision__image-caption">
              <span className="vision__coord">10.0889° N · 76.5253° E</span>
              <span className="vision__place">The Western Ghats, Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Vision;
