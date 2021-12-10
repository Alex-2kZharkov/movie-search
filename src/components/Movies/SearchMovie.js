const SearchMovie = ({ value, handler }) => {
  return (
    <div className="search-box">
      <input
        className="search-field"
        value={value}
        onChange={handler}
        placeholder="Type to search"
      />
    </div>
  );
};

export default SearchMovie;
