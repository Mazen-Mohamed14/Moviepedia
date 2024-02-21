import React, { useState } from "react";

const Search = () => {
  const [movie, setMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) return;

    fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=803c7771&`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen h-full bg-gray-900 text-white content-center">
      {movie && movie.Title && (
        <div className="flex flex-col items-center gap-8 mx-16 lg:flex-row">
          <img
            src={`${movie.Poster}`}
            alt="movie-img"
            className="glassomorph-container"
          />
          <div className="glassomorph-container flex flex-col gap-4">
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>IMDB Rating: {movie.imdbRating}</p>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
            <p>Box Office: {movie.BoxOffice}</p>
          </div>
        </div>
      )}
      {!movie?.Title && (
        <h1 className="text-2xl sm:text-8xl font-bold text-orange-500 mb-10">
          Movie<span className="text-slate-300">Pedia</span>
        </h1>
      )}
      <form onSubmit={handleFormSubmit} className="flex items-center mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter movie title..."
          className="px-4 py-2 border rounded-l-md focus:outline-none  h-full text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-700 text-white font-semibold rounded-r-md hover:bg-orange-500 h-full focus:outline-none "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
