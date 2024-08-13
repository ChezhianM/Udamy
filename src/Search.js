import React, { useState, useRef, useEffect } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  return (
    <div className='search'>
      <input 
        type="text" 
        placeholder='Search course category...' 
        value={searchInput} 
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        
      />
    </div>
  );
};

export default Search;
