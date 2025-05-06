import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    searchMovieNames: null,
    searchMovieResults: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return { ...state, nowPlayingMovies: action.payload };
    },
    addPopularMovies: (state, action) => {
      return { ...state, popularMovies: action.payload };
    },
    addUpcomingMovies: (state, action) => {
      return { ...state, upcomingMovies: action.payload };
    },
    addTopRatedMovies: (state, action) => {
      return { ...state, topRatedMovies: action.payload };
    },
    addTrailerVideo: (state, action) => {
      return { ...state, trailerVideo: action.payload };
    },
    addSearchMovieNames: (state, action) => {
      return { ...state, searchMovieNames: action.payload };
    },
    addSearchMovieResults: (state, action) => {
      return { ...state, searchMovieResults: action.payload };
    },
    resetSearchMovies: (state) => {
      return {...state, searchMovieNames: null, searchMovieResults: null }
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopRatedMovies, addSearchMovieNames, addSearchMovieResults, resetSearchMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
