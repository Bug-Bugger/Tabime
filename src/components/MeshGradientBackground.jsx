import { useRef, useEffect } from "react";
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

  const randomMovement = () => {
    gsap.to(bg.current, {
      backgroundImage: generateRandomGradient(),
      duration: 1.5,
      ease: "linear",
      onComplete: randomMovement,
    });
  };

  useEffect(() => {
    gsap.set(bg.current, {
      backgroundColor: "hsla(228,39%,82%,1)",
      backgroundImage: generateRandomGradient(),
    });
    randomMovement();
  }, []);

  return <div ref={bg} className="h-screen gradient"></div>;
};

export default MeshGradientBackground;
