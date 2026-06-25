import { IMAGES } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={IMAGES.logoFooter} alt="Zeen Digital" className="footer-logo" />
          <p className="footer-tagline">
            A Data-Driven
            <br />
            Performance Marketing Company
          </p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="container">
        <p className="footer-copy">© {new Date().getFullYear()} Zeen Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
