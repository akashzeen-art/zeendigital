import { useEffect, useRef, useState } from 'react';
import AnimateIn from '../components/AnimateIn';
import { COVERAGE_COUNTRIES } from '../data/siteData';

export default function CoverageArea() {
  const gridRef = useRef(null);
  const [countriesVisible, setCountriesVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return undefined;

    const reveal = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        setCountriesVisible(true);
        return true;
      }
      return false;
    };

    if (reveal()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountriesVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '40px 0px 0px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="coverage-page">
      <div className="coverage-spacer" />

      <section className="coverage-header">
        <div className="container coverage-header-inner">
          <AnimateIn animation="fade-right" delay={0} as="span" className="coverage-arrow coverage-arrow-left">
            «
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={180} as="h1" className="coverage-title">
            Our Associations
          </AnimateIn>
          <AnimateIn animation="fade-left" delay={360} as="span" className="coverage-arrow coverage-arrow-right">
            »
          </AnimateIn>
        </div>
      </section>

      <section className="coverage-list-section">
        <div className="container">
          <AnimateIn animation="fade-up" delay={120} className="coverage-heading-wrap">
            <h2 className="page-heading">Coverage Area</h2>
          </AnimateIn>
          <div
            ref={gridRef}
            className={`countries-grid ${countriesVisible ? 'countries-animate' : ''}`}
            aria-label="Coverage countries"
          >
            {COVERAGE_COUNTRIES.map((country, i) => (
              <div
                key={country}
                className="country-item"
                style={{ '--country-index': i }}
              >
                <h3>
                  <span className="country-name">{country}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
