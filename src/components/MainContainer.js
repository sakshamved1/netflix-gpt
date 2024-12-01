import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // (movies);
  
  

  if (!movies) return <h1>Loading.......</h1>; //Also known as early return

  

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  
  

  return (
    <div className="bg-black pt-[30%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};







export default MainContainer;
