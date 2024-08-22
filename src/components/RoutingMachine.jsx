import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";
import JSONdata from "../assets/example.json";

const createRoutineMachineLayer = (props) => {
  const data = () => JSON.parse(JSON.stringify(JSONdata));
  const geoPoints = data().litePoints;
  const points = geoPoints.map((point) => L.latLng(point.geo[0], point.geo[1]));

  const instance = L.Routing.control({
    waypoints: points,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4, className: "routing-layer" }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    interactive: false,
    createMarker: function (i, wp, nWps) {
      const popupContent = `
    <div>
      <h3>${geoPoints[i].name}</h3>
      <img src="${geoPoints[i].image}" alt="${geoPoints[i].name}" style="min-width: 200px; min-height: auto">
    </div>
  `;
      return L.marker(wp.latLng).bindPopup(popupContent);
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
