import { Advisor } from './advisor.interface';
import { Filter } from './general.interface';

export interface Property {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: string;
  currency: string;
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
  is_for: string;
  advisor?: Advisor;
  advisorId: string;
  country: Filter;
  state: Filter;
  town: Filter;
  type: Filter;
}
