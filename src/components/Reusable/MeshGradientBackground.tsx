"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const MeshGradientBackground: React.FC = () => {
  const bg = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const initialGradient = `
      radial-gradient(at 50% 50%, hsla(200, 70%, 70%, 1) 0px, transparent 70%),
      radial-gradient(at 30% 30%, hsla(220, 80%, 80%, 1) 0px, transparent 70%),
      radial-gradient(at 70% 70%, hsla(190, 65%, 75%, 1) 0px, transparent 70%),
      radial-gradient(at 90% 20%, hsla(240, 50%, 60%, 1) 0px, transparent 70%)
    `;

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
    if (bg.current) {
      gsap.set(bg.current, {
        backgroundColor: "hsla(228,39%,82%,1)",
        backgroundImage: initialGradient,
      });
      randomMovement();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
    };
  }, [randomMovement]);

  return (
    <div
      ref={bg}
      className="absolute z-0 top-0 left-0 right-0 w-full h-screen gradient"
      style={{
        backgroundImage: initialGradient,
      }}
    ></div>
  );
};

export default MeshGradientBackground;
