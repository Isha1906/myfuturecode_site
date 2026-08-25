import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // touch devices usually prefer native scroll
      touchMultiplier: 2,
      lerp: 0.05, // lower lerp makes it significantly smoother and "heavier"
      wheelMultiplier: 0.8, // slightly softer scroll wheel feeling
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    setLenis(lenisInstance);

    return () => {
      gsap.ticker.remove((time) => lenisInstance.raf(time * 1000));
      lenisInstance.destroy();
    };
  }, []);

  return lenis;
}
