import { memo, useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Project" },
  { href: "#amenities", label: "Amenities" },
  { href: "#investment", label: "Returns" },
  { href: "#faq", label: "FAQ" },
];

const Navigation = memo(function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#estate" className="nav__brand">
          <svg className="nav__logo" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M14 2L2 14l12 12L26 14Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M14 7l-5 7 5 7 5-7Z" fill="currentColor" opacity="0.35" />
          </svg>
          <span className="nav__name">Agarland</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
          <a href="#investment" className="nav__cta">Inquire</a>
        </nav>
      </div>
    </header>
  );
});

export default Navigation;
