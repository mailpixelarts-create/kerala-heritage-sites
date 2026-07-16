import { memo } from "react";
import { useReveal } from "../utils/useReveal";

const galleryItems = [
  { src: "/images/01_ayurvedic.jpg", alt: "Ayurvedic wellness centre in the resort", caption: "Ayurvedic Centre", wide: false, tall: false },
  { src: "/images/03_cottage.jpg", alt: "Traditional Kerala-style luxury cottage", caption: "Luxury Cottage", wide: false, tall: false },
  { src: "/images/04_honey.jpg", alt: "Organic honey museum and apiculture", caption: "Honey Museum", wide: false, tall: false },
  { src: "/images/05_restaurant.jpg", alt: "Multi-cuisine farm-to-table restaurant", caption: "Restaurant", wide: true, tall: false },
  { src: "/images/06_event.jpg", alt: "Event space and banquet hall", caption: "Event Space", wide: false, tall: false },
  { src: "/images/07_fishing.jpg", alt: "Peaceful fishing spot with natural water bodies", caption: "Fishing Spot", wide: false, tall: false },
  { src: "/images/08_park.jpg", alt: "Children's nature-integrated park", caption: "Children's Park", wide: false, tall: false },
  { src: "/images/09_farming.jpg", alt: "Organic farming and agriculture area", caption: "Organic Farming", wide: false, tall: false },
  { src: "/images/10_plantation.jpg", alt: "Agarwood and Sandalwood plantation rows", caption: "The Plantation", wide: false, tall: false },
];

const Gallery = memo(function Gallery() {
  const sectionRef = useReveal(".reveal, .gallery__item");

  return (
    <section ref={sectionRef} id="gallery" className="gallery" aria-labelledby="gallery-title">
      <div className="gallery__inner">
        <div className="gallery__head">
          <div className="reveal stagger" data-delay="0">
            <p className="gallery__eyebrow">Gallery</p>
          </div>
          <div className="reveal stagger" data-delay="120">
            <h2 id="gallery-title" className="gallery__title">
              A Glimpse of
              <span className="gallery__title-accent"> the Estate</span>
            </h2>
          </div>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <figure
              key={item.src}
              className={`gallery__item reveal stagger${item.wide ? " gallery__item--wide" : ""}${item.tall ? " gallery__item--tall" : ""}`}
              data-delay={i * 80}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Gallery;
