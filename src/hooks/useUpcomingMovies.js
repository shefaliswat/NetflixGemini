import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tmdbApioptions } from "../utils/constants.js";
import { addUpcomingMovies } from "../utils/movieSlice.js";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      tmdbApioptions
    );
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };
};
