import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title pt-30 px-10 absolute top-10 text-white w-screen md:aspect-video md:bg-gradient-to-b md:from-black">
      <h1 className="font-bold text-3xl my-2">{title}</h1>
      <p className="md:w-1/4 md:text-center">{overview}</p>
      <div className="flex my-10 hidden md:block">
        <button className="cursor-pointer px-7 py-2 mr-2 bg-white text-black rounded-lg hover:bg-opacity-80">
          <svg
            aria-hidden="true"
            className="inline mr-1"
            width="17"
            height="18"
            viewBox="0 0 17 18"
          >
            <path d="M3 2.87a1 1 0 0 1 1.55-.83l9.2 6.13a1 1 0 0 1 0 1.66l-9.2 6.13A1 1 0 0 1 3 15.13z"></path>
          </svg>
          Play
        </button>
        <button className="cursor-pointer px-7 py-2 bg-gray-500 text-white rounded-lg bg-opacity-70">
          More info
        </button>
      </div>
    </div>
  );
};
