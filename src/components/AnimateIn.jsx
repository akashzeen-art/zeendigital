import { forwardRef, useEffect, useRef, useState } from 'react';

const AnimateIn = forwardRef(function AnimateIn(
  {
    children,
    className = '',
    delay = 0,
    animation = 'fade-up',
    as: Tag = 'div',
    style = {},
  },
  forwardedRef,
) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const setRef = (el) => {
    ref.current = el;
    if (typeof forwardedRef === 'function') {
      forwardedRef(el);
    } else if (forwardedRef) {
      forwardedRef.current = el;
    }
  };

  return (
    <Tag
      ref={setRef}
      className={`animate-in animate-${animation} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, '--anim-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
});

export default AnimateIn;
