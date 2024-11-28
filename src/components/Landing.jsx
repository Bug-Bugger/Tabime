import GradientButton from "./GradientButton";

const Landing = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-transparent z-20 gap-8">
      <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent z-20 leading-relaxed px-7 py-2 text-center">
        Simplicity For Incredible Journeys
      </div>
      <GradientButton>Get Started</GradientButton>
    </div>
  );
};

export default Landing;
