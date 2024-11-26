import { useRef, useEffect } from "react";
import gsap from "gsap";

const MeshGradientBackground = () => {
  const bg = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomGradient();
    }, 1000);
    const generateRandomGradient = () => `
      radial-gradient(at ${gsap.utils.random(0, 79)}% ${gsap.utils.random(
      30,
      100
    )}%, 
        hsla(${gsap.utils.random(185, 215)},77%,64%,1) 0px, transparent 50%),
      radial-gradient(at ${gsap.utils.random(30, 100)}% ${gsap.utils.random(
      0,
      60
    )}%, 
        hsla(${gsap.utils.random(208, 238)},76%,63%,1) 0px, transparent 50%),
      radial-gradient(at ${gsap.utils.random(0, 100)}% ${gsap.utils.random(
      0,
      100
    )}%, 
        hsla(${gsap.utils.random(185, 215)},68%,75%,1) 0px, transparent 50%),
      radial-gradient(at ${gsap.utils.random(0, 100)}% ${gsap.utils.random(
      0,
      100
    )}%, 
        hsla(${gsap.utils.random(246, 276)},54%,60%,1) 0px, transparent 50%)
    `;

    gsap.fromTo(
      bg.current,
      {
        backgroundColor: "hsla(228,39%,82%,1)",
        backgroundImage: generateRandomGradient(),
      },
      {
        backgroundImage: generateRandomGradient(),
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        onRepeat: function () {
          this.vars.backgroundImage = generateRandomGradient();
        },
      }
    );

    return () => clearInterval(interval);
  }, []);

  return <div ref={bg} className="h-screen gradient"></div>;
};

export default MeshGradientBackground;
