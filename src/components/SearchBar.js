import React from "react";

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        onChange={handleChange}
        />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
