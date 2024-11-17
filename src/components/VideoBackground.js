import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  // Selected  trailer video from store
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  // useMovieTrailer Hook : Fetch Trailer video & updating the Store with Trailer Video Data
  useMovieTrailer(movieId);

  return (
    <div className="w-screen ">
      <iframe
      className="w-screen aspect-video"
        
        // src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay&mute=1"}
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
