import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search for a food"
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;