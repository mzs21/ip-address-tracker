import { LatLngExpression } from "leaflet";

export interface ICoordsProps {
  coords: LatLngExpression;
}

export interface ICardDataProps {
  id: number;
  title: string;
  information: string;
}

export interface ICardProps {
  title: string;
  information: string;
}
