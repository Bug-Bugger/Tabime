"use client";

import Description from "@components/pages/description";
import AnimatedButton from "@components/reusable/animatedButton";
import MeshGradientBackground from "@components/reusable/meshGradientBackground";
import Login from "./login/page";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Login />
    </div>
  );
}
