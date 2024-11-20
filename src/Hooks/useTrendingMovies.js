import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {

    //fetch the trending movies from TMDB api
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data  = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS)

        const json = await data.json();


        dispatch(addTrendingMovies(json.results));
       
        
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])
}


export default useTrendingMovies;