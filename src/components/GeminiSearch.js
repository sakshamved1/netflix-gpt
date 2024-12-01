import React from "react";
import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestion from "./GeminiMovieSuggestion";
import { Back_image } from "../utils/constants";

const GeminiSearch = () => {
  return (
    <>
      <div className="fixed w-full -z-10">
        <img
          className="relative h-screen bg-cover bg-center bg-no-repeat object-cover  md:w-full"
          src={Back_image}
          alt="Background-image"
        />
      </div>
      <div className="">
        <GeminiSearchBar />
        <GeminiMovieSuggestion />
      </div>
    </>
  );
};

export default GeminiSearch;
