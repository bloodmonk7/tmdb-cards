import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showFullOverview, setShowFullOverview] = useState(false);
  const maxOverviewLength = 150;

  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  const truncatedOverview = movie.overview.slice(0, maxOverviewLength);

  return (
    <div className="bg-white dark:bg-gray-300 rounded-lg shadow-lg p-4 group hover:shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute top-2 right-2">
          <button
            className="bg-gray-800 text-white px-2 py-1 rounded-lg hover:bg-gray-600"
            onClick={toggleOverview}
          >
            {showFullOverview ? 'Less' : 'More'}
          </button>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-4 dark:text-gray-600">{movie.title}</h2>
      <p className="text-gray-600 text-sm">Release Date: {movie.release_date}</p>
      <div className="mt-2 dark:text-gray-600">
        {showFullOverview ? (
          <p>{movie.overview}</p>
        ) : (
          <p>{truncatedOverview}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
