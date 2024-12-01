import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResults } from "../utils/geminiSlice";
import { googleGemini } from "../utils/googleGemini";

const GeminiSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch(null);
  const handleGeminiSearchClick = async () => {
    // console.log(searchText.current.value);

    const geminiQuery =
      "Act as a Movie Recommendation System and suggest some movies for the Query : " +
      searchText.current.value +
      "Only Give me name of 5 Movies,comma Seprated like the example results Given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gaya";

    const result = await googleGemini.generateContent(geminiQuery);

    // console.log(result.response.text());

    const geminiMovies = result.response.text().split(","); //Got Movie names from Gemini

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray); //Got searched Movies from TMDB API

    console.log(tmdbResults);

    dispatch(
      addGeminiMovieResults({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    console.log(json.results);

    return json.results;
  };



  return (
    <div className=" pt-[85%] md:pt-[20%] flex justify-center">
      <form
        className="mx-4 md:w-1/2 bg-black grid grid-cols-12 rounded-lg w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langkey].GeminiSearchPlaceHolder}
        />
        <button
          onClick={handleGeminiSearchClick}
          className="py-2 md:px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
