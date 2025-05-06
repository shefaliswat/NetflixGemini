import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tmdbApioptions } from "../utils/constants.js";
import { addPopularMovies } from "../utils/movieSlice.js";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      tmdbApioptions
    );
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };
};
