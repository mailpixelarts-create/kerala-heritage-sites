import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const amenities = [
  {
    name: "Honey Museum",
    note: "A living archive of native apiculture.",
    icon: (
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 5v8m-4-6v4m8-4v4" />
    ),
  },
  {
    name: "Ayurvedic Wellness",
    note: "Traditional treatments & therapies.",
    icon: (
      <path d="M12 3c3 4 5 7 5 10a5 5 0 01-10 0c0-3 2-6 5-10z" />
    ),
  },
  {
    name: "Restaurant",
    note: "Farm-to-table Kerala cuisine.",
    icon: (
      <path d="M5 3v8m4-8v8M7 11v10M15 3c-1.5 0-3 2-3 5s1.5 4 3 4v9" />
    ),
  },
  {
    name: "Event Space",
    note: "Weddings, retreats & gatherings.",
    icon: (
      <path d="M3 10l9-6 9 6v10H3V10zm6 10v-6h6v6" />
    ),
  },
  {
    name: "Children's Park",
    note: "Safe play amid the plantation.",
    icon: (
      <path d="M12 3a2 2 0 100 4 2 2 0 000-4zm-4 7h8l-1 11H9L8 10z" />
    ),
  },
  {
    name: "Swimming Pool",
    note: "Infinity edge over the valley.",
    icon: (
      <path d="M3 16c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M3 20c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M8 12V6a2 2 0 014 0v6" />
    ),
  },
  {
    name: "Fishing Spot",
    note: "A quiet lake for slow mornings.",
    icon: (
      <path d="M3 12c4-4 8-4 12 0 2 2 4 2 6 0-2 4-6 6-10 6-4 0-8-3-8-6zm14 0a1.5 1.5 0 100 .01" />
    ),
  },
  {
    name: "Farming Area",
    note: "Organic kitchen gardens.",
    icon: (
      <path d="M12 22V12m0 0c-3 0-6-2-6-6 3 0 6 2 6 6zm0 0c3 0 6-2 6-6-3 0-6 2-6 6z" />
    ),
  },
  {
    name: "Infrastructure",
    note: "Roads, water, power & upkeep.",
    icon: (
      <path d="M4 20l4-12 4 8 4-8 4 12M2 20h20" />
    ),
  },
];

const Amenities = memo(function Amenities() {
  const sectionRef = useReveal(".reveal, .amenity");

  return (
    <section ref={sectionRef} id="amenities" className="amenities" aria-labelledby="amenities-title">
      <div className="amenities__inner">
        <div className="amenities__head">
          <div className="reveal stagger" data-delay="0">
            <p className="amenities__eyebrow">Shared Estate</p>
          </div>
          <div className="reveal stagger" data-delay="120">
            <h2 id="amenities-title" className="amenities__title">
              many Amenities,
              <span className="amenities__title-accent"> One Sanctuary</span>
            </h2>
          </div>
          <div className="reveal stagger" data-delay="240">
            <p className="amenities__sub">
              Every owner has access to a curated resort experience —
              maintained by Agarland, enjoyed by you.
            </p>
          </div>
        </div>

        <div className="amenities__grid">
          {amenities.map((a, i) => (
            <article
              key={a.name}
              className="amenity reveal stagger"
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <svg viewBox="0 0 24 24" className="amenity__icon" aria-hidden="true">
                {a.icon}
              </svg>
              <h3 className="amenity__name">{a.name}</h3>
              <p className="amenity__note">{a.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Amenities;
