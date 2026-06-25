import { useEffect, useState } from 'react';
import AnimateIn from '../components/AnimateIn';
import Button from '../components/Button';
import ServicePhones from '../components/ServicePhones';
import WhyChoose from '../components/WhyChoose';
import { CONTACT, COVERAGE_HIGHLIGHTS, IMAGES } from '../data/siteData';

const ROTATING_WORDS = ['Monetization', 'Marketing'];

function AnimatedHeroText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="hero-title hero-fade-in">
      <span className="hero-prefix">
        Empowering
        <br />
        Performance Based
      </span>
      <span className={`hero-animated ${visible ? 'visible' : ''}`}>{ROTATING_WORDS[index]}</span>
    </h1>
  );
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <main className="home-page">
      <section className="hero-banner" style={{ backgroundImage: `url(${IMAGES.heroBg})` }}>
        <div className="hero-parallax parallax-c float-anim">
          <img src={IMAGES.parallaxC} alt="" aria-hidden="true" />
        </div>
        <div className="hero-parallax parallax-t float-anim float-anim-delay">
          <img src={IMAGES.parallaxT} alt="" aria-hidden="true" />
        </div>

        <div className="container hero-banner-grid">
          <div className="hero-banner-content">
            <img src={IMAGES.logoWhite} alt="Zeen Digital" className="hero-logo hero-zoom-in" />
            <h2 className="hero-subtitle hero-fade-in hero-fade-in-delay">
              A Data-Driven Performance Marketing Company
            </h2>
            <p className="hero-global-tag hero-fade-in hero-fade-in-delay-2">
              Connecting brands worldwide
            </p>
          </div>

          <div className="hero-globe-scene" aria-hidden="true">
            <span className="hero-globe-orbit hero-globe-orbit-outer" />
            <span className="hero-globe-orbit hero-globe-orbit-inner" />
            <div className="hero-globe-glow" />
            <div className="hero-globe">
              <img src={IMAGES.worldMap} alt="" />
            </div>
            <span className="hero-globe-dot hero-globe-dot-1" />
            <span className="hero-globe-dot hero-globe-dot-2" />
            <span className="hero-globe-dot hero-globe-dot-3" />
          </div>
        </div>
      </section>

      <section className="hero-main">
        <div className="container hero-main-inner">
          <AnimatedHeroText />
          <p className="hero-description hero-fade-in hero-fade-in-delay-2">
            Maximize revenue and user engagement with our performance-driven marketing and seamless
            monetization solutions. We connect brands with the right audience through data-driven
            strategies and innovative carrier billing solutions.
          </p>
          <div className="hero-cta hero-fade-in hero-fade-in-delay-3">
            <Button href="/#Service">Explore Our Services</Button>
          </div>
          <div className="hero-illustration-wrap hero-fade-in hero-fade-in-delay-4">
            <img
              src={IMAGES.heroIllustration}
              alt="Digital marketing illustration"
              className="hero-illustration hero-illustration-motion"
            />
          </div>
          <div id="About" className="section-anchor" />
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <AnimateIn animation="fade-right" className="about-image-wrap desktop-only hover-zoom">
            <img src={IMAGES.aboutImage} alt="Team collaboration" />
          </AnimateIn>
          <AnimateIn animation="fade-up" className="about-image-wrap mobile-only hover-zoom">
            <img src={IMAGES.aboutImage} alt="Team collaboration" />
          </AnimateIn>
          <AnimateIn animation="fade-left" className="about-content">
            <h2 className="section-label">About Us</h2>
            <h3 className="section-title">Driving Digital Growth Through Innovation &amp; Expertise</h3>
            <p>
              we are a team with an average collective experience of 15+ years into Telecom domain.
            </p>
            <p>
              we specialize in driving user traffic &amp; acquisition, installs, generating leads for
              Telecom VAS and Other services through performance-based innovative marketing strategies.
            </p>
            <Button href="/#Service">Explore Our Services</Button>
            <div id="Service" className="section-anchor" />
          </AnimateIn>
        </div>
      </section>

      <section className="services-section gradient-section">
        <div className="shape-divider shape-top" aria-hidden="true" />
        <div className="container">
          <AnimateIn animation="fade-up">
            <h2 className="section-label">Our Services</h2>
            <h3 className="section-title">
              Comprehensive Solutions for
              <br className="hide-mobile" />
              Digital Monetization &amp; Growth
            </h3>
          </AnimateIn>
          <ServicePhones />
        </div>
        <div className="shape-divider shape-bottom" aria-hidden="true" />
      </section>

      <WhyChoose />

      <section className="coverage-preview">
        <div className="container coverage-preview-inner">
          <AnimateIn animation="fade-up">
            <h2 className="section-title center">
              We Are Available Across
              <br className="hide-mobile" />
              The World
            </h2>
          </AnimateIn>
          <AnimateIn animation="zoom-in" delay={150} className="world-map-wrap">
            <img src={IMAGES.worldMap} alt="Global coverage map" className="world-map" />
          </AnimateIn>
          <div className="coverage-highlights">
            {COVERAGE_HIGHLIGHTS.map((country, i) => (
              <AnimateIn
                key={country}
                animation="fade-up"
                delay={200 + i * 50}
                className="coverage-highlight-item"
              >
                <span>{country}</span>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn animation="fade-up" delay={250}>
            <p className="coverage-hint">To check all coverage areas</p>
            <Button href="/coverage-area">Click Here</Button>
          </AnimateIn>
          <div id="Contact" className="section-anchor" />
        </div>
      </section>

      <section className="contact-section gradient-section">
        <div className="container contact-grid">
          <AnimateIn animation="fade-up" className="contact-left">
            <h2 className="section-title">Connect with us</h2>
            <p>
              Pick up your region for Power-Packed VAS Performance and unlock the{' '}
              <strong>Revenue</strong> Potential today.
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={120} className="contact-right">
            <h2 className="section-title small">For business queries, email us at</h2>
            <p className="contact-email">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
