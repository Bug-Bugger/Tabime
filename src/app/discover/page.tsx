"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { useState } from "react";
import {
  DiscoverSortType,
  DiscoverFilterType,
  DISCOVER_SORTS,
  DISCOVER_FILTERS,
} from "@components/types/dataTypes";

const DiscoverPage = () => {
  const [activeSort, setActiveSort] = useState<DiscoverSortType>(
    DiscoverSortType.RELEVANCE
  );

  const [activeFilter, setActiveFilter] = useState<DiscoverFilterType>(
    DiscoverFilterType.ANIME
  );

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="relative min-h-52 h-[20%] w-full bg-gradient-to-br from-primary to-highlight shadow-md flex items-center">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 L0,21 Q25,19 50,21 Q75,23 100,20 L100,24 Z"
            fill="white"
            opacity="0.07"
          />
          <path
            d="M0,24 L0,22.5 Q25,21 50,22.5 Q75,24 100,22 L100,24 Z"
            fill="white"
            opacity="0.05"
          />

          <path
            d="M0,17.5 C15,16 25,19 40,15 C55,11 70,16 85,13.5 C95,12 100,14.5 100,16"
            stroke="white"
            strokeWidth="0.15"
            opacity="0.2"
            fill="none"
            strokeDasharray="0.5,1"
          />
        </svg>

        <svg
          className="absolute top-[-15%] left-[40%] w-48 aspect-square opacity-10 -rotate-12 hidden md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M50,10 L54,45 L90,50 L54,55 L50,90 L46,55 L10,50 L46,45 Z"
            fill="white"
          />
        </svg>

        <svg
          className="absolute bottom-[20%] left-[22%] w-28 aspect-square opacity-15 hidden md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeDasharray="2,3"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            strokeDasharray="1,4"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          className="absolute top-[-110%] right-[0%] w-[42rem] aspect-square opacity-40"
        >
          <defs>
            <radialGradient id="c" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stop-color="#FFF" stop-opacity=".5" />
              <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FFF" stop-opacity=".2" />
              <stop offset="50%" stop-color="#FFF" stop-opacity=".5" />
              <stop offset="100%" stop-color="#FFF" stop-opacity=".2" />
            </linearGradient>
            <filter id="b" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="blur"
              />
              <feComposite in="SourceGraphic" in2="blur" />
            </filter>
          </defs>
          <g stroke="url(#a)" stroke-linecap="round">
            <path stroke-width="1.2" d="m100 80 30 40m0 0 40-20m0 0 40 30" />
            <path
              stroke-width="1.5"
              d="m210 130 40-40m0 0 40 20m-40-20-10 60"
            />
            <path
              stroke-width="1.2"
              d="m240 150-50 30m50-30 20 60m-20-60 80 20m-70-80 70 80"
            />
          </g>
          <circle
            cx="100"
            cy="80"
            r="2.5"
            fill="#F5F3FF"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="130"
            cy="120"
            r="2"
            fill="#E6E6FA"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="170"
            cy="100"
            r="2.8"
            fill="#FFF8DC"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="210"
            cy="130"
            r="2.4"
            fill="#F0F8FF"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="250"
            cy="90"
            r="3.5"
            fill="#FFFACD"
            opacity=".8"
            filter="url(#b)"
          />
          <circle
            cx="290"
            cy="110"
            r="2.2"
            fill="azure"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="240"
            cy="150"
            r="3"
            fill="#F8F8FF"
            opacity=".75"
            filter="url(#b)"
          />
          <circle
            cx="190"
            cy="180"
            r="2.1"
            fill="#F0F8FF"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="260"
            cy="210"
            r="2.4"
            fill="#F5F5F5"
            opacity=".7"
            filter="url(#b)"
          />
          <circle
            cx="320"
            cy="170"
            r="2.3"
            fill="#E6E6FA"
            opacity=".7"
            filter="url(#b)"
          />
          <circle cx="250" cy="90" r="10" fill="url(#c)" opacity=".2">
            <animate
              attributeName="opacity"
              values="0.2;0.35;0.2"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="240" cy="150" r="8" fill="url(#c)" opacity=".15">
            <animate
              attributeName="opacity"
              values="0.15;0.3;0.15"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        <div className="font-bold text-blue-50 font-sans px-10 md:px-32 z-20 mt-16">
          <h1 className="text-4xl motion-preset-slide-right">Discover</h1>
          <h2 className="text-lg font-light motion-preset-blur-right-md delay-300">
            Your next adventure
          </h2>
        </div>
      </div>
      <div className="w-auto mx-5 md:mx-20 p-4">
        <div className="h-[7vh] w-full flex justify-between items-center motion-preset-slide-up-md">
          <div className="flex space-x-2">
            {DISCOVER_FILTERS.map((filter, index) => (
              <Button
                key={index}
                onClick={() => setActiveFilter(filter.type)}
                className={`${
                  activeFilter === filter.type ? "bg-primary" : "bg-secondary"
                } text-primary-foreground rounded-3xl px-6 py-5 text-md`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          <div>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-secondary rounded-3xl px-6 w-56 py-5 border-secondary text-md"
                >
                  Sort By: {activeSort}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup
                  value={activeSort}
                  onValueChange={(value) =>
                    setActiveSort(value as DiscoverSortType)
                  }
                >
                  {DISCOVER_SORTS.map((sort, index) => (
                    <DropdownMenuRadioItem
                      key={index}
                      value={sort.type}
                      className="text-secondary"
                    >
                      {sort.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-bold text-blue-500 text-2xl font-sans border-b-4 w-fit border-blue-300 motion-preset-slide-right">
            Recommended for you
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
