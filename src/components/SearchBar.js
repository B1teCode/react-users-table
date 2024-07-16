import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={query}
      onChange={handleInputChange}
    className='searchBar'/>
  );
};

export default SearchBar;
