import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { ICoordsProps } from "../utilities/interface";
import Icon from "./Icon";

const MarkerCoords = ({ coords }: ICoordsProps) => {
  const mapFly = useMap();

  useEffect(() => {
    mapFly.flyTo(coords, 13, { animate: true });
  }, [mapFly, coords]);

  return (
    <Marker icon={Icon} position={coords}>
      <Popup className="text-center">
        This is the <br /> location.
      </Popup>
    </Marker>
  );
};

export default MarkerCoords;
