"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  ClipboardList,
  MapPinCheck,
  Plane,
  LayoutList,
  NotebookPen,
} from "lucide-react";
import { Anime, TravelPlan } from "@components/types/dataTypes";

const animeList: Anime[] = [
  {
    title: "Summer Pocket",
    tags: ["Slice of Life", "Romance"],
    locationCount: 12,
  },
  {
    title: "Girls Band Cry",
    tags: ["Music", "Drama"],
    locationCount: 52,
  },
  {
    title: "BanG Dream! It's MyGO!!!!!",
    tags: ["Music", "Drama"],
    locationCount: 30,
  },
  {
    title: "Steins;Gate",
    tags: ["Sci-Fi", "Thriller"],
    locationCount: 42,
  },
];

const travelPlans: TravelPlan[] = [
  {
    title: "Tokyo Anime Tour",
    startDate: new Date("2022-10-10"),
    endDate: new Date("2022-10-20"),
    locationCount: 12,
    animeCount: 5,
    collaborators: 3,
  },
  {
    title: "Kyoto Anime Tour",
    startDate: new Date("2022-11-10"),
    endDate: new Date("2022-11-20"),
    locationCount: 43,
    animeCount: 12,
    collaborators: 1,
  },
  {
    title: "Osaka Anime Tour",
    startDate: new Date("2022-12-10"),
    endDate: new Date("2022-12-20"),
    locationCount: 22,
    animeCount: 7,
    collaborators: 10,
  },
];

const handleCreatePlan = () => {
  console.log("Create Plan");
};

