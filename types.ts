export interface EventItem {
  id: number;
  date: string;
  venue: string;
  city: string;
  link: string;
}

export interface MixItem {
  id: number;
  title: string;
  date: string;
  genres: string[];
  duration: string;
}

export type ViewState = 'landing' | 'branding' | 'domains';