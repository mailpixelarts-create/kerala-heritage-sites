import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const About = memo(function About() {
  const sectionRef = useReveal(".reveal, .about__stat");

  return (
    <section ref={sectionRef} id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__grid">
          <div className="about__media reveal stagger" data-delay="0">
            <div className="about__img">
              <img src="/images/plantation.jpg" alt="Agarwood and sandalwood saplings in a Kerala plantation" loading="lazy" />
            </div>
            <div className="about__media-caption">
              <span className="about__media-tag">Plot No. 14 · 25 Cents</span>
              <span className="about__media-coords">10.0889° N · 76.5253° E</span>
            </div>
          </div>

          <div className="about__copy">
            <div className="reveal stagger" data-delay="120">
              <p className="about__eyebrow">The Project</p>
            </div>
            <div className="reveal stagger" data-delay="240">
              <h2 id="about-title" className="about__title">
                A Green Legacy,
                <span className="about__title-accent"> Rooted in Kerala</span>
              </h2>
            </div>
            <div className="reveal stagger" data-delay="360">
              <p className="about__text">
                Agarland Developers is stewarding a living plantation across the
                Western Ghats — 11,000 Agarwood and 3,000 Sandalwood plants —
                woven around a resort of handcrafted Kerala cottages. Every
                share is a registered 25-cent plot with a cottage, a plantation,
                and a stake in a heritage that will outlive us.
              </p>
            </div>

            <div className="about__stats">
              <div className="about__stat reveal stagger" data-delay="480">
                <span className="about__stat-value">11,000</span>
                <span className="about__stat-label">Agarwood Plants</span>
              </div>
              <div className="about__stat reveal stagger" data-delay="600">
                <span className="about__stat-value">3,000</span>
                <span className="about__stat-label">Sandalwood Plants</span>
              </div>
              <div className="about__stat reveal stagger" data-delay="720">
                <span className="about__stat-value">100%</span>
                <span className="about__stat-label">Registered Ownership</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__plants">
          <article className="plant-card reveal stagger" data-delay="0">
            <span className="plant-card__num">I</span>
            <h3 className="plant-card__title">Agarwood · Oud</h3>
            <p className="plant-card__text">
              The "liquid gold" of perfumery. Agarwood yields a rare fragrant
              resin used in the world's most coveted attars, incense, and
              traditional medicine across the Middle East and Asia.
            </p>
          </article>
          <article className="plant-card reveal stagger" data-delay="140">
            <span className="plant-card__num">II</span>
            <h3 className="plant-card__title">Sandalwood · Chandana</h3>
            <p className="plant-card__text">
              Sacred and scarce. Its aromatic heartwood and oil are prized in
              fine perfumes, cosmetics, and Ayurvedic formulations — with demand
              far outstripping legal supply worldwide.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
});

export default About;
