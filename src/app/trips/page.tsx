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

const TripPage = () => {
  const [activeFilter, setActiveFilter] = useState<TripFilterType>(
    TripFilterType.ALL
  );
  const [activeSort, setActiveSort] = useState<TripSortType>(
    TripSortType.NEWEST
  );

  const tripFilter = (trip: Trip) => {
    switch (activeFilter) {
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
            Active Trips
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {displayData.map((trip, index) => (
              <Card key={index} className="motion-preset-slide-up-md">
                <CardHeader>
                  <CardTitle>{trip.title}</CardTitle>
                  <CardDescription>{trip.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {trip.startDate.toLocaleDateString()} -{" "}
                      {trip.endDate.toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      {trip.locations.length} Locations
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPage;
