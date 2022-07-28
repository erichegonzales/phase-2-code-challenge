import React from "react";

function SearchBar({ onSearch, onSort }) {
  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  const handleClick = (e) => {
    onSort(e.target.checked)
  }  

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        onChange={handleChange}
        />
      <label htmlFor='age'>Sort By Age</label>
      <input name='age' type='checkbox' value='age' onClick={handleClick} />
    </div>
  );
}

export default SearchBar;
