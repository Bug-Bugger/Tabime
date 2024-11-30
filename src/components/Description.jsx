import map from "../assets/japan.svg";
import Waypoint from "../assets/waypoint.jsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const containerRef = useRef(null);
  const suzumeRef = useRef(null);
  const hokkaidoRef = useRef(null);
  const tokyoRef = useRef(null);
  const spRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000 bottom",
        scrub: 2,
        pin: true,
      },
    });

    tl.fromTo(
      hokkaidoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
      .fromTo(suzumeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(tokyoRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(spRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    return () => {
      tl.current?.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      className="z-20 w-full h-screen flex justify-center items-center min-h-screen"
      ref={containerRef}
    >
      <div className="relative w-[600px] max-w-full">
        <img src={map} alt="Map" className="w-full h-auto" />
        <Waypoint
          className="absolute top-[10%] left-[78%] w-[5%] h-auto"
          color="#ecfffd"
          ref={hokkaidoRef}
        />
        <Waypoint
          className="absolute top-[82%] left-[16%] w-[5%] h-auto"
          color="#85c4e0"
          ref={suzumeRef}
        />
        <Waypoint
          className="absolute top-[63%] left-[61%] w-[5%] h-auto"
          color="#9900ff"
          ref={tokyoRef}
        />
        <Waypoint
          className="absolute top-[71%] left-[30%] w-[5%] h-auto"
          color="#47adfa"
          ref={spRef}
        />
      </div>
    </div>
  );
};

export default Description;
