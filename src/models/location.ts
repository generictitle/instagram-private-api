import { BaseModel } from './_base-model';
import { Type } from 'class-transformer';

export class Location extends BaseModel {
  pk: string | number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: string | number;
  @Type(() => Location)
  location_dict: Location;
}
