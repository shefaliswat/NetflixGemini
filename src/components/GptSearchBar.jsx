import React, { useState, useRef } from "react";
import { LANGUAGES } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { ai } from "../utils/googleGenAI";
import { tmdbApioptions } from "../utils/constants";
import { addSearchMovieNames, addSearchMovieResults } from "../utils/movieSlice";

export const GptSearchBar = () => {
  const dispatch = useDispatch();  
  const gpt = useSelector((store) => store.gpt);
  const movies = useSelector((store) => store.movie);
  const [errorMessage, setErrorMessage] = useState("");
  const searchText = useRef("");

  const searchMovieInTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      tmdbApioptions
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    //Get movie results from GPT API
    const aiQuery =
      "Act as a movie recommendation system and suggest some good movies for the query : " +
      searchText.current.value +
      ".Give me top 5 movies from the list, comma separated, wrapped in square brackets like the example given ahead. Example Result: [Gadar, Sholay, Don, Padosan, Golmaal]";
    const results = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: aiQuery,
    });
    if (!results || !results.text) {
      setErrorMessage("Unable to fetch results, please try again later.");
      return;
    }
    setErrorMessage("");
    const startIndex = results.text.indexOf("[");
    const endIndex = results.text.indexOf("]");
    const movies = results.text
      .substring(Number(startIndex) + 1, Number(endIndex))
      .split(",");
    dispatch(addSearchMovieNames(movies.map(m => m.trim())));
    
    const moviesData = movies.map((m) => searchMovieInTmdb(m.trim())); //returns array of Promises
    const response = await Promise.all(moviesData);
    dispatch(addSearchMovieResults(response));
  };

  return (
    <div className="relative p-6 flex justify-center">
      <form
        className="w-screen md:w-1/2 bg-black grid grid-cols-12 mt-40 md:mt-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 m-2 bg-white text-black col-span-12 md:col-span-9"
          placeholder={LANGUAGES[gpt?.gptSearchLanguage]?.placeholder}
          type="text"
          ref={searchText}
        />
        <button
          className="col-span-12 md:col-span-3 bg-red-700 text-white m-2 rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {LANGUAGES[gpt?.gptSearchLanguage]?.search}
        </button>
      </form>
      {errorMessage && <p className="text-red font-bold">{errorMessage}</p>}
    </div>
  );
};
