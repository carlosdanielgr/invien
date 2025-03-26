import { Filter } from './general.interface';

export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  price_usd: string;
  price_mxn: string;
  amenities: string[];
  url_video: string;
  url_map: string;
  location: string;
  country: Filter;
  state: Filter;
  town: Filter;
  type: Filter;
}
