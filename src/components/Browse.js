import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import SecondryContainer from "./SecondryContainer";
import MainContainer from "./MainContainer.js";
import useTrendingMovies from "../Hooks/useTrendingMovies.js";
import usePopularMovies from "../Hooks/usePopularMovies.js";
import GptSearch from "./GptSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch />: <> <MainContainer /> <SecondryContainer /></> }

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
