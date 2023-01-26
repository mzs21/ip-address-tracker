import BGImage from "../assets/images/pattern-bg.png";
const BackgroundImage = () => {
  return (
    <div className="absolute">
      <img src={BGImage} className="bg-image" />
    </div>
  );
};

export default BackgroundImage;
