import React from 'react';

function Search({ searchQuery, onSearchChange }) {
  const handleInputChange = (e) => {
    const query = e.target.value;
    onSearchChange(query);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
