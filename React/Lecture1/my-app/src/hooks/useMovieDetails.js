import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import useToggle from "./useToggle";
import { getMovieDetails } from "../api/movie";
import { LangContext, ThemeContext } from "../App";
export default function useMovieDetails(){

    const params = useParams();
    const [isLoading,setIsLoading] = useToggle(true);
    const [movieData, setMovieData] = useState(null);
    const movieId = params.movieId;


    const value = useContext(LangContext);
    const {theme} = useContext(ThemeContext);
    console.log(theme);


    const  fetchMovieDetails = async ()=>{
        const movieDetails = await getMovieDetails(movieId);
        setIsLoading(false);
        setMovieData(movieDetails);
    }

    useEffect(()=>{
        fetchMovieDetails();
    },[]);

    return {isLoading, theme, movieData, movieId};

}
