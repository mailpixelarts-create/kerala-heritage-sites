import { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-brand">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <svg className="footer__logo" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 3L4 16l12 13L28 16Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M16 9l-6 7 6 7 6-7Z" fill="currentColor" opacity="0.35" />
            </svg>
            <div>
              <h3 id="footer-brand" className="footer__name">Agarland Developers</h3>
              <p className="footer__tag">A green legacy, rooted in Kerala.</p>
            </div>
          </div>
          <a href="#estate" className="footer__cta">
            <span>Reserve a Share</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="footer__row">
          <div className="footer__col footer__col--wide">
            <h4 className="footer__label">Project</h4>
            <p className="footer__text">
              Premium Kerala-style resort cottages paired with Agarwood and
              Sandalwood plantation investment. Individually registered 25-cent
              plots.
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__label">Explore</h4>
            <a href="#about" className="footer__link">The Project</a>
            <a href="#process" className="footer__link">The Journey</a>
            <a href="#amenities" className="footer__link">Amenities</a>
            <a href="#investment" className="footer__link">Returns</a>
            <a href="#faq" className="footer__link">FAQ</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__label">Contact</h4>
            <a href="mailto:hello@agarland.in" className="footer__link">hello@agarland.in</a>
            <a href="https://www.agarland.in" className="footer__link" target="_blank" rel="noreferrer">www.agarland.in</a>
            <p className="footer__coords">Western Ghats · Kerala</p>
            <p className="footer__coords">10.0889° N · 76.5253° E</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Agarland Developers</span>
          <span>Investments carry risk · Please review the prospectus</span>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
