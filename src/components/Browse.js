import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import SecondryContainer from "./SecondryContainer";
import MainContainer from "./MainContainer.js"
import useTrendingMovies from "../Hooks/useTrendingMovies.js";
import usePopularMovies from "../Hooks/usePopularMovies.js";


const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      {/* <VideoTitle/> */}
      {/* <VideoBackground /> */}
      <SecondryContainer />

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
