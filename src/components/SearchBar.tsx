import SubmitArrow from '../assets/images/icon-arrow.svg';

const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        name="ipAddress"
        id="ipAddress"
        placeholder="Search for any IP Address or Domain"
        required
      />
      <button type="submit" >
        <img src={SubmitArrow} />
      </button>
    </form>
  );
};

export default SearchBar;
