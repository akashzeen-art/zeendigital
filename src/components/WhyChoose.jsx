import { useEffect, useRef } from 'react';
import AnimateIn from './AnimateIn';
import { WHY_CHOOSE } from '../data/siteData';

const CARD_ACCENTS = ['#333399', '#605be5', '#9333ea', '#7c3aed', '#ff00cc'];
const IMAGE_SPEEDS = [0.35, -0.25, 0.4, -0.3, 0.28];

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (reducedMotion || isMobile) return undefined;

    let ticking = false;
    let active = false;

    const updateParallax = () => {
      const section = sectionRef.current;
      if (!section || !active) {
        ticking = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const centerOffset = (rect.top + rect.height / 2 - viewHeight / 2) / viewHeight;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const imgRing = card.querySelector('.why-card-img-ring');
        const imgOffset = centerOffset * 50 * IMAGE_SPEEDS[i];
        if (imgRing) {
          imgRing.style.transform = `translate3d(0, ${imgOffset}px, 0)`;
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) onScroll();
      },
      { rootMargin: '100px 0px' },
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="why-section gradient-section alt">
      <div className="shape-divider shape-top" aria-hidden="true" />
      <div className="why-parallax-bg" aria-hidden="true">
        <span className="why-parallax-orb why-parallax-orb-1" />
        <span className="why-parallax-orb why-parallax-orb-2" />
        <span className="why-parallax-orb why-parallax-orb-3" />
      </div>
      <div className="container">
        <AnimateIn animation="fade-up" className="why-section-header">
          <h2 className="section-label">Why Choose Us ?</h2>
          <h3 className="section-title">
            A Multi-Faced Approach
            <br className="hide-mobile" />
            {' '}For Success
          </h3>
          <p className="why-section-intro">
            Five pillars that power performance marketing, carrier billing, and global VAS growth.
          </p>
        </AnimateIn>
        <div className="why-grid">
          {WHY_CHOOSE.map((item, i) => (
            <AnimateIn
              key={item.title}
              animation="fade-up"
              delay={i * 100}
              as="article"
              className="why-card why-card-parallax"
              style={{ '--why-accent': CARD_ACCENTS[i % CARD_ACCENTS.length] }}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <span className="why-card-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="why-card-img-wrap">
                <div className="why-card-img-ring">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <div className="why-card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
      <div className="shape-divider shape-bottom" aria-hidden="true" />
    </section>
  );
}
