import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  return (
    <form>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border rounded border-gray-400 focus:bg-[#C8F9C6] focus:outline-0"
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
