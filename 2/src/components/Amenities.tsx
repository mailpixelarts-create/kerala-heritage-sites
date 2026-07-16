import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const amenities = [
  { icon: "🌿", name: "Honey Museum", desc: "Learn about native apiculture and harvest pure highland honey." },
  { icon: "🪔", name: "Ayurvedic Wellness", desc: "Traditional Kerala treatments, herbal oil therapies & steam baths." },
  { icon: "🍽️", name: "Restaurant", desc: "Farm-to-table Kerala cuisine prepared from estate-grown produce." },
  { icon: "✨", name: "Event Space", desc: "Intimate gatherings, celebrations and retreats in the highlands." },
  { icon: "🎠", name: "Children's Park", desc: "Safe, natural play areas set among teak and spice trees." },
  { icon: "💧", name: "Swimming Pool", desc: "An infinity pool overlooking the misty Western Ghats." },
  { icon: "🎣", name: "Fishing Spot", desc: "Catch tilapia and karimeen from our spring-fed pond." },
  { icon: "🌾", name: "Farming Area", desc: "Tend an organic vegetable patch during your stay." },
];

const AmenityCard = memo(function AmenityCard({
  icon,
  name,
  desc,
  index,
}: {
  icon: string;
  name: string;
  desc: string;
  index: number;
}) {
  return (
    <article
      className="amenity-card amenity-reveal"
      style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <span className="amenity-card__num">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="amenity-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="amenity-card__name">{name}</h3>
      <p className="amenity-card__desc">{desc}</p>
    </article>
  );
});

const Amenities = memo(function Amenities() {
  const sectionRef = useReveal(".amenity-reveal");

  return (
    <section ref={sectionRef} className="amenities" aria-labelledby="amenities-title">
      <div className="amenities__inner">
        <div className="amenities__header">
          <div className="amenity-reveal">
            <p className="amenities__eyebrow">Resort Amenities</p>
          </div>
          <div className="amenity-reveal" data-delay="140">
            <h2 id="amenities-title" className="amenities__title">
              Everything at
              <span className="amenities__title-accent"> Your Doorstep</span>
            </h2>
          </div>
        </div>

        <div className="amenities__grid">
          {amenities.map((a, i) => (
            <AmenityCard key={a.name} {...a} index={i} />
          ))}
        </div>

        <div className="amenities__footer amenity-reveal" data-delay="1000">
          <p>
            Full internal infrastructure, roads, landscaping and ongoing
            maintenance are managed by Agarland Developers.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Amenities;
