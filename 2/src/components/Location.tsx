import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const Location = memo(function Location() {
  const sectionRef = useReveal(".loc-reveal");

  return (
    <section ref={sectionRef} className="location" aria-labelledby="location-title">
      <div className="location__inner">
        <div className="location__grid">
          <div className="location__map loc-reveal">
            <div className="location__map-frame">
              <div className="location__pin">
                <span className="location__pin-pulse" />
                <span className="location__pin-dot" />
              </div>
              <div className="location__coord-grid" aria-hidden="true">
                <span className="location__coord-line location__coord-line--h" style={{ top: "30%" }} />
                <span className="location__coord-line location__coord-line--h" style={{ top: "60%" }} />
                <span className="location__coord-line location__coord-line--v" style={{ left: "40%" }} />
                <span className="location__coord-line location__coord-line--v" style={{ left: "70%" }} />
              </div>
              <span className="location__coords-label">
                10.0889° N · 76.5253° E
              </span>
            </div>
          </div>

          <div className="location__content">
            <div className="loc-reveal">
              <p className="location__eyebrow">Location</p>
            </div>
            <div className="loc-reveal" data-delay="140">
              <h2 id="location-title" className="location__title">
                In the Heart of the
                <span className="location__title-accent"> Western Ghats</span>
              </h2>
            </div>
            <div className="loc-reveal" data-delay="280">
              <p className="location__body">
                A UNESCO World Heritage Site and one of the world's eight
                hottest biodiversity hotspots. Misty year-round, fed by monsoon
                rains, and rich with teak, rosewood, cardamom and pepper — the
                birthplace of Ayurveda.
              </p>
            </div>
            <div className="loc-reveal location__highlights" data-delay="420">
              <div className="loc-highlight">
                <span className="loc-highlight__label">Nearest Airport</span>
                <span className="loc-highlight__value">Cochin International</span>
              </div>
              <div className="loc-highlight">
                <span className="loc-highlight__label">Drive Time</span>
                <span className="loc-highlight__value">≈ 2 hours</span>
              </div>
              <div className="loc-highlight">
                <span className="loc-highlight__label">Elevation</span>
                <span className="loc-highlight__value">≈ 800 m</span>
              </div>
              <div className="loc-highlight">
                <span className="loc-highlight__label">Climate</span>
                <span className="loc-highlight__value">18°–28°C Year Round</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Location;
