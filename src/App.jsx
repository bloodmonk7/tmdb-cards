import MovieList from './components/MovieList';
import React, { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      <MovieList searchInput={searchInput} setSearchInput={setSearchInput}/>
    </>
  )
}

export default App
