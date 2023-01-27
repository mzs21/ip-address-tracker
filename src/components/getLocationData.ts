import axios, { AxiosResponse } from "axios";

const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
  import.meta.env.VITE_API_KEY
}&ipAddress=8.8.8.8`;

const getLocationData = async () => {
  const res: AxiosResponse<any, any> = await axios.get(URL);
  return res.data;
};

export default getLocationData;
