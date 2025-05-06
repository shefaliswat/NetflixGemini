import React from 'react';
import { MovieList } from './MovieList';
import { useSelector } from 'react-redux';

export const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    if(!movies) return null;

    return(
        <div className="secondary-container bg-black -mt-40">
            <div className="mt-40 md:-mt-50 px-6 relative z-20">
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
            <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
            <MovieList title="Popular" movies={movies?.popularMovies} />
            <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
            <MovieList title="Horror" movies={movies?.nowPlayingMovies} />
            </div>
        </div>
    )
}