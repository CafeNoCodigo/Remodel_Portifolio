import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './ShinyDivider.css';
import { divide_words } from '../constants/index.js';

const ShinyDivider = () => {
  const containerRef = useRef(null);
  const lightWrapperRef = useRef(null);
  const textRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const animationRef = useRef(null);

  const animate = () => {
    const container = containerRef.current;
    const wrapper = lightWrapperRef.current;

    if (!container || !wrapper) return;

    const containerWidth = container.offsetWidth;
    const wrapperWidth = wrapper.offsetWidth;
    const maxX = containerWidth - wrapperWidth;

    if (animationRef.current) animationRef.current.kill();

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(wrapper, {
      x: maxX,
      duration: 4,
      ease: 'power2.inOut',
      onComplete: () => {
        setWordIndex((prev) => (prev + 1) % divide_words.length);
        animateBounce();
      },
    })

    animationRef.current = tl;
  };

  const animateBounce = () => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' }
      );
    }
  };

  useEffect(() => {
    animate();

    const resizeObserver = new ResizeObserver(() => {
      animate();
    });

    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) resizeObserver.unobserve(containerRef.current);
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="shiny-divider-container">
      <div className="shiny-divider-gradient" />
      <div ref={lightWrapperRef} className="shiny-divider-light-wrapper">
        <div className="shiny-divider-light" />
        <div ref={textRef} className="shiny-divider-text">
          {divide_words[wordIndex]}
        </div>
      </div>
    </div>
  );
};

export default ShinyDivider;
