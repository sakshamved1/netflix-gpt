import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {


  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch(null);
  

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //Make an api call to GPT API and get Movie Results
    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the Query : " + searchText.current.value + "Only Give me name of 5 Movies,comma Seprated like the example results Given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    
    if(!gptResults.choices) {
      //TODO:  Write Error handling
    }
    
    console.log(gptResults.choices[0].message.content);

    // Chupke Chupke, Padosan, Amar Akbar Anthony, Chhupke Chhupke, Hera Pheri
    // const gptMovies = gptResults.choices?.[0].message?.content.split(",") //Return GPTMovies array

    const gptMovies = ["Chupke Chupke", "Padosan", "Amar Akbar Anthony", "Chhupke Chhupke", "Hera Pheri"]

    // ["Chupke Chupke", "Padosan", "Amar Akbar Anthony", "Chhupke Chhupke", "Hera Pheri"]

    // for Each movie i will search in TMDB API

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    // [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray)

    
    console.log(tmdbResults);


    dispatch(addGptMovieResults({movieNames: tmdbResults, movieResults: tmdbResults})); //Passed an Object of Actions
    

  };


  //Search movie in TMDB 

  const searchMovieTMDB = async (movie) => {

    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json  = data.json();

    console.log(json.results);


    return json.results;
    

  }





  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
