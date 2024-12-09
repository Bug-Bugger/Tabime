import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import Header from "./components/Header.jsx";
import ListParser from "./components/ListParser.jsx";
import FrontPage from "./components/FrontPage.jsx";
import Map from "./components/Map.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-full overflow-x-hidden">
      <Header />
      {/* <ListParser /> */}
      {/* <Map /> */}
      <FrontPage />
    </div>
  </StrictMode>
);
