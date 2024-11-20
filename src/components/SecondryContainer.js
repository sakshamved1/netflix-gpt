import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    /*
    {
        movieList - popular
          - movieCards * n
        movieList - Trending
        movieList -  nowPlaying
        movieList - Horror
    }
    */

    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-36 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
