"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Tabs from "@components/reusable/tabs";
import {
	GoogleMap,
	useLoadScript,
	Libraries,
	LoadScript,
	Marker,
} from "@react-google-maps/api";
import trips from "@assets/trip.json";
import ChatBox from "@components/reusable/chatbox";
import useWindowSize from "@src/lib/window_size";

const libraries: Libraries = ["places"];

export default function TripEditor({ tripId }: { tripId?: string }) {
	const [isChatModalOpen, setIsChatModalOpen] = useState(false);
	const { width } = useWindowSize();
	const isMobile = width < 500;
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
		libraries,
	});

	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [mapCenter, _] = useState<google.maps.LatLngLiteral>({
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
		const month = getMonthName(today.getMonth() + 1); // Month is 0-indexed
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

	const getMarkers = () => {
		return trips.flatMap((day, _) =>
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
				<div className="h-20 w-full absolute top-0 left-0 bg-gradient-to-b from-secondary via-secondary/80 to-transparent z-10" />

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
					}}>
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
					onClick={() => setIsSideBannerOpen(!isSideBannerOpen)}>
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
						<Tabs content={[tripDescription]} />
					</div>
				</div>
			)}
		</div>
	);
}
