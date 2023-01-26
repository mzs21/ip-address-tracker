import Card from "./Card";

Card;
const Cards = () => {
  return (
    <div className="cards ">
      <Card title={"IP Address"} information={"8.8.8.8"} />
      <Card title={"Location"} information={"Brooklyn, NY 92435"} />
      <Card title={"timezone"} information={"UTC -5.00"} />
      <Card title={"isp"} information={"Google LLC"} />
    </div>
  );
};

export default Cards;
