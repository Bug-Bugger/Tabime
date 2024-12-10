import PropTypes from "prop-types";
import { forwardRef } from "react";

// Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools

const Pointer = forwardRef(
  ({ className = "", border = "#000000", color = "#FF0000" }, ref) => {
    return (
      <div className={className} ref={ref}>
        <svg
          viewBox="0 0 15.858477 15.858475"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="waypoint" transform="translate(-4.2753925,-3.7661308)">
            <g id="g1">
              <path
                d="m 5,11.3 5.3,2.3 2.3,5.3 6.9,-14.5 z"
                id="path1"
                style={{
                  display: "inline",
                  fill: "none",
                  stroke: border,
                  strokeWidth: 0.6,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3"
                style={{
                  fill: color,
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 28.2436,
                  strokeLinecap: "square",
                  strokeLinejoin: "bevel",
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                  paintOrder: "markers fill stroke",
                }}
                d="m 411.11348,582.18355 c -5.16279,-11.85143 -20.68586,-47.55512 -34.49569,-79.34152 L 351.509,445.04859 272.88014,411.05032 c -43.24587,-18.69903 -78.64608,-34.32909 -78.66712,-34.73347 -0.0448,-0.86157 431.13006,-206.16647 431.72819,-205.56835 0.2224,0.22241 -44.48897,94.71052 -99.3586,209.97358 C 471.71297,495.98513 425.3978,593.31535 423.66002,597.01145 l -3.15963,6.72016 z"
                transform="scale(0.03)"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
);

Pointer.displayName = "Pointer";

Pointer.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
};

export default Pointer;
