"use client";

import Description from "@components/Pages/FrontPage/Description";
import Landing from "@components/Pages/FrontPage/Landing";
import MeshGradientBackground from "@components/Reusable/MeshGradientBackground";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Landing />
      <MeshGradientBackground />
      <Description />
    </div>
  );
}
