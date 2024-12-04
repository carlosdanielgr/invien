import { Advisor } from './advisor.interface';

export interface Property {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: string;
  total_size: string;
  built_size: string;
  rooms: number;
  bathrooms: number;
  garage: number;
  details: string;
  amenities: string[];
  url_video: string;
  url_map: string;
  location: string;
  advisor?: Advisor;
  advisorId: string;
}
