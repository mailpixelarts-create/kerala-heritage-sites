import { memo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useLenis } from "../context/LenisContext";

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

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const Gallery = memo(function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const { disableLenis, enableLenis } = useLenis();
  const lenisDisabledRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    // ── Setup ──
    const gap = 32;
    const originals = Array.from(container.querySelectorAll<HTMLElement>(".gallery__media"));
    const singleSetWidth = originals.reduce((acc, el) => acc + el.offsetWidth + gap, 0);
    originals.forEach((el) => container.appendChild(el.cloneNode(true)));

    const allMedia = Array.from(container.querySelectorAll<HTMLElement>(".gallery__media"));
    const allImages = allMedia.map((m) => m.querySelector<HTMLImageElement>("img")!);
    const allTexts = allMedia.map((m) => m.querySelector<HTMLElement>(".gallery__text")!);

    // ── Entrance animation ──
    const entered = new Set<number>();
    const vw = window.innerWidth;

    const revealImages = (indices: number[]) => {
      indices.forEach((i, j) => {
        if (entered.has(i) || !allImages[i]) return;
        entered.add(i);
        gsap.fromTo(
          allImages[i],
          { opacity: 0, y: 40, scale: 1.08 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: j * 0.08, ease: "power3.out" }
        );
      });
    };

    // First batch visible on load
    revealImages(
      allMedia
        .map((m, i) => ({ i, left: m.getBoundingClientRect().left }))
        .filter(({ left }) => left < vw + 200 && left > -400)
        .map(({ i }) => i)
    );

    // ── Scroll events ──
    const onWheel = (e: WheelEvent) => {
      // Only intercept horizontal scroll or strong vertical on desktop
      const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (isVertical && window.innerWidth < 768) return; // let mobile page scroll
      e.preventDefault();
      targetRef.current += (e.deltaY || e.deltaX) * 0.8;
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let swiping: "h" | "v" | null = null;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      swiping = null;
    };

    const onTouchMove = (e: TouchEvent) => {
      const dx = touchStartX - e.touches[0].clientX;
      const dy = touchStartY - e.touches[0].clientY;

      // Determine direction on first significant movement
      if (swiping === null) {
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
          swiping = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
        }
        return;
      }

      // If vertical swipe, let the page scroll naturally
      if (swiping === "v") return;

      // Horizontal swipe — control gallery
      e.preventDefault();
      targetRef.current += dx * 1.5;
      touchStartX = e.touches[0].clientX;
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchmove", onTouchMove, { passive: false });

    // ── Hover zoom ──
    const hoverTweens = new Map<number, gsap.core.Tween>();
    allMedia.forEach((media, i) => {
      const img = allImages[i];
      if (!img) return;

      media.addEventListener("mouseenter", () => {
        hoverTweens.get(i)?.kill();
        hoverTweens.set(i, gsap.to(img, { scale: 1.08, duration: 0.8, ease: "power2.out" }));
      });
      media.addEventListener("mouseleave", () => {
        hoverTweens.get(i)?.kill();
        hoverTweens.set(i, gsap.to(img, { scale: 1, x: 0, duration: 0.6, ease: "power2.inOut" }));
      });
    });

    // ── Render loop ──
    let scrollX = 0;
    let raf: number;
    const center = vw * 0.5;

    const tick = () => {
      scrollX = lerp(scrollX, targetRef.current, 0.09);

      if (scrollX >= singleSetWidth) {
        scrollX -= singleSetWidth;
        targetRef.current -= singleSetWidth;
      } else if (scrollX < 0) {
        scrollX += singleSetWidth;
        targetRef.current += singleSetWidth;
      }

      gsap.set(container, { x: -scrollX });

      allMedia.forEach((media, i) => {
        const img = allImages[i];
        const text = allTexts[i];
        if (!img || !text) return;

        const rect = media.getBoundingClientRect();
        if (rect.right < -300 || rect.left > vw + 300) return;

        const mediaCenter = rect.left + rect.width * 0.5;
        const t = Math.max(-1, Math.min(1, (mediaCenter - center) / center));
        const absT = Math.abs(t);

        // Parallax (skip if hover is active)
        const hoverActive = hoverTweens.get(i)?.isActive();
        if (!hoverActive) {
          gsap.set(img, {
            x: -t * 30,
            scale: 1 - absT * 0.06,
            opacity: Math.max(0.35, 1 - absT * 0.35),
          });
        }

        // Entrance for images scrolling into view
        if (absT < 0.8) revealImages([i]);

        // Text: CSS class toggle
        text.classList.toggle("gallery__text--visible", absT < 0.45);
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      hoverTweens.forEach((t) => t.kill());
      hoverTweens.clear();
      wrapper.removeEventListener("wheel", onWheel);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  // Lenis toggle — only on desktop where gallery captures wheel
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    // On mobile, don't disable Lenis — let page scroll naturally
    if (window.innerWidth < 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !lenisDisabledRef.current) {
          disableLenis();
          lenisDisabledRef.current = true;
        } else if (!entry.isIntersecting && lenisDisabledRef.current) {
          enableLenis();
          lenisDisabledRef.current = false;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      if (lenisDisabledRef.current) { enableLenis(); lenisDisabledRef.current = false; }
    };
  }, [disableLenis, enableLenis]);

  const scrollBy = (dir: number) => {
    const media = containerRef.current?.querySelector<HTMLElement>(".gallery__media");
    if (!media) return;
    targetRef.current += dir * (media.offsetWidth + 32);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery__wrapper" ref={wrapperRef}>
        <div ref={containerRef} className="gallery__image__container">
          {galleryItems.map((item) => (
            <picture key={item.src} className="gallery__media">
              <img src={item.src} alt={item.alt} className="gallery__media__image" draggable={false} />
              {item.description && (
                <div className="gallery__text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              )}
            </picture>
          ))}
        </div>
        <button className="gallery__arrow gallery__arrow--left" onClick={() => scrollBy(-1)} aria-label="Scroll left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button className="gallery__arrow gallery__arrow--right" onClick={() => scrollBy(1)} aria-label="Scroll right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
});

export default Gallery;
