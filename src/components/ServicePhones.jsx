import AnimateIn from './AnimateIn';
import { SERVICES } from '../data/siteData';

const PHONE_ACCENTS = ['#333399', '#605be5', '#ff00cc'];

export default function ServicePhones() {
  return (
    <div className="services-grid services-phones-grid">
      {SERVICES.map((service, i) => (
        <AnimateIn
          key={service.title}
          animation="fade-up"
          delay={i * 120}
          as="article"
          className="service-phone"
        >
          <div
            className="phone-frame"
            style={{ '--phone-accent': PHONE_ACCENTS[i % PHONE_ACCENTS.length] }}
          >
            <div className="phone-side-btn phone-side-btn-1" aria-hidden="true" />
            <div className="phone-side-btn phone-side-btn-2" aria-hidden="true" />
            <div className="phone-bezel">
              <div className="phone-notch" aria-hidden="true">
                <span className="phone-speaker" />
                <span className="phone-camera" />
              </div>
              <div className="phone-screen">
                <div className="phone-status-bar" aria-hidden="true">
                  <span>9:41</span>
                  <span className="phone-signal">●●●</span>
                </div>
                <div className="phone-app-header">
                  <span className="phone-app-icon" aria-hidden="true" />
                  <h4>{service.title}</h4>
                </div>
                <div className="phone-screen-body">
                  <p>{service.description}</p>
                </div>
              </div>
              <div className="phone-home-bar" aria-hidden="true" />
            </div>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
