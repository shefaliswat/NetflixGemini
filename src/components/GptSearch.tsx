import React, { useEffect } from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptSearchSuggestions } from "./GptSearchSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { resetSearchMovies } from "../utils/movieSlice";

export const GptSearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => resetSearchMovieResults();
  }, []);

  const resetSearchMovieResults = () => {
    dispatch(resetSearchMovies());
  };

  return (
    <div className="text-black">
      <div className="absolute">
        <img alt="logo" className="h-screen object-cover" src={BACKGROUND_IMAGE} />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};
