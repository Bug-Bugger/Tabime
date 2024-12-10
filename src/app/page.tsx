"use client";

import Description from "@components/Pages/FrontPage/Description";
import Landing from "@components/Pages/FrontPage/Landing";
import MeshGradientBackground from "@components/Reusable/MeshGradientBackground";

import tabimeicon from "@assets/tabime.svg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabime</title>
        <link rel="icon" href={tabimeicon} />
      </Head>
      <div className="w-full overflow-hidden">
        <Landing />
        <MeshGradientBackground />
        <Description />
      </div>
    </>
  );
}
