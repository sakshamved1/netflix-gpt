import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gemini);

  if (!movieNames || movieNames.length === 0) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div>
        {movieNames.map((movieNames, index) => {
          return (
            <MovieList
              key={index}
              title={movieNames}
              movies={movieResults[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeminiMovieSuggestion;
