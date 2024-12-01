import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import SecondryContainer from "./SecondryContainer";
import MainContainer from "./MainContainer.js";
import useTrendingMovies from "../Hooks/useTrendingMovies.js";
import usePopularMovies from "../Hooks/usePopularMovies.js";
import GeminiSearch from "./GeminiSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);

  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGeminiSearch ? <GeminiSearch />: <> <MainContainer /> <SecondryContainer /></> }

      {/*
    - Main container
      - videoBackground
      - videoTitle

    - Secondry container
      - Movielist * n
        - Cards * n



     */}
    </div>
  );
};

export default Browse;
