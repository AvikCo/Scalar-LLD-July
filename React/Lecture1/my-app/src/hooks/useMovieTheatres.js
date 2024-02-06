import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useToggle from "./useToggle";
import { getMovieDetails } from "../api/movie";
import {getTheatresForAMovie} from "../api/theatre"

export default function useMovieTheatresHook(){

    const params = useParams();

    const [isLoading,setIsLoading] = useToggle(true);

    const [theatreDetails, setTheatreDetails] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const movieId = params.movieId;


    const fetchData = async ()=>{

    const [theatres, movieData] = await Promise.all([getTheatresForAMovie(movieId), getMovieDetails(movieId)]);

      setTheatreDetails(theatres);
      setMovieDetails(movieData);
      setIsLoading(false);
    }


    useEffect(()=>{
        fetchData();
    },[])


    return {isLoading, movieDetails, theatreDetails, movieId};
    

}