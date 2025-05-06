import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tmdbApioptions } from "../utils/constants.js";
import { addSearchMovieResults } from "../utils/movieSlice.js";

export const useSearchMovies = (MO) => {
  const dispatch = useDispatch();

  useEffect(() => {
    searchMovieResults();
  }, []);

  const searchMovieResults = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/${movie}?include_adult=false&language=en-US&page=1`,
      tmdbApioptions
    );
    const json = await data.json();
    dispatch(addSearchMovieResults(json.results));
  };
};
