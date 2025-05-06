import React from "react";
import { useSelector } from "react-redux";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies == null) return; //early return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie || {};

  return (
    <div className="main-container md:pt-0 pt-25 md:bg-none bg-black">
      <VideoBackground id={id}>
        <VideoTitle title={original_title} overview={overview} />
      </VideoBackground>
    </div>
  );
};
