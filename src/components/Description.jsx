import map from "../assets/japan.svg";
import Waypoint from "../assets/waypoint.jsx";
import Pointer from "../assets/pointer.jsx";
import wand from "../assets/wand.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const containerRef = useRef(null);

  const pointerRef = useRef(null);
  const collabPointerRef = useRef(null);
  const trivialPathRef = useRef([]);
  const trivialPathSvgRef = useRef(null);
  const wandRef = useRef(null);
  const optPathRef = useRef([]);

  const textRef = useRef([]);

  const hokkaidoRef = useRef(null);
  const suzumeRef = useRef(null);
  const tokyoRef = useRef(null);
  const spRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=6000 bottom",
        scrub: 2,
        pin: true,
        ease: "power1.inOut",
      },
    });

    // It seems that gsap transformOrigin is not
    // working well with translating the element
    // Thus this offset function is used to calculate
    const offset = (top, left) => ({
      top: `${top + 6}%`,
      left: `${left - 2}%`,
    });

    // The reveal segment by legnth require calculation of the path
    // Thus this is the function for it
    function revealSegmentByLength(path) {
      const length = path.getTotalLength();
      const svg = trivialPathSvgRef.current;

      const scale = svg.clientWidth / svg.viewBox.baseVal.width;

      const trueLength = length * scale;
      return {
        strokeDasharray: trueLength,
        strokeDashoffset: trueLength,
      };
    }

    tl.set(collabPointerRef.current, { opacity: 0 })
      .fromTo(
        pointerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ...offset(10, 78),
          duration: 0.5,
        }
      )
      .fromTo(
        textRef.current[0],
        { opacity: 0, y: "30%" },
        { opacity: 1, y: "0", duration: 1 },
        "<"
      )
      .to(pointerRef.current, { scale: 0.85, duration: 0.5 })
      .to(pointerRef.current, { scale: 1, duration: 0.5 })
      .fromTo(
        hokkaidoRef.current,
        { opacity: 0, scale: 0.25, transformOrigin: "bottom" },
        { opacity: 1, scale: 1, duration: 0.25 },
        "<"
      )
      .to(
        pointerRef.current,
        {
          ...offset(82, 16),
          duration: 2,
        },
        "<"
      )
      .to(pointerRef.current, { scale: 0.85, duration: 0.5 })
      .to(pointerRef.current, { scale: 1, duration: 0.5 })
      .fromTo(
        suzumeRef.current,
        { opacity: 0, scale: 0.25, transformOrigin: "bottom" },
        { opacity: 1, scale: 1, duration: 0.25 },
        "<"
      )
      .to(textRef.current[0], { opacity: 0, duration: 0.5 }, "<")
      .set(collabPointerRef.current, { opacity: 0 })
      .fromTo(
        collabPointerRef.current,
        { opacity: 0.2, ...offset(40, 20) },
        { opacity: 1, ...offset(63, 61), duration: 3, ease: "power3.out" }
      )
      .fromTo(
        textRef.current[1],
        { opacity: 0, y: "30%" },
        { opacity: 1, y: "0", duration: 1 },
        "<"
      )
      .to(collabPointerRef.current, { scale: 0.85, duration: 0.5 })
      .to(collabPointerRef.current, { scale: 1, duration: 0.5 })
      .fromTo(
        tokyoRef.current,
        { opacity: 0, scale: 0.25, transformOrigin: "bottom" },
        { opacity: 1, scale: 1, duration: 0.25 },
        "<"
      )
      .to(pointerRef.current, { ...offset(71, 30.5), duration: 1 }, "<")
      .to(pointerRef.current, { scale: 0.85, duration: 0.5 })
      .to(pointerRef.current, { scale: 1, duration: 0.5 })
      .fromTo(
        spRef.current,
        { opacity: 0, scale: 0.25, transformOrigin: "bottom" },
        { opacity: 1, scale: 1, duration: 0.25 },
        "<"
      )
      .to(textRef.current[1], { opacity: 0, duration: 0.5 }, "<")

      .fromTo(
        trivialPathRef.current[0],
        { ...revealSegmentByLength(trivialPathRef.current[0]) },
        { strokeDashoffset: 0, duration: 2, delay: 0.02 }
      )
      .fromTo(
        textRef.current[2],
        { opacity: 0, y: "30%" },
        { opacity: 1, y: "0", duration: 1 },
        "<"
      )
      .fromTo(
        trivialPathRef.current[1],
        { ...revealSegmentByLength(trivialPathRef.current[1]) },
        { strokeDashoffset: 0, duration: 1 }
      )
      .fromTo(
        trivialPathRef.current[2],
        { ...revealSegmentByLength(trivialPathRef.current[2]) },
        { strokeDashoffset: 0, duration: 1 }
      )
      .to(textRef.current[2], { opacity: 0, duration: 0.5 }, "<")
      .fromTo(
        textRef.current[3],
        { opacity: 0, y: "30%" },
        { opacity: 1, y: "0", duration: 1 }
      )
      .fromTo(
        wandRef.current,
        { opacity: 0, ...offset(45, 35) },
        { opacity: 1, ...offset(49, 43), duration: 1 }
      )
      .to(wandRef.current, { scale: 0.85, duration: 0.5 })
      .to(wandRef.current, { scale: 1, duration: 0.5 })
      .to(trivialPathRef.current, { opacity: 0, duration: 0.5 }, "<")
      .to(pointerRef.current, { opacity: 0, duration: 0.5 }, "<")
      .to(collabPointerRef.current, { opacity: 0, duration: 0.5 }, "<")
      .to(wandRef.current, { opacity: 0, duration: 0.5 })
      .fromTo(
        optPathRef.current,
        { opacity: 0, y: "30%" },
        { opacity: 1, y: 0, duration: 0.5 },
        "<"
      );

    return () => {
      tl.current?.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      className="z-20 w-full h-screen flex justify-center items-center"
      ref={containerRef}
    >
      <div className="relative w-[650px] max-w-full">
        <div
          className="absolute 
        lg:text-5xl lg:left-[-50%] lg:w-[90%] lg:top-[30%] lg:leading-tight
        text-pretty text-2xl top-[20%] left-[15%] w-[35%] text-center font-semibold"
        >
          <div className="relative">
            <div
              className="absolute top-0 left-0 w-full"
              ref={(el) => (textRef.current[0] = el)}
            >
              Add places from guides with 1 click
            </div>
            <div
              className="absolute top-0 left-0 w-full"
              ref={(el) => (textRef.current[1] = el)}
            >
              Seemless Collaboration with friends
            </div>
            <div
              className="absolute top-0 left-0 w-full"
              ref={(el) => (textRef.current[2] = el)}
            >
              Chaos in your travel plans?
            </div>
            <div
              className="absolute top-0 left-0 w-full"
              ref={(el) => (textRef.current[3] = el)}
            >
              Fixed with one tap!
            </div>
          </div>
        </div>
        <div className="relative w-[650px] max-w-full p-8">
          <Pointer
            className="absolute top-[-10%] left-[50%] w-[5%] h-auto z-40"
            color="#FFFFFF"
            ref={pointerRef}
          />
          <Pointer
            className="absolute top-[40%] left-[30%] w-[5%] h-auto z-40"
            border="#0066FF"
            color="#0066FF"
            ref={collabPointerRef}
          />
          <img
            src={wand}
            alt="Wand"
            className="absolute top-[45%] left-[35%] w-[6%] h-auto z-40"
            ref={wandRef}
          />
          <svg
            className="absolute top-0 left-0 w-full h-full z-5"
            viewBox="0 0 100 100"
            ref={trivialPathSvgRef}
          >
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ff7e5f" />
                <stop offset="100%" stopColor="#feb47b" />
              </linearGradient>
            </defs>
            <path
              ref={(el) => (trivialPathRef.current[0] = el)}
              d="M 81 13.5 L 19 90.5"
              stroke="url(#pathGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={(el) => (trivialPathRef.current[1] = el)}
              d="M 19 90.5 L 63.5 70.5"
              stroke="url(#pathGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={(el) => (trivialPathRef.current[2] = el)}
              d="M 63.5 70.5 L 33 79.5"
              stroke="url(#pathGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <svg
            className="absolute top-0 left-0 w-full h-full z-5"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient
                id="optpathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#2edb81" />
                <stop offset="100%" stopColor="#30de7f" />
              </linearGradient>
            </defs>
            <path
              ref={(el) => (optPathRef.current[0] = el)}
              d="M 81 13.5 L 63.5 70.5"
              stroke="url(#optpathGradient)"
              strokeWidth="9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={(el) => (optPathRef.current[1] = el)}
              d="M 63.5 70.5 L 33 79.5"
              stroke="url(#optpathGradient)"
              strokeWidth="9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              ref={(el) => (optPathRef.current[2] = el)}
              d="M 33 79.5 L 19 90.5"
              stroke="url(#optpathGradient)"
              strokeWidth="9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
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
            className="absolute top-[71%] left-[30.5%] w-[5%] h-auto"
            color="#47adfa"
            ref={spRef}
          />
          <img src={map} alt="Map" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Description;
