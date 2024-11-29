import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const MeshGradientBackground = () => {
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

  const bg = useRef(null);

  const randomMovement = useCallback(() => {
    gsap.to(bg.current, {
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
  }, [randomMovement]);

  return (
    <div
      ref={bg}
      className="fixed z-0 top-0 left-0 w-full h-full gradient"
    ></div>
  );
};

export default MeshGradientBackground;
