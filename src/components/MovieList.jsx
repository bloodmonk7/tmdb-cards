import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Switcher from './Switcher';

const MovieList = ({searchInput, setSearchInput}) => {
  const [data, setData] = useState([]);
  const MY_KEY = import.meta.env.VITE_API_KEY;
  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const [hasSearchResults, setHasSearchResults] = useState(false);

  useEffect(() => {
    let url;
    if (searchInput) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&query=${searchInput}`;
    } else {
      url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${MY_KEY}`;
    }
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setHasSearchResults(searchInput && data.results.length > 0); // Check if there are search results
      })
      .catch((e) => {
        console.error('Error: ', e);
      });
  }, [searchInput]);  

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-800">
      <header className="bg-gray-800 dark:bg-gray-950 dark:text-gray-300 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-center flex-grow">
            {hasSearchResults ? 'Search Results(All)' : 'Trending Movies Today'}
          </h1>
          <div className="flex items-center space-x-4">
            <Switcher />
          </div>
        </div>
      </header>
      <div className="container mx-auto py-8 flex flex-col items-center">
        <input
          className="w-full max-w-md p-2 border dark:bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 mb-4"
          type="search"
          placeholder="Search all movies..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchInput === '' ? (
          data.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-gray-600 text-center text-xl mb-4">
            Uh oh! No results found ☹️
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
