import { useQuery } from "@tanstack/react-query";
import getLocationData from "../utilities/getLocationData";
import { ICardDataProps } from "../utilities/interface";
import Card from "./Card";

const Cards = () => {
  const { data } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocationData(),
  });

  let ipAddress: string = data?.ip;
  let city: string = data?.location.city;
  let region: string = data?.location.region;
  let postalCode: string = data?.location.postalCode;
  let timezone: string = data?.location.timezone;
  let isp: string = data?.isp;

  const cardDataArr: ICardDataProps[] = [
    { id: 1, title: "IP Address", information: ipAddress },
    {
      id: 2,
      title: "Location",
      information: `${city}, ${region} ${postalCode}`,
    },
    {
      id: 3,
      title: "timezone",
      information: `UTC ${timezone}`,
    },
    {
      id: 4,
      title: "isp",
      information: isp,
    },
  ];

  return (
    <div className="cards ">
      {data
        ? cardDataArr.map((cardData: ICardDataProps) => (
            <Card
              title={cardData.title}
              information={cardData.information}
              key={cardData.id}
            />
          ))
        : null}
    </div>
  );
};

export default Cards;
