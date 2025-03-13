export interface Anime {
  title: string;
  tags: string[];
  locationCount: number;
  imageUrl?: string;
}

export interface TravelPlan {
  title: string;
  startDate: Date;
  endDate: Date;
  locationCount: number;
  animeCount: number;
  collaborators: number;
}

export enum TripFilterType {
  ALL = "All",
  MY_TRIPS = "My Trips",
  SHARED = "Shared",
}

export interface TripFilter {
  type: TripFilterType;
  label: string;
}

export const TRIP_FILTERS: TripFilter[] = [
  { type: TripFilterType.ALL, label: "All" },
  { type: TripFilterType.MY_TRIPS, label: "My Trips" },
  { type: TripFilterType.SHARED, label: "Shared with me" },
];

export enum TripSortType {
  NEWEST = "Newest",
  OLDEST = "Oldest",
  NAME = "Name",
  LOCATION_COUNT = "Location Count",
}

export interface TripSort {
  type: TripSortType;
  label: string;
}

export const TRIP_SORTS: TripSort[] = [
  { type: TripSortType.NEWEST, label: "Newest" },
  { type: TripSortType.OLDEST, label: "Oldest" },
  { type: TripSortType.NAME, label: "Name" },
  { type: TripSortType.LOCATION_COUNT, label: "Location Count" },
];
