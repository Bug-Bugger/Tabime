import TripEditor from "@components/pages/tripEditor";
export default function DocumentPage({
  params: { tripId },
}: {
  params: { tripId: string };
}) {
  return <TripEditor tripId={tripId} />;
}
