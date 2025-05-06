import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tmdbApioptions } from "../utils/constants.js";
import { addTopRatedMovies } from "../utils/movieSlice.js";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      tmdbApioptions
    );
    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };
};
