import { memo, useRef, useEffect } from "react";
import { gsap } from "gsap";

const galleryItems = [
  {
    src: "/images/1 (1).jpg",
    alt: "Grand Entrance",
    title: "AGARLAND SERENE WOODS",
    description: "Where the journey begins at golden hour, behind hand-carved wooden gates wrapped in living ferns.",
  },
  {
    src: "/images/1 (2).jpg",
    alt: "Heritage Cottage",
    title: "THE PLANTATION SUITE",
    description: "Wake to the canopy of the Western Ghats, where Kerala craftsmanship meets modern serenity.",
  },
  {
    src: "/images/1 (3).jpg",
    alt: "Forest Living",
    title: "GLASS PAVILION",
    description: "Floor-to-ceiling walls of green, where the forest becomes your living room and silence speaks volumes.",
  },
  {
    src: "/images/1 (4).jpg",
    alt: "Wellness Bath",
    title: "THE GREEN BATH",
    description: "Soak in stone and brass, framed by tropical gardens. Every drop is a return to nature.",
  },
  {
    src: "/images/1 (5).jpg",
    alt: "Celebration Table",
    title: "THE WEDDING FEAST",
    description: "Under a canopy of fairy lights, every meal becomes a memory. Rustic charm, refined elegance.",
  },
  {
    src: "/images/1 (6).jpg",
    alt: "Night Pavilion",
    title: "MOONLIT MANDAPAM",
    description: "A traditional pavilion draped in golden light, its reflection dancing on still waters.",
  },
  {
    src: "/images/1 (7).jpg",
    alt: "Forest Trail",
    title: "THE LANTERN PATH",
    description: "Dusk settles on the plantation trails, where handcrafted lanterns guide you through ancient trees.",
  },
  {
    src: "/images/1 (8).jpg",
    alt: "Western Ghats Sunrise",
    title: "THE GHATS AT DAWN",
    description: "Mist rises from the valley as the sun paints the Western Ghats in gold. This is your backyard.",
  },
  {
    src: "/images/1 (9).jpg",
    alt: "Veranda Swing",
    title: "THE JAHAJ",
    description: "A slow morning on the traditional swing, chai in hand, overlooking a thousand shades of green.",
  },
  {
    src: "/images/1 (10).jpg",
    alt: "Open Living",
    title: "TROPICAL MODERN",
    description: "Where teak ceilings meet glass walls, and the boundary between indoors and the plantation dissolves completely.",
  },
];

const Gallery = memo(function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    if (!section || !stack) return;

    const cards = Array.from(stack.querySelectorAll<HTMLElement>(".gallery__card"));
    if (cards.length === 0) return;

    // Entrance animation for header
    const header = section.querySelector<HTMLElement>(".gallery__header");
    if (header) {
      gsap.fromTo(
        header.querySelectorAll(".reveal"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: header, start: "top 80%" },
        }
      );
    }

    // Parallax scroll for stacked cards
    let raf: number;
    const tick = () => {
      const sectionRect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Only animate when section is in view
      if (sectionRect.bottom < -200 || sectionRect.top > vh + 200) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const sectionProgress = Math.max(
        0,
        Math.min(1, (vh - sectionRect.top) / (sectionRect.height + vh))
      );

      cards.forEach((card, i) => {
        const offset = i - cards.length / 2;
        const parallaxY = offset * 12 * (1 - sectionProgress * 0.5);
        const rotation = offset * 0.4;
        const scale = 1 - Math.abs(offset) * 0.02;

        gsap.set(card, {
          y: parallaxY,
          rotateZ: rotation,
          scale: Math.max(0.92, scale),
        });
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Hover effects
    const cleanupFns: (() => void)[] = [];
    cards.forEach((card) => {
      const onEnter = () => {
        gsap.to(card, { y: -12, scale: 1.02, duration: 0.5, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.inOut" });
      };
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      cleanupFns.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="gallery-section">
      <div className="gallery__header">
        <div className="reveal stagger" data-delay="0">
          <p className="gallery__eyebrow">The Estate</p>
        </div>
        <div className="reveal stagger" data-delay="120">
          <h2 className="gallery__title">
            A Glimpse <span className="gallery__title-accent">Inside</span>
          </h2>
        </div>
      </div>
      <div className="gallery__stack" ref={stackRef}>
        {galleryItems.map((item, i) => (
          <article
            key={item.src}
            className="gallery__card"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="gallery__card-image">
              <img src={item.src} alt={item.alt} draggable={false} />
            </div>
            <div className="gallery__card-content">
              <h3 className="gallery__card-title">{item.title}</h3>
              <p className="gallery__card-desc">{item.description}</p>
            </div>
            <span className="gallery__card-num">
              {String(i + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
});

export default Gallery;
