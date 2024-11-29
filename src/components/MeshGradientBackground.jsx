import { useRef, useEffect, useCallback, useState } from "react";
import gsap from "gsap";

const MeshGradientBackground = () => {
  const bg = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const generateRandomGradient = () => `
      radial-gradient(at ${gsap.utils.random(10, 90)}% ${gsap.utils.random(
    10,
    90
  )}%, 
        hsla(${gsap.utils.random(185, 215)},${gsap.utils.random(
    60,
    80
  )}%,${gsap.utils.random(60, 80)}%,1) 0px, transparent 70%),
      radial-gradient(at ${gsap.utils.random(10, 90)}% ${gsap.utils.random(
    0,
    60
  )}%, 
        hsla(${gsap.utils.random(208, 238)},${gsap.utils.random(
    60,
    80
  )}%,${gsap.utils.random(60, 80)}%,1) 0px, transparent 70%),
      radial-gradient(at ${gsap.utils.random(0, 100)}% ${gsap.utils.random(
    0,
    100
  )}%, 
        hsla(${gsap.utils.random(185, 215)},${gsap.utils.random(
    60,
    80
  )}%,${gsap.utils.random(60, 80)}%,1) 0px, transparent 70%),
      radial-gradient(at ${gsap.utils.random(0, 100)}% ${gsap.utils.random(
    0,
    100
  )}%, 
        hsla(${gsap.utils.random(256, 276)},${gsap.utils.random(
    40,
    80
  )}%,${gsap.utils.random(60, 80)}%,1) 0px, transparent 70%)
    `;

  const randomMovement = useCallback(() => {
    animationRef.current = gsap.to(bg.current, {
      backgroundImage: generateRandomGradient(),
      duration: 1.5,
      ease: "linear",
      onComplete: randomMovement,
    });
  }, []);

  useEffect(() => {
    gsap.set(bg.current, {
      backgroundColor: "hsla(228,39%,82%,1)",
      backgroundImage: generateRandomGradient(),
    });
    randomMovement();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    observer.observe(bg.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
    };
  }, [randomMovement]);

  useEffect(() => {
    // Pause or resume animation based on visibility
    if (animationRef.current) {
      if (isVisible) {
        animationRef.current.resume();
      } else {
        animationRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={bg}
      className="absolute z-0 top-0 left-0 right-0 w-full h-screen gradient"
    ></div>
  );
};

export default MeshGradientBackground;
