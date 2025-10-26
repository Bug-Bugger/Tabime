"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Plus, Zap } from "lucide-react";
import Tabs from "@components/reusable/tabs";
import {
  GoogleMap,
  useLoadScript,
  Libraries,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import ChatBox from "@components/reusable/chatbox";
import useWindowSize from "@src/lib/window_size";
import { TabInfo } from "@components/types/reusableTypes";
import { createClient } from "@utils/supabase/client";

const libraries: Libraries = ["places"];

export default function TripEditor({ tripId }: { tripId: string }) {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 500;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapCenter] = useState<google.maps.LatLngLiteral>({
    lat: 40.7128,
    lng: -74.006,
  });
  const [isSideBannerOpen, setIsSideBannerOpen] = useState<boolean>(false);
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
  const [optimizationResult, setOptimizationResult] = useState<any>(null);
  const [tripData, setTripData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [directionsResponses, setDirectionsResponses] = useState<google.maps.DirectionsResult[]>([]);
  const [routeMetrics, setRouteMetrics] = useState<{distance: string, duration: string} | null>(null);
  const [preOptimizationMetrics, setPreOptimizationMetrics] = useState<{distance: string, duration: string} | null>(null);

  console.log("TripId", tripId);

  // Fetch real trip data from backend API
  useEffect(() => {
    async function fetchTripData() {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          console.error('No session found');
          setIsLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:3001/api/trips/${tripId}`,
          {
            headers: {
              'Authorization': `Bearer ${session.access_token}`
            }
          }
        );

        const result = await response.json();

        if (result.status === 'success') {
          setTripData(result.data);
          console.log('Fetched trip data:', result.data);
        } else {
          console.error('Failed to fetch trip:', result.message);
        }
      } catch (error) {
        console.error('Error fetching trip:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTripData();
  }, [tripId]);

  // Calculate directions for each day's route
  useEffect(() => {
    if (!tripData?.days || !isLoaded) return;

    const calculateDirections = async () => {
      const directionsService = new google.maps.DirectionsService();
      const results: google.maps.DirectionsResult[] = [];

      for (const day of tripData.days) {
        const locations = (day.locations || [])
          .filter((dayLoc: any) => dayLoc.location?.latitude && dayLoc.location?.longitude)
          .sort((a: any, b: any) => a.orderNumber - b.orderNumber);

        if (locations.length < 2) continue; // Need at least 2 locations for a route

        // Create waypoints array (all locations between first and last)
        const waypoints = locations.slice(1, -1).map((dayLoc: any) => ({
          location: {
            lat: dayLoc.location.latitude,
            lng: dayLoc.location.longitude
          },
          stopover: true
        }));

        try {
          const result = await directionsService.route({
            origin: {
              lat: locations[0].location.latitude,
              lng: locations[0].location.longitude
            },
            destination: {
              lat: locations[locations.length - 1].location.latitude,
              lng: locations[locations.length - 1].location.longitude
            },
            waypoints: waypoints,
            travelMode: google.maps.TravelMode.DRIVING,
          });

          results.push(result);
        } catch (error) {
          console.error('Error calculating directions:', error);
        }
      }

      setDirectionsResponses(results);
    };

    calculateDirections();
  }, [tripData, isLoaded]);

  // Calculate total route metrics from directions
  useEffect(() => {
    if (directionsResponses.length === 0) return;

    let totalDistanceMeters = 0;
    let totalDurationSeconds = 0;

    directionsResponses.forEach(response => {
      response.routes[0]?.legs?.forEach(leg => {
        if (leg.distance?.value) totalDistanceMeters += leg.distance.value;
        if (leg.duration?.value) totalDurationSeconds += leg.duration.value;
      });
    });

    const distanceKm = (totalDistanceMeters / 1000).toFixed(1);
    const hours = Math.floor(totalDurationSeconds / 3600);
    const minutes = Math.round((totalDurationSeconds % 3600) / 60);
    const durationText = hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;

    setRouteMetrics({
      distance: `${distanceKm} km`,
      duration: durationText
    });
  }, [directionsResponses]);

  // Show optimization comparison when new metrics are available after optimization
  useEffect(() => {
    if (!routeMetrics || !preOptimizationMetrics) return;

    // Calculate savings
    const preDistance = parseFloat(preOptimizationMetrics.distance);
    const newDistance = parseFloat(routeMetrics.distance);
    const distanceSavings = (preDistance - newDistance).toFixed(1);
    const savingsPercent = ((distanceSavings / preDistance) * 100).toFixed(1);

    // Show comparison alert
    setTimeout(() => {
      alert(
        `✅ Route Optimized Successfully!\n\n` +
        `BEFORE:\n` +
        `  Distance: ${preOptimizationMetrics.distance}\n` +
        `  Time: ${preOptimizationMetrics.duration}\n\n` +
        `AFTER:\n` +
        `  Distance: ${routeMetrics.distance}\n` +
        `  Time: ${routeMetrics.duration}\n\n` +
        `💰 SAVINGS:\n` +
        `  ${distanceSavings} km saved (${savingsPercent}%)\n\n` +
        `The route has been reordered for maximum efficiency!`
      );

      // Clear pre-optimization metrics after showing comparison
      setPreOptimizationMetrics(null);
    }, 500);
  }, [routeMetrics, preOptimizationMetrics]);

  if (loadError) {
    return <div>Error loading maps. Please check your API key.</div>;
  }

  if (!isLoaded || isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="text-lg">Loading...</div>
    </div>;
  }

  if (!tripData) {
    return <div className="flex items-center justify-center h-screen">
      <div className="text-lg">Trip not found or you don't have access.</div>
    </div>;
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

  // Function to optimize route using TSP algorithm
  async function optimizeDay(dayItineraryId: number) {
    setIsOptimizing(true);

    // Store current metrics in React state for comparison
    if (routeMetrics) {
      setPreOptimizationMetrics(routeMetrics);
    }

    try {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log(session?.access_token);
      if (!session) {
        alert("Please log in to optimize routes");
        setIsOptimizing(false);
        return;
      }

      const response = await fetch(
        `http://localhost:3001/api/trips/${tripId}/optimize`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ dayItineraryId }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setOptimizationResult(result.data.optimization);

        // Refetch trip data to get new order (no reload needed!)
        const tripResponse = await fetch(
          `http://localhost:3001/api/trips/${tripId}`,
          {
            headers: {
              'Authorization': `Bearer ${session.access_token}`
            }
          }
        );

        const tripResult = await tripResponse.json();

        if (tripResult.status === 'success') {
          setTripData(tripResult.data);
          // Routes will recalculate automatically via useEffect
          // Comparison alert will show automatically when new metrics calculate
        } else {
          console.error('Failed to refetch trip:', tripResult.message);
        }
      } else {
        alert(`Error: ${result.message || "Failed to optimize route"}`);
      }
    } catch (error) {
      console.error("Optimization error:", error);
      alert("Failed to optimize route. Please try again.");
    } finally {
      setIsOptimizing(false);
    }
  }

  const itineraryContent = (
    <div className="p-4 flex flex-col gap-4">
      {/* Route Summary Card */}
      {routeMetrics && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-blue-900">
              Total Travel Time
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-700">{routeMetrics.duration}</span>
                <span className="text-xs text-blue-600">Driving time</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-blue-700">{routeMetrics.distance}</span>
                <span className="text-xs text-blue-600">Total distance</span>
              </div>
            </div>
            <p className="text-xs text-blue-700 mt-3 italic">
              💡 Click "Optimize" below to reduce travel time by reordering locations
            </p>
          </CardContent>
        </Card>
      )}

      {tripData?.days?.map((dayItinerary: any, dayIndex: number) => (
        <div key={dayIndex} className="flex flex-col gap-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {dayItinerary.name || `Day ${dayItinerary.dayNumber}`}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => optimizeDay(dayItinerary.id)} // Use real dayItineraryId!
                disabled={isOptimizing || (dayItinerary.locations?.length || 0) < 2}
                className={`flex items-center gap-1 px-3 py-1 rounded text-sm font-medium transition-colors ${
                  isOptimizing || (dayItinerary.locations?.length || 0) < 2
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
                title={
                  (dayItinerary.locations?.length || 0) < 2
                    ? "Need at least 2 locations to optimize"
                    : "Optimize route using TSP algorithm"
                }
              >
                <Zap className="w-4 h-4" />
                {isOptimizing ? "Optimizing..." : "Optimize"}
              </button>
              <button className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-100 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Show optimization result if available */}
          {optimizationResult &&
            optimizationResult.dayItineraryId === dayItinerary.id && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                <p className="text-sm text-green-800 font-semibold">
                  ✅ Route Optimized!
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Saved {optimizationResult.savings} km (
                  {optimizationResult.savingsPercentage}%)
                </p>
              </div>
            )}

          <ul className="space-y-5">
            {dayItinerary.locations?.sort((a: any, b: any) => a.orderNumber - b.orderNumber).map((dayLoc: any, locIndex: number) => (
              <li key={dayLoc.id}>
                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => {
                    if (dayLoc.location?.latitude && dayLoc.location?.longitude) {
                      panToLocation(dayLoc.location.latitude, dayLoc.location.longitude);
                    }
                  }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {locIndex + 1}
                      </span>
                      {dayLoc.location?.name || 'Location'}
                      <span className="text-xs text-gray-400 ml-auto">📍 Click to view on map</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {dayLoc.location?.description && <p className="text-sm text-gray-600 mb-2">{dayLoc.location.description}</p>}
                    {dayLoc.notes && <p className="text-sm italic">Note: {dayLoc.notes}</p>}
                    {dayLoc.arrivalTime && (
                      <p className="text-xs text-gray-500 mt-1">
                        Arrival: {new Date(dayLoc.arrivalTime).toLocaleTimeString()}
                      </p>
                    )}
                  </CardContent>
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
    if (!tripData?.days) return [];

    return tripData.days.flatMap((day: any) =>
      (day.locations || [])
        .filter((dayLoc: any) => dayLoc.location?.latitude && dayLoc.location?.longitude)
        .map((dayLoc: any) => ({
          id: dayLoc.location.id,
          position: {
            lat: dayLoc.location.latitude,
            lng: dayLoc.location.longitude
          },
          title: dayLoc.location.name
        }))
    );
  };

  const markers = getMarkers();
  console.log('Markers:', markers);

  // Function to pan map to a specific location
  const panToLocation = (lat: number, lng: number) => {
    if (map) {
      map.panTo({ lat, lng });
      map.setZoom(15); // Zoom in when clicking on a location
    }
  };

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
        >
          {/* Render route paths following actual roads */}
          {directionsResponses.map((directions, index) => (
            <DirectionsRenderer
              key={`directions-${index}`}
              directions={directions}
              options={{
                suppressMarkers: true, // We'll use our own markers
                polylineOptions: {
                  strokeColor: "#3B82F6",
                  strokeOpacity: 0.8,
                  strokeWeight: 4,
                }
              }}
            />
          ))}

          {/* Render markers from trip data */}
          {markers.map(
            (marker) =>
              marker.position && (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  title={marker.title}
                />
              )
          )}
        </GoogleMap>
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
