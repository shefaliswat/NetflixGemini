import { useEffect } from 'react';
import { tmdbApioptions } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

export const useMovieTrailer = (id) => {
    const dispatch = useDispatch();

     const getMovieVideos = async () => {
        if (id) {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            tmdbApioptions
          );
          const json = await data.json();
          const trailer = json.results.filter((m) => m.type == "Trailer")[0];
          dispatch(addTrailerVideo(trailer));
        }
      };
    
      useEffect(() => {
        getMovieVideos();
      }, []);
}