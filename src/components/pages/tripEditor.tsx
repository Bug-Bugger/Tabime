"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Plus } from "lucide-react";
import Tabs from "@components/reusable/tabs";
import { GoogleMap, useLoadScript, Libraries } from "@react-google-maps/api";
import trips from "@assets/trip.json";
import ChatBox from "@components/reusable/chatbox";
import useWindowSize from "@src/lib/window_size";
import { TabInfo } from "@components/types/reusableTypes";

const libraries: Libraries = ["places"];

export default function TripEditor() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 500;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });

  const [, setMap] = useState<google.maps.Map | null>(null);
  const [mapCenter] = useState<google.maps.LatLngLiteral>({
    lat: 40.7128,
    lng: -74.006,
  });
  const [isSideBannerOpen, setIsSideBannerOpen] = useState<boolean>(false);

  if (loadError) {
    return <div>Error loading maps. Please check your API key.</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  function getMonthName(month: number) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("default", { month: "long" });
    return monthName;
  }

  const date = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = getMonthName(today.getMonth() + 1); // Get month name
    const year = today.getFullYear();

    const next = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Calculate date 7 days later
    const next_day = String(next.getDate()).padStart(2, "0");
    // Handle month/year change for the end date if necessary
    const next_month = getMonthName(next.getMonth() + 1);
    const next_year = next.getFullYear();

    if (year !== next_year) {
      return `${month} ${day}, ${year} - ${next_month} ${next_day}, ${next_year}`;
    } else if (month !== next_month) {
      return `${month} ${day} - ${next_month} ${next_day}, ${year}`;
    } else {
      return `${month} ${day} - ${next_day}, ${year}`;
    }
  };

  const itineraryContent = (
    <div className="p-4 flex flex-col gap-4">
      {trips.map((dayTrip, dayIndex) => (
        <div key={dayIndex} className="flex flex-col gap-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {dayTrip.day}
            </h3>
            <button className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-100 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-5">
            {dayTrip.trips.map((trip, tripIndex) => (
              <li key={tripIndex}>
                <Card>
                  <CardHeader>
                    <CardTitle>{trip.location}</CardTitle>
                  </CardHeader>
                  {(trip.plan || trip.arrival) && (
                    <CardContent>
                      {trip.plan && <p>{trip.plan}</p>}
                      {trip.arrival && <p>Arrival: {trip.arrival}</p>}
                    </CardContent>
                  )}
                  {(trip.type || trip.price) && (
                    <CardContent>
                      <div className="flex items-center flex-wrap gap-2">
                        {trip.type && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                            {trip.type}
                          </span>
                        )}
                        {trip.price && (
                          <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                            {trip.price}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const budgetContent = (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Budget Overview</h3>
      <p className="text-gray-600">
        Budget details and tracking will go here...
      </p>
    </div>
  );

  const notesContent = (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Trip Notes</h3>
      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your notes, reminders, or links here..."
      ></textarea>
    </div>
  );

  const tabData: TabInfo[] = [
    { label: "Itinerary", content: itineraryContent },
    { label: "Budget", content: budgetContent },
    { label: "Notes", content: notesContent },
  ];

  const getMarkers = () => {
    return trips.flatMap((day) =>
      day.trips
        .filter((trip) => trip.position) // Only include trips with position data
        .map((trip) => ({
          ...trip, // Properly spread the trip properties
        }))
    );
  };

  const markers = getMarkers();
  console.log(markers);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Map */}
      <div className="absolute inset-0 w-full h-full">
        <div className="h-20 w-full absolute top-0 left-0 bg-gradient-to-b from-primary/90 via-primary/70 to-transparent z-10 pointer-events-none" />
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={mapCenter}
          zoom={13}
          onLoad={(map) => setMap(map)}
          options={{
            zoomControl: false,
            cameraControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
          }}
        ></GoogleMap>
      </div>

      {!(isSideBannerOpen && isMobile) && (
        <ChatBox
          isChatModalOpen={isChatModalOpen}
          setIsChatModalOpen={setIsChatModalOpen}
        />
      )}

      {/* Toggle Sidebar Button - Fixed position */}
      {!(isChatModalOpen && isMobile) && (
        <Button
          className={`fixed ${
            isSideBannerOpen
              ? "right-[320px] md:right-[320px] lg:right-[384px]"
              : "right-6"
          } bottom-10 justify-center items-center transition-all duration-300 opacity-100`}
          onClick={() => setIsSideBannerOpen(!isSideBannerOpen)}
        >
          {isSideBannerOpen ? (
            <ChevronRight size={24} />
          ) : (
            <ChevronLeft size={24} />
          )}
        </Button>
      )}

      {/* Sidebar */}
      {isSideBannerOpen && (
        <div className="fixed top-0 right-0 w-[320px] lg:w-[384px] h-screen bg-white shadow-lg overflow-y-auto transition-all duration-300 ease-in-out no-scrollbar-shift">
          <div className="bg-blue-500 h-40 flex items-center justify-between px-6">
            {/* Top part of the banner */}
            <div>
              <h2 className="text-white font-bold text-2xl mt-[4rem]">
                Your Itinerary
              </h2>
              <div className="flex flex-row items-center gap-2 mt-4">
                <Calendar size={20} className="text-white" />
                <p className="text-white md:italic">{date()}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Tabs tabs={tabData} />
          </div>
        </div>
      )}
    </div>
  );
}
