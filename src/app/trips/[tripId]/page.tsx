import TripEditor from "@components/pages/tripEditor";
export default function TripDetailPage({
  params: { tripId },
}: {
  params: { tripId: string };
}) {
  return <TripEditor tripId={tripId} />;
}
