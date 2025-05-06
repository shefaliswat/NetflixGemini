import React from "react";
import { useSearchMovies } from "../hooks/useSearchMovie";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const GptSearchSuggestions = () => {
  // useSearchMovies();
  const { searchMovieNames, searchMovieResults } = useSelector(
    (store) => store.movies
  );

  if (!searchMovieNames || !searchMovieResults) return null;
  return (
    <div className="p-4 bg-black relative">
      {searchMovieNames.map((movie, id) => {
        return (
          <MovieList
            key={movie}
            title={movie}
            movies={searchMovieResults[id]}
          />
        );
      })}
    </div>
  );
};
