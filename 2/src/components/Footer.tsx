import { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__row">
          <div className="footer__col footer__col--wide">
            <p className="footer__tagline">
              A living legacy in the hills of Kerala — one share at a time.
            </p>
            <p className="footer__brand-by">
              A project by <strong className="text-gold">Agarland Developers</strong>
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__label">Contact</h4>
            <a href="mailto:hello@agarland.in" className="footer__link">hello@agarland.in</a>
            <a href="https://www.agarland.in" target="_blank" rel="noopener noreferrer" className="footer__link">www.agarland.in</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__label">Location</h4>
            <p className="footer__text">Western Ghats</p>
            <p className="footer__text">Kerala, India</p>
            <p className="footer__coords">10.0889° N · 76.5253° E</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Norman James. All rights reserved.</p>
          <p className="footer__credits">MADE WITH LOVE <span className="footer__heart">♥</span> BY EMPATHY STUDIO & Phasing East Hospitality</p>
          <p className="footer__phones">+91 98332 74308 / +91 98332 74305 / +91 79943 97927</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
