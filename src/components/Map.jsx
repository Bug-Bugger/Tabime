import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "../styles/Map.css";
import "leaflet/dist/leaflet.css";
import JSONdata from "../assets/example.json";

import RoutingMachine from "./RoutingMachine";

export default function Map() {
  const data = () => JSON.parse(JSON.stringify(JSONdata));
  const geoPoints = data().litePoints;
  console.log(geoPoints);
  return (
    <div className="flex justify-center h-svh items-center">
      <MapContainer
        center={[36.8048, 138.2529]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/basemaps">CartoMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {geoPoints.map((point, index) => (
          <Marker key={index} position={point.geo} className="routing-marker">
            <Popup>
              {point.name}
              <img
                src={point.image}
                alt={point.name}
                style={{ minWidth: "150px", minHeight: "100px" }}
              />
            </Popup>
          </Marker>
        ))}
        <RoutingMachine />
      </MapContainer>
    </div>
  );
}
