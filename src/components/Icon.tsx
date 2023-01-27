import L from "leaflet";
import Icon from "../assets/images/icon-location.svg";

export default L.icon({
  iconUrl: Icon,
  iconSize: [32, 40],
  iconAnchor: [20, 30],
  popupAnchor: [2, -40],
});
