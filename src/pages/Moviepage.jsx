import React from "react";
import useFetch from "../hooks/useFetch";
import Search from "../components/Search";

const Moviepage = () => {
  const movie = useFetch();
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
      <Search />
    </div>
  );
};

export default Moviepage;
