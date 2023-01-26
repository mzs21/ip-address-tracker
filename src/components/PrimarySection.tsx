import Cards from "./Cards";
import Headline from "./Headline";
import SearchBar from "./SearchBar";

const PrimarySection = () => {
  return (
    <section className="primary-section">
      <Headline />
      <SearchBar />
      <Cards />
    </section>
  );
};

export default PrimarySection;
