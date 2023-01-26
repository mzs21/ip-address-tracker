interface CardProps {
  title: string;
  information: string;
}

const Card = ({ title, information }: CardProps) => {
  return (
    <div className="card ">
      <h3>{title}</h3>
      <h2>{information}</h2>
    </div>
  );
};

export default Card;
