import axios, { AxiosResponse } from "axios";

const getLocationData = async (ipAddress: string) => {
  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    import.meta.env.VITE_API_KEY
  }&ipAddress=${ipAddress}`;

  const res: AxiosResponse<any, any> = await axios.get(URL);
  return res.data;
};

export default getLocationData;
