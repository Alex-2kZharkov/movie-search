import { useState } from "react";

const SearchMovie = ({}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-box">
      <input
        className="search-field"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search"
      />
    </div>
  );
};

export default SearchMovie;
