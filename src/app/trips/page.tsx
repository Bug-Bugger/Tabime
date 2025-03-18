"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { useState, useEffect } from "react";
import {
  TripFilterType,
  TRIP_FILTERS,
  TripSortType,
  TRIP_SORTS,
  TEMP_TRIPS,
  TEMP_USER_A,
  Trip,
} from "@components/types/dataTypes";
import { NotebookPen, Star } from "lucide-react";
import Link from "next/link";

const handleCreatePlan = () => {
  console.log("Create Plan");
};

const handleTripFavorite = (tripId: string) => {
  console.log("Favorite Trip", tripId);
  // POST to update trip favorite status
  // Upon success, update trip data
  // const updatedTrip = TEMP_TRIPS.find((trip) => trip.id === tripId);
};

const TripPage = () => {
  const [activeFilter, setActiveFilter] = useState<TripFilterType>(
    TripFilterType.UPCOMING
  );
  const [activeSort, setActiveSort] = useState<TripSortType>(
    TripSortType.NEWEST
  );

  const tripFilter = (trip: Trip) => {
    switch (activeFilter) {
      case TripFilterType.UPCOMING:
        return trip.startDate.getTime() > new Date().getTime();
      case TripFilterType.ALL:
        return true;
      case TripFilterType.FAVORITES:
        return trip.isFavorite;
      case TripFilterType.MY_TRIPS:
        return trip.tripOwner.id === TEMP_USER_A.id;
      case TripFilterType.SHARED:
        return trip.tripOwner.id !== TEMP_USER_A.id;
      default:
        return true;
    }
  };

  const tripSort = (a: Trip, b: Trip) => {
    switch (activeSort) {
      case TripSortType.NAME:
        return a.title.localeCompare(b.title);
      case TripSortType.NEWEST:
        return a.startDate.getTime() - b.startDate.getTime();
      case TripSortType.OLDEST:
        return b.startDate.getTime() - a.startDate.getTime();
      case TripSortType.LAST_MODIFIED:
        return a.lastModifiedDate.getTime() - b.lastModifiedDate.getTime();
      case TripSortType.LOCATION_COUNT:
        return a.locations.length - b.locations.length;
      default:
        return 0;
    }
  };

  const tripData: Trip[] = TEMP_TRIPS;
  const [displayData, setDisplayData] = useState<Trip[]>(
    tripData.filter(tripFilter).sort(tripSort)
  );

  useEffect(() => {
    setDisplayData(tripData.filter(tripFilter).sort(tripSort));
  }, [activeFilter, activeSort]);

  return (
    <div className="min-h-screen w-full bg-background">
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
      <div className="w-auto mx-5 md:mx-20 p-4">
        <div className="h-[7vh] w-full flex justify-between items-center motion-preset-slide-up-md">
          <div className="flex space-x-2">
            {TRIP_FILTERS.map((filter, index) => (
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
                    setActiveSort(value as TripSortType)
                  }
                >
                  {TRIP_SORTS.map((sort, index) => (
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
            Trips
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {displayData.map((trip, index) => (
              <Card
                key={index}
                className="w-full intersect-once rounded-lg intersect:motion-preset-slide-up motion-delay-200 overflow-hidden"
              >
                <CardHeader className="bg-blue-600 h-60 relative">
                  <button
                    onClick={() => handleTripFavorite(trip.id)}
                    className="focus:outline-none absolute top-4 left-4 z-10"
                    aria-label={
                      trip.isFavorite ? "Unstar document" : "Star document"
                    }
                  >
                    <Star
                      size={30}
                      className={`${
                        trip.isFavorite
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300 group-hover:text-gray-400"
                      } transition-colors`}
                    />
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 180"
                    className="w-full h-full"
                  >
                    {/* Path connecting waypoints */}
                    <path
                      d="M 40,140 C 70,100 90,130 130,90 S 180,70 220,50 260,20 280,40"
                      fill="none"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="0"
                      strokeLinejoin="round"
                    />

                    {/* Waypoint markers */}
                    <circle cx="40" cy="140" r="6" fill="#ffffff" />
                    <circle cx="130" cy="90" r="6" fill="#ffffff" />
                    <circle cx="220" cy="50" r="6" fill="#ffffff" />
                    <circle cx="280" cy="40" r="6" fill="#ffffff" />

                    {/* Starting point special marker */}
                    <circle
                      cx="40"
                      cy="140"
                      r="10"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  </svg>
                </CardHeader>
                <CardContent className="p-5 pt-3">
                  <CardTitle className="text-primary text-xl relative z-10">
                    {trip.title}
                  </CardTitle>
                  <CardDescription className="text-secondary py-1">
                    {trip.startDate.toDateString()} -{" "}
                    {trip.endDate.toDateString()}
                  </CardDescription>
                  <CardDescription className="text-secondary py-1">
                    {trip.locations.length} locations · {trip.anime.length}{" "}
                    anime series
                  </CardDescription>
                  <CardDescription className="text-secondary py-1">
                    {trip.collaborators} collaborators
                  </CardDescription>
                  <CardDescription className="flex text-secondary py-4 gap-1">
                    <Button className="bg-blue-500 hover:bg-blue-600" asChild>
                      <Link href={`/trips/${trip.id}`}>View</Link>
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-600 ml-2">
                      Edit
                    </Button>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          {displayData.length === 0 && (
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

export default TripPage;
