import { createContext, useState } from "react";
import Cards from "./Cards";
import Headline from "./Headline";
import Map from "./Map";
import SearchBar from "./SearchBar";

export let InputContext = createContext("");

const Main = () => {
  const [ipAddress, setIpAddress] = useState<string>("");

  return (
    <>
      <InputContext.Provider value={ipAddress}>
        <section>
          <Headline />
          <SearchBar />
          <Cards />
        </section>
        <Map />
      </InputContext.Provider>
    </>
  );
};

export default Main;
