import { ICardProps } from "../utilities/interface";

const Card = ({ title, information }: ICardProps) => {
  return (
    <div className="card ">
      <h3>{title}</h3>
      <h2>{information}</h2>
    </div>
  );
};

export default Card;
