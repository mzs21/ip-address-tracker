import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Icon from "./Icon";
import getLocationData from "./getLocationData";

const Map = () => {
  const position = [0, 0];
  const { data } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocationData(),
  });

  console.log(data);

  const coords:number[] = [data?.location.lat, data?.location.lng];

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
          <Marker icon={Icon} position={coords}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </>
  );
};

export default Map;
