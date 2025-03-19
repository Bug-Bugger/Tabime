"use client";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Tabs from "@components/reusable/tabs";
import { GoogleMap, useLoadScript, Libraries } from "@react-google-maps/api";
import trips from "@assets/trip.json";

const libraries: Libraries = ["places"];

export default function TripEditor({ tripId }: { tripId: string }) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
		libraries,
	});

	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral>({ lat: 40.7128, lng: -74.006 });
	const [isSideBannerOpen, setIsSideBannerOpen] = useState<boolean>(false);
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

	function getMonthName(month: number) {
		const d = new Date();
		d.setMonth(month - 1);
		const monthName = d.toLocaleString("default", { month: "long" });
		return monthName;
	}

	const date = () => {
		const today = new Date();
		const day = String(today.getDate()).padStart(2, "0");
		const month = getMonthName(today.getMonth() + 1) // Month is 0-indexed
		const year = today.getFullYear();

		const next = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
		const next_day = String(next.getDate()).padStart(2, "0");

		const formattedDate = `${month} ${day} - ${next_day}, ${year}`;
		return formattedDate;
	};

	const tripDescription = (
		<div className="p-6 flex flex-col h-full">
			<div className="flex flex-col gap-4">
				{trips.map((dayTrip, dayIndex) => (
					<div key={dayIndex} className="flex flex-col gap-2">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-xl font-bold text-black">{dayTrip.day}</h3>
							<button className="text-blue-500">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
							</button>
						</div>
						<ul className="text-white/80 text-sm space-y-4">
							{dayTrip.trips.map((trip, tripIndex) => (
								<li key={tripIndex}>
									<Card>
										<CardHeader>
											<CardTitle className="text-xl font-bold">
												{trip.location}
											</CardTitle>
										</CardHeader>
										{trip.plan && (
											<CardContent>
												<p>{trip.plan}</p>
											</CardContent>
										)}
										{trip.arrival && (
											<CardContent>
												<p>{trip.arrival}</p>
											</CardContent>
										)}
										<CardContent>
											<div className="flex items-center space-x-2">
												<span className="bg-blue-100 bg-opacity-70 text-blue-800 text-sm px-3 py-1 rounded-full">
													{trip.type}
												</span>
												{trip.price && (
													<span className="bg-yellow-100 bg-opacity-70 text-blue-800 text-sm px-3 py-1 rounded-full">
														{trip.price}
													</span>
												)}
											</div>
										</CardContent>
									</Card>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<div className="min-h-screen w-full relative flex">
			{/* Map section */}
			<div className="flex-1 relative">
				<div className="h-20 w-full absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent z-50" />
				<div className="w-full h-96 md:h-screen z-30">
					<GoogleMap
						mapContainerClassName="w-full h-full"
						zoom={13}
						center={mapCenter}
						onLoad={(map) => setMap(map)}
						options={{
							fullscreenControl: false,
							streetViewControl: false,
							mapTypeControl: false,
						}}></GoogleMap>
				</div>
			</div>

			{/* Side Banner Button */}
			<Button
				className="absolute bottom-20 right-6 z-50 justify-center items-center"
				onClick={() => setIsSideBannerOpen(!isSideBannerOpen)}>
				{isSideBannerOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
			</Button>

			{/* Side Banner */}
			{isSideBannerOpen ? (
				<div className="md:block w-80 lg:w-96 h-screen bg-white absolute top-0 right-0 shadow-lg z-40 overflow-y-auto">
					<div className="bg-blue-500 h-40 flex items-center justify-between px-6">
						{/* Top part of the banner */}
						<div>
							<h2 className="text-white font-bold text-2xl mt-[2rem]">
								Your Itinerary
							</h2>
							<div className="flex flex-row items-center gap-2 mt-4">
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p className="text-white md:italic">{date()}</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<Tabs content={[tripDescription]} />
					</div>
				</div>
			) : null}
		</div>
	);
}
