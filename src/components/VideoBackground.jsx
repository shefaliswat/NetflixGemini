import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackground = ({ id, children }) => {
  useMovieTrailer(id);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="video-background">
      <iframe
        className="w-screen aspect-video mt-15 md:mt-0"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      {children}
    </div>
  );
};
