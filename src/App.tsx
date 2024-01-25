import React, { useState, useEffect } from 'react';
import GetPokemon from './components/Pokemon/GetPokemon';
import Search from './components/Pokemon/Search';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [searchType, setSearchType] = useState('name'); // Default search type is 'name'

  async function fetchPokemon(searchTerm, searchType) {
    let apiUrl = '';

    if (searchType === 'name') {
      apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    } else if (searchType === 'id') {
      const id = parseInt(searchTerm, 10);
      apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    }

    const res = await fetch(apiUrl);
    const data = await res.json();
    setPokemon(data);
  }

  useEffect(() => {
    if (searchedPokemon !== '') {
      fetchPokemon(searchedPokemon, searchType);
    }
  }, [searchedPokemon, searchType]);

  const handleSearch = (searchTerm, searchType) => {
    setSearchedPokemon(searchTerm);
    setSearchType(searchType);
  };

  return (
    <div className="w-full h-screen bg-red-100 justify-center flex flex-col items-center space-y-5">
      <GetPokemon data={pokemon} />
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
