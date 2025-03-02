import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full p-2 border rounded border-gray-400"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
