"use client";
import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Libraries  } from "@react-google-maps/api";

const libraries: Libraries = ["places"];

export default function TripEditor({ tripId }: { tripId: string }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries
  });

  const [trip, setTrip] = useState(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchTrip() {
  //       try {
  //         const response = await fetch(``);
  //         const data = await response.json();
  //         setTrip(data);
  //       } catch (error) {
  //         console.error("Error fetching trip:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchTrip();
  //   }, [tripId]);

  //   if (loading) return <div>Loading document...</div>;
  //   if (!trip) return <div>Trip not found</div>;

  if (loadError) {
    return <div>Error loading maps. Please check your API key.</div>;
  }

   if (!isLoaded) {
    return <div>Loading maps...</div>;
  }
  
  return (
    <div className="min-h-screen w-full relative items-center justify-center">
      <div className="h-20 w-full absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent z-50"/>
      {/* Map section */}
      <div className="w-full h-96 md:h-screen z-30">
        <GoogleMap
          mapContainerClassName="w-full h-full"
          zoom={13}
          center={{ lat: 40.7128, lng: -74.0060 }} 
          onLoad={(map) => setMap(map)}
          options={{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
          }}
        ></GoogleMap>
      </div>

      {/* Directions sidebar */}
      <div className="w-full md:w-1/3 bg-white shadow-lg overflow-y-auto h-96 md:h-screen">
        <div className="p-4 bg-blue-600 text-white">
          <h2 className="text-xl font-bold">
            Your Optimized Route for trip {tripId}
          </h2>
        </div>
      </div>
    </div>
  );
}
