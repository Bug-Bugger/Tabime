"use client";

import Description from "@components/pages/description";
import AnimatedButton from "@components/reusable/animatedButton";
import MeshGradientBackground from "@components/reusable/meshGradientBackground";

export default function Home() {
  const getStarted = () => {
    console.log("clicked");
  };
  return (
    <div className="w-full overflow-hidden">
      <div className="h-screen w-full font-sans flex flex-col items-center justify-center bg-transparent z-20 gap-8 overflow-hidden">
        <div
          className="text-4xl w-fit lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text drop-shadow-sm text-transparent z-20 leading-relaxed 
          px-7 py-2 text-center
          motion-opacity-in-0 motion-scale-in-90 motion-blur-in-md motion-duration-500"
        >
          Simplicity For Incredible Journeys
        </div>
        <AnimatedButton
          onClick={getStarted}
          className="motion-scale-in-75 motion-blur-in-md motion-duration-500"
        >
          Get Started
        </AnimatedButton>
      </div>
      <MeshGradientBackground />
      <Description />
      <section className="py-20 bg-gradient-to-r from-[#5680E9] to-[#8860D0] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Anime Adventure?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join Tabime today and transform your anime passion into
            unforgettable travel experiences.
          </p>
          <AnimatedButton onClick={getStarted}>Get Started Now</AnimatedButton>
        </div>
      </section>
    </div>
  );
}