const handleAddAnime = () => {
  console.log("Add Anime");
};

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative min-h-52 h-[20%] w-full bg-gradient-to-t from-[#839ee3] to-[#5887fe] shadow-md flex items-center">
        <div className="absolute top-[12%] left-[5%] h-24 w-24 rounded-full bg-[#8656ff] opacity-20 z-0"></div>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C16.7,13.3 33.3,24 50,16.7 C66.7,9.3 83.3,20 100,15"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.15"
            fill="none"
          />
        </svg>
        <svg
          className="absolute top-[5%] right-[30%] w-32 h-32 opacity-10 rotate-[38deg]"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,15.47 20,67.32 80,67.32"
            fill="white"
            stroke="none"
          />
        </svg>
        <svg
          className="absolute bottom-[10%] left-[15%] w-20 h-20 opacity-15 rotate-[15deg]"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,15.47 20,67.32 80,67.32"
            fill="white"
            stroke="none"
          />
        </svg>
        <svg
          className="absolute top-[30%] right-[13%] w-16 h-16 opacity-10 rotate-[102deg]"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,15.47 20,67.32 80,67.32"
            fill="white"
            stroke="none"
          />
        </svg>
        <h1 className="font-bold text-blue-50 text-3xl font-sans px-10 md:px-32 z-20 motion-preset-slide-right mt-10">
          Welcome Back! xxx!
        </h1>
      </div>
      <div className="w-auto mx-5 md:mx-20 p-4">
        <div className="w-auto grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-blue-500">
          <Card className="w-full motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md">
            <CardHeader>
              <CardTitle className="text-lg font-sans text-blue-500 flex">
                <div className="rounded-full bg-blue-100 flex items-center justify-center w-7 h-7 mr-2">
                  <ClipboardList size={20} className="text-blue-500 " />
                </div>
                Anime List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl border-b-2 w-fit ml-9 pr-4 -mt-5 text-blue-600">
                42
              </div>
            </CardContent>
          </Card>
          <Card className="w-full motion-opacity-in-0 motion-delay-100/translate motion-translate-y-in-50 motion-blur-in-md ">
            <CardHeader>
              <CardTitle className="text-lg font-sans text-blue-500 flex">
                <div className="rounded-full bg-blue-100 flex items-center justify-center w-7 h-7 mr-2">
                  <MapPinCheck size={20} className="text-blue-500 " />
                </div>
                Saved Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl border-b-2 w-fit ml-9 pr-4 -mt-5 text-blue-600">
                28
              </div>
            </CardContent>
          </Card>
          <Card className="w-full motion-opacity-in-0 motion-delay-150/translate motion-translate-y-in-50 motion-blur-in-md">
            <CardHeader>
              <CardTitle className="text-lg font-sans text-blue-500 flex">
                <div className="rounded-full bg-blue-100 flex items-center justify-center w-7 h-7 mr-2">
                  <Plane size={20} className="text-blue-500 " />
                </div>
                Travel Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl border-b-2 w-fit ml-9 pr-4 -mt-5 text-blue-600">
                3
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="my-6">
          <h1 className="font-bold text-blue-500 text-2xl font-sans border-b-4 w-fit border-blue-300 motion-preset-slide-right">
            Anime Lists
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-5">
            {animeList.map((anime, index) => (
              <Card key={index} className="w-full motion-preset-blur-up">
                <CardContent className="p-5">
                  <div className="w-full h-44 bg-blue-200 rounded-md">img</div>
                </CardContent>
                <CardHeader className="pt-0">
                  <div className="flex flex-wrap ">
                    {anime.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="mr-2 bg-blue-700 hover:bg-blue-800 select-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg font-sans text-blue-500">
                    {anime.title}
                  </CardTitle>
                  <CardDescription className="text-blue-400 mt-2">
                    {anime.locationCount} locations available
                  </CardDescription>
                  <Button className="mt-4 bg-[#9f73f1] hover:bg-[#7e4ff9]">
                    View
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
          {animeList.length > 0 && (
            <div className="flex justify-center motion-preset-blur-up-sm">
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                View All
              </Button>
            </div>
          )}
          {animeList.length === 0 && (
            <div
              className="flex flex-col items-center justify-center text-blue-500 text-lg font-sans
            motion-preset-blur-up"
            >
              <div className="bg-blue-300 rounded-full w-24 h-24 flex items-center justify-center">
                <LayoutList size={62} />
              </div>
              <div className="text-purple-500 pt-2 text-xl">
                No anime Lists Yet
              </div>
              <div className="text-blue-400 text-sm">
                Add your first anime or import from MAL to get started
              </div>
              <Button
                onClick={handleAddAnime}
                className="mt-4 bg-blue-500 hover:bg-blue-600"
              >
                Add Anime
              </Button>
            </div>
          )}
        </div>
        <div className="my-6 ">
          <h1
            className="font-bold text-blue-500 text-2xl font-sans border-b-4 w-fit border-blue-300
          intersect-once intersect:motion-preset-slide-right motion-delay-200"
          >
            Travel Plans
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
            {travelPlans.map((plan, index) => (
              <Card
                key={index}
                className="w-full intersect-once intersect:motion-preset-slide-up motion-delay-200"
              >
                <CardHeader className="bg-blue-600 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-12 h-12 rounded-full border-4 border-white opacity-10" />
                  <svg
                    className="absolute top-[2%] right-1/4 w-16 h-16 opacity-10 rotate-[30deg]"
                    viewBox="0 0 100 100"
                  >
                    <polygon
                      points="50,10 90,80 10,80"
                      fill="white"
                      stroke="none"
                      strokeWidth="1"
                    />
                  </svg>
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,20 C16.7,13.3 33.3,24 50,16.7 C66.7,9.3 83.3,20 100,15"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.2"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute top-0 left-0 w-3 h-full bg-blue-400 opacity-20"></div>

                  <CardTitle className="text-blue-50 text-xl relative z-10">
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-3">
                  <CardDescription className="text-blue-400 py-1">
                    {plan.startDate.toDateString()} -{" "}
                    {plan.endDate.toDateString()}
                  </CardDescription>
                  <CardDescription className="text-blue-400 py-1">
                    {plan.locationCount} locations · {plan.animeCount} anime
                    series
                  </CardDescription>
                  <CardDescription className="text-blue-400 py-1">
                    {plan.collaborators} collaborators
                  </CardDescription>
                  <CardDescription className="flex text-blue-400 py-4 gap-1">
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      View
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-600 ml-2">
                      Edit
                    </Button>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          {travelPlans.length > 0 && (
            <div className="flex justify-center intersect-once intersect:motion-preset-blur-up motion-delay-200">
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                View All
              </Button>
            </div>
          )}
          {travelPlans.length === 0 && (
            <div
              className="flex flex-col items-center justify-center text-blue-500 text-lg font-sans
           intersect-once intersect:motion-preset-blur-up motion-delay-200"
            >
              <div className="bg-blue-300 rounded-full w-24 h-24 flex items-center justify-center">
                <NotebookPen size={62} />
              </div>
              <div className="text-purple-500 pt-2 text-xl">
                No Travel Plans Yet
              </div>
              <div className="text-blue-400 text-sm">
                Create your first plan!
              </div>
              <Button
                onClick={handleCreatePlan}
                className="mt-4 bg-blue-500 hover:bg-blue-600"
              >
                Create Plan
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
