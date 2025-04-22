export interface User {
  id: string;
  username: string;
  email: string;
  imageUrl?: string;
}

export interface Anime {
  title: string;
  tags: string[];
  locationCount: number;
  imageUrl: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  latitude: number;
  longitude: number;
}

export interface Trip {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  lastModifiedDate: Date;
  imageUrl?: string;
  isFavorite: boolean;
  tripOwner: User;
  collaborators: number;
  anime: Anime[];
  locations: Location[];
}

export enum TripFilterType {
  UPCOMING = "Upcoming",
  ALL = "All",
  MY_TRIPS = "My Trips",
  SHARED = "Shared",
  FAVORITES = "Favorites",
}

export interface TripFilter {
  type: TripFilterType;
  label: string;
}

export const TRIP_FILTERS: TripFilter[] = [
  { type: TripFilterType.UPCOMING, label: "Upcoming" },
  { type: TripFilterType.MY_TRIPS, label: "My Trips" },
  { type: TripFilterType.FAVORITES, label: "Favorites" },
  { type: TripFilterType.SHARED, label: "Shared with me" },
  { type: TripFilterType.ALL, label: "All" },
];

export enum TripSortType {
  NEWEST = "Newest",
  OLDEST = "Oldest",
  NAME = "Name",
  LAST_MODIFIED = "Last Modified",
  LOCATION_COUNT = "Location Count",
}

export interface TripSort {
  type: TripSortType;
  label: string;
}

export const TRIP_SORTS: TripSort[] = [
  { type: TripSortType.NEWEST, label: "Newest" },
  { type: TripSortType.OLDEST, label: "Oldest" },
  { type: TripSortType.LAST_MODIFIED, label: "Last Modified" },
  { type: TripSortType.NAME, label: "Name" },
  { type: TripSortType.LOCATION_COUNT, label: "Location Count" },
];

export enum DiscoverFilterType {
  ANIME = "Anime",
  LOCATION = "Location",
  TRIP = "Trip",
}

export interface DiscoverFilter {
  type: DiscoverFilterType;
  label: string;
}

export const DISCOVER_FILTERS: DiscoverFilter[] = [
  { type: DiscoverFilterType.ANIME, label: "Anime" },
  { type: DiscoverFilterType.LOCATION, label: "Location" },
  { type: DiscoverFilterType.TRIP, label: "Trip" },
];

export enum DiscoverSortType {
  RELEVANCE = "Relevance",
  POPULARITY = "Popularity",
  NEWEST = "Newest",
}

export interface DiscoverSort {
  type: DiscoverSortType;
  label: string;
}

export const DISCOVER_SORTS: DiscoverSort[] = [
  { type: DiscoverSortType.RELEVANCE, label: "Relevance" },
  { type: DiscoverSortType.POPULARITY, label: "Popularity" },
  { type: DiscoverSortType.NEWEST, label: "Newest" },
];

export const TEMP_USER_A: User = {
  id: "1",
  username: "User",
  email: "abc@mail.com",
};

export const TEMP_USER_B: User = {
  id: "2",
  username: "User2",
  email: "def@cornell.edu",
};

export const TEMP_ANIME: Anime[] = [
  {
    title: "Summer Pocket",
    tags: ["Slice of Life", "Romance"],
    locationCount: 12,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Summer_Pockets_game_cover.jpg",
  },
  {
    title: "Girls Band Cry",
    tags: ["Music", "Drama"],
    locationCount: 52,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Girls_Band_Cry_key_visual.jpg",
  },
  {
    title: "BanG Dream! It's MyGO!!!!!",
    tags: ["Music", "Drama"],
    locationCount: 30,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Girls_Band_Cry_key_visual.jpg",
  },
  {
    title: "Steins;Gate",
    tags: ["Sci-Fi", "Thriller"],
    locationCount: 42,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg",
  },
];

export const TEMP_LOCATIONS: Location[] = [
  {
    id: "1",
    name: "Tokyo Tower",
    description: "A famous tower in Tokyo",
    latitude: 35.6586,
    longitude: 139.7454,
  },
  {
    id: "2",
    name: "Akihabara",
    description: "A district in Tokyo known for electronics and anime",
    latitude: 35.7023,
    longitude: 139.7745,
  },
  {
    id: "3",
    name: "Shibuya Crossing",
    description: "A famous intersection in Tokyo",
    latitude: 35.6618,
    longitude: 139.7041,
  },
];

export const TEMP_TRIPS: Trip[] = [
  {
    id: "1",
    title: "Tokyo Anime Tour",
    description: "A trip to Tokyo to visit anime locations",
    startDate: new Date("2022-10-10"),
    endDate: new Date("2022-10-20"),
    lastModifiedDate: new Date("2022-10-01"),
    isFavorite: true,
    tripOwner: TEMP_USER_A,
    locations: TEMP_LOCATIONS,
    anime: TEMP_ANIME,
    collaborators: 3,
  },
  {
    id: "2",
    title: "Kyoto Anime Tour",
    description: "A trip to Kyoto to visit anime locations",
    startDate: new Date("2026-11-10"),
    endDate: new Date("2026-11-20"),
    lastModifiedDate: new Date("2022-11-01"),
    isFavorite: true,
    tripOwner: TEMP_USER_B,
    locations: TEMP_LOCATIONS.concat(TEMP_LOCATIONS),
    anime: TEMP_ANIME.concat(TEMP_ANIME).concat(TEMP_ANIME),
    collaborators: 1,
  },
  {
    id: "3",
    title: "Osaka Anime Tour",
    description: "A trip to Osaka to visit anime locations",
    startDate: new Date("2025-12-10"),
    endDate: new Date("2025-12-20"),
    lastModifiedDate: new Date("2022-12-01"),
    isFavorite: false,
    tripOwner: TEMP_USER_A,
    locations: TEMP_LOCATIONS.concat(TEMP_LOCATIONS).concat(TEMP_LOCATIONS),
    anime: TEMP_ANIME.concat(TEMP_ANIME),
    collaborators: 10,
  },
];
