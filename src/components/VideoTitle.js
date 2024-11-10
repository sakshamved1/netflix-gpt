import React from "react";

const VideoTitle = ({ title, overview }) => {
  

  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-5/12">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-40">
          ▶ Play
        </button>
        <button className="bg-gray-600 text-center text-white p-4 px-12 text-lg mx-6 rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
