"use client";
import { useState, useEffect } from "react";

export default function TripEditor({ tripId }: { tripId: string }) {
  const [trip, setTrip] = useState(null);
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

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      {/* Add your rich text editor component here */}
      <div>this is trip: {tripId}</div>
    </div>
  );
}
