export interface Anime {
  title: string;
  tags: string[];
  locationCount: number;
  imageUrl?: string;
}

export interface Location {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  latitude: number;
  longitude: number;
}

export interface Trip {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
  collaborators: number;
  anime: Anime[];
  locations: Location[];
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

export const TEMP_ANIME: Anime[] = [
  {
    title: "Summer Pocket",
    tags: ["Slice of Life", "Romance"],
    locationCount: 12,
  },
  {
    title: "Girls Band Cry",
    tags: ["Music", "Drama"],
    locationCount: 52,
  },
  {
    title: "BanG Dream! It's MyGO!!!!!",
    tags: ["Music", "Drama"],
    locationCount: 30,
  },
  {
    title: "Steins;Gate",
    tags: ["Sci-Fi", "Thriller"],
    locationCount: 42,
  },
];

export const TEMP_LOCATIONS: Location[] = [
  {
    id: 1,
    name: "Tokyo Tower",
    description: "A famous tower in Tokyo",
    latitude: 35.6586,
    longitude: 139.7454,
  },
  {
    id: 2,
    name: "Akihabara",
    description: "A district in Tokyo known for electronics and anime",
    latitude: 35.7023,
    longitude: 139.7745,
  },
  {
    id: 3,
    name: "Shibuya Crossing",
    description: "A famous intersection in Tokyo",
    latitude: 35.6618,
    longitude: 139.7041,
  },
];

export const TEMP_TRIPS: Trip[] = [
  {
    id: 1,
    title: "Tokyo Anime Tour",
    description: "A trip to Tokyo to visit anime locations",
    startDate: new Date("2022-10-10"),
    endDate: new Date("2022-10-20"),
    locations: TEMP_LOCATIONS,
    anime: TEMP_ANIME,
    collaborators: 3,
  },
  {
    id: 2,
    title: "Kyoto Anime Tour",
    description: "A trip to Kyoto to visit anime locations",
    startDate: new Date("2022-11-10"),
    endDate: new Date("2022-11-20"),
    locations: TEMP_LOCATIONS.concat(TEMP_LOCATIONS),
    anime: TEMP_ANIME.concat(TEMP_ANIME).concat(TEMP_ANIME),
    collaborators: 1,
  },
  {
    id: 3,
    title: "Osaka Anime Tour",
    description: "A trip to Osaka to visit anime locations",
    startDate: new Date("2022-12-10"),
    endDate: new Date("2022-12-20"),
    locations: TEMP_LOCATIONS.concat(TEMP_LOCATIONS).concat(TEMP_LOCATIONS),
    anime: TEMP_ANIME.concat(TEMP_ANIME),
    collaborators: 10,
  },
];
