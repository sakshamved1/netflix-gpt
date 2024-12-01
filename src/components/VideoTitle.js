import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen mx-4 md:mx-0  py-4 aspect-video pt-[20%] md:px-24 absolute text-white md:bg-gradient-to-r from-black">
      <h1 className="mt-2 text-2xl font-bold md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-3/12">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black  px-2 md:p-4 md:px-12 text-sm md:text-lg rounded-lg hover:bg-opacity-40">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 text-center text-white p-4 px-12 text-lg mx-6 rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
