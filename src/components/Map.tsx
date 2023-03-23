import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import getLocationData from "../utilities/getLocationData";
import { ICoordsProps } from "../utilities/interface";
import MarkerCoords from "./MarkerCoords";

const Map = () => {
  const { data } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocationData(),
  });

  let coords: ICoordsProps;

  if (data) {
    let latitude: number = data.location.lat;
    let longitude: number = data.location.lng;
    coords = [latitude, longitude];
  }

  return (
    <>
      {data ? (
        <MapContainer
          center={coords}
          zoom={13}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerCoords coords={coords} />
        </MapContainer>
      ) : null}
    </>
  );
};

export default Map;
