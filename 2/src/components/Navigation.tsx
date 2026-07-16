import { memo } from "react";

const Navigation = memo(function Navigation() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">
          <svg className="nav__logo" viewBox="0 0 28 28" aria-hidden="true">
            <path d="M14 2L2 14l12 12L26 14Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M14 7l-5 7 5 7 5-7Z" fill="currentColor" opacity="0.35" />
          </svg>
          <span className="nav__name">Kerala Heritage</span>
        </div>
        <nav className="nav__links">
          <a href="#estate" className="nav__link">Vision</a>
          <a href="#details" className="nav__link">Details</a>
          <a href="#legacy" className="nav__link">Plantation</a>
          <a href="#disclosures" className="nav__link">Notes</a>
          <button type="button" className="nav__cta">Inquire</button>
        </nav>
      </div>
    </header>
  );
});

export default Navigation;
