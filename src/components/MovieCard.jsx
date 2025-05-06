import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

export const MovieCard = ({ movieData }) => {
  return (
    <div>
      <div className="p-1">
        <img
        className="max-w-none w-35"
          alt="Movie Poster"
          src={IMG_CDN_URL + movieData.poster_path}
        />
      </div>
    </div>
  );
};
