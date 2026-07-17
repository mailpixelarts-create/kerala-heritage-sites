import { memo, useEffect, useState } from "react";

const Navigation = memo(function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#estate" className="nav__brand">
          <span className="nav__name">Kerala Heritage</span>
        </a>
        <nav className="nav__links">
          <a href="#estate" className="nav__link">Vision</a>
          <a href="#details" className="nav__link">Details</a>
          <a href="#legacy" className="nav__link">Plantation</a>
          <a href="#disclosures" className="nav__link">Notes</a>
        </nav>
        <button type="button" className="nav__cta">Inquire</button>
      </div>
    </header>
  );
});

export default Navigation;
