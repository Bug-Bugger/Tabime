"use client";

import AnimatedButton from "@components/reusable/animatedButton";
import HeroBackground from "@components/pages/landing/heroBackground";
import FeaturesGrid from "@components/pages/landing/featuresGrid";
import FeatureShowcase from "@components/pages/landing/featureShowcase";


export default function Login() {
  const getStarted = () => {
    console.log("clicked");
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen w-full bg-gradient-to-b from-blue-600 via-blue-400 via-60% to-sky-300 flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center">
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-white/80 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm motion-opacity-in-0 motion-duration-500">
            Tabime
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-md leading-tight max-w-4xl
            motion-opacity-in-0 motion-scale-in-90 motion-blur-in-md motion-duration-500"
          >
            Simplicity For Incredible Journeys
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-xl motion-opacity-in-0 motion-translate-y-in-[8px] motion-duration-500 motion-delay-200">
            Plan your dream trip with a touch of anime magic. Discover,
            collaborate, and explore the world.
          </p>
          <AnimatedButton
            onClick={getStarted}
            baseColor="orange"
            accentColor="amber"
            className="motion-scale-in-75 motion-blur-in-md motion-duration-500 motion-delay-300"
          >
            Start Your Journey
          </AnimatedButton>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid />

      {/* Showcase */}
      <FeatureShowcase />

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-500 to-sky-400 text-white text-center overflow-hidden">
        {/* Decorative elements */}
        <svg
          className="absolute top-[10%] left-[5%] w-40 h-20 opacity-[0.08] animate-float-slow"
          viewBox="0 0 160 80"
          fill="white"
        >
          <ellipse cx="80" cy="50" rx="75" ry="25" />
          <ellipse cx="55" cy="38" rx="45" ry="32" />
          <ellipse cx="110" cy="35" rx="45" ry="30" />
        </svg>
        <svg
          className="absolute bottom-[15%] right-[8%] w-32 h-16 opacity-[0.06] animate-float-medium"
          style={{ animationDelay: "-4s" }}
          viewBox="0 0 128 64"
          fill="white"
        >
          <ellipse cx="64" cy="40" rx="60" ry="20" />
          <ellipse cx="45" cy="30" rx="35" ry="25" />
          <ellipse cx="85" cy="28" rx="38" ry="26" />
        </svg>

        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[8px] intersect:motion-duration-500">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto intersect-once intersect:motion-opacity-in-0 intersect:motion-duration-500 intersect:motion-delay-100">
            Join thousands of travelers turning anime dreams into real
            adventures.
          </p>
          <div className="intersect-once intersect:motion-scale-in-75 intersect:motion-duration-500 intersect:motion-delay-200">
            <AnimatedButton
              onClick={getStarted}
              baseColor="orange"
              accentColor="amber"
            >
              Get Started Free
            </AnimatedButton>
          </div>
          <p className="text-sm text-white/70 mt-4">
            No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
