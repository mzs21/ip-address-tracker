import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import getLocationData from "./getLocationData";
Card;
const Cards = () => {
  const { data } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocationData(),
  });

  // console.log(data);

  return (
    <div className="cards ">
      {data ? (
        <>
          <Card title={"IP Address"} information={data.ip} />
          <Card
            title={"Location"}
            information={`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}
          />
          <Card
            title={"timezone"}
            information={`UTC ${data.location.timezone}`}
          />
          <Card title={"isp"} information={`${data.isp}`} />
        </>
      ) : null}
    </div>
  );
};

export default Cards;
