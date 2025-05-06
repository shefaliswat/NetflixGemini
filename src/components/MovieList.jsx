import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h2 className="text-m text-white font-bold p-1">{title}</h2>
      <div className="flex overflow-x-scroll" style={{scrollbarWidth: "none"}}>
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movieData={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};
