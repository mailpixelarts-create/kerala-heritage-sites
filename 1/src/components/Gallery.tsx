import { memo } from "react";
import { useReveal } from "../utils/useReveal";

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
          <figure className="gallery__item gallery__item--wide reveal stagger" data-delay="0">
            <img src="/images/kerala-estate-aerial.jpg" alt="Aerial view of the resort estate in the Western Ghats" loading="lazy" />
            <figcaption>The Estate · Aerial</figcaption>
          </figure>
          <figure className="gallery__item reveal stagger" data-delay="120">
            <img src="/images/cottage.jpg" alt="Traditional Kerala-style cottage in the plantation" loading="lazy" />
            <figcaption>The Cottage</figcaption>
          </figure>
          <figure className="gallery__item reveal stagger" data-delay="240">
            <img src="/images/plantation.jpg" alt="Agarwood and sandalwood plantation rows" loading="lazy" />
            <figcaption>The Plantation</figcaption>
          </figure>
          <figure className="gallery__item gallery__item--tall reveal stagger" data-delay="360">
            <img src="/images/amenities.jpg" alt="Infinity swimming pool at dusk overlooking the forest" loading="lazy" />
            <figcaption>The Pool · Dusk</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
});

export default Gallery;
