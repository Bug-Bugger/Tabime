"use client";

const Trip = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative min-h-52 h-[20%] w-full bg-gradient-to-r from-[#6f97fa] to-[#9064ff] shadow-md flex items-center">
        <div className="absolute top-[-25%] right-[15%] h-40 w-40 rounded-full bg-[#99b5fa] opacity-15 z-0"></div>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 L0,19 Q10,12 20,16 Q30,20 40,15 Q50,10 60,15 Q70,20 80,15 Q90,10 100,16 L100,24 Z"
            fill="white"
            opacity="0.07"
          />
          <path
            d="M0,24 L0,20 Q15,16 25,18 Q35,20 45,16 Q60,12 75,17 Q85,20 100,18 L100,24 Z"
            fill="white"
            opacity="0.07"
          />
        </svg>

        <h1 className="font-bold text-blue-50 text-3xl font-sans px-10 md:px-32 z-20 motion-preset-slide-right mt-10">
          My Trips
        </h1>
      </div>
    </div>
  );
};

export default Trip;
