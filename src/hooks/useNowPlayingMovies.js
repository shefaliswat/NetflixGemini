import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tmdbApioptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice.js";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      tmdbApioptions
    );
    const response = await data.json();
    dispatch(addNowPlayingMovies(response.results));
  };
};
