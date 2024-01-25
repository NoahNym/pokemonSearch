import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name'); 

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const performSearch = () => {
    onSearch(searchTerm, searchType);
  };

  return (
    <div>
      <div className="search-container">
        <input
          className=' rounded-tl-xl rounded-bl-xl p-2'
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search pokemon"
        />
        <select value={searchType} onChange={handleSearchTypeChange} className='p-2'>
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
        <button onClick={performSearch} className='bg-white p-2 rounded-tr-xl rounded-br-xl'><b>Search</b> </button>
      </div>
    </div>
  );
}

export default Search;
