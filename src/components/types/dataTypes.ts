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
