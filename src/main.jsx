import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import Header from "./components/Header.jsx";
import ListParser from "./components/ListParser.jsx";
import Landing from "./components/Landing.jsx";
import Map from "./components/Map.jsx";
import MeshGradientBackground from "./components/MeshGradientBackground.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    {/* <ListParser /> */}
    {/* <Map /> */}
    <Landing />
    <MeshGradientBackground />
  </StrictMode>
);
