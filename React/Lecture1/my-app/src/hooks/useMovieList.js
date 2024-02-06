import { useContext, useEffect, useState } from "react";
import useToggle from "./useToggle";
import { getAllMovies } from "../api/movie";
import { ThemeContext } from "../App";

    
var moviesData=[];

export default function useMovieList(){


    const  [movieDetails, setMovieDetails] =  useState([]);
    const [isLoading, setIsLoading] = useToggle(true);
    const [isLoggedIn , setIsLoggedIn] =  useState(true);
    const {theme} = useContext(ThemeContext);




    /**
     *  useEffectIsTriggered : ComponentDidMount + ComponentDidUpdate
     *  
     *    empty  dependencies : only on ComponentDidMount
     */


    const onLanguageChange=(selectedLanguage)=>{

        if(selectedLanguage==="all"){
            setMovieDetails(moviesData);
            return;
        }

        const filteredMovies = moviesData.filter((movie)=>{
            return movie.language.toLowerCase()===selectedLanguage;
        })

      setMovieDetails(filteredMovies);       
    }

    const fetchMoviesData=async ()=>{
       const movieData = await getAllMovies();
      moviesData=movieData;
      setIsLoading(false);
      setMovieDetails(movieData);
    }
    
    useEffect(()=>{
        fetchMoviesData();     
    },[]);


    // /*
    //    ComponentDidMount + everytime searchValue is updated 
    // */
    // useEffect(()=>{
    // // filter movies every time a searchValue state is changed 
    // // const filteredMovies = moviesData.filter((movie)=>{
    // //     return movie.name.toLowerCase().startsWith(searchValue);
    // // })

    // // setMovieDetails(filteredMovies);

    // },[searchValue, isLoading])


       function onMovieDelete(id){

        const filteredMovies = movieDetails.filter((movie)=>{
            return movie._id!==id;
        })

        setMovieDetails(filteredMovies);
    }


    const filterResults=(searchValue)=>{
          const filteredMovies = moviesData.filter((movie)=>{
        return movie.name.toLowerCase().startsWith(searchValue);
    })

    setMovieDetails(filteredMovies);
    }

    return {theme, filterResults, isLoading, onLanguageChange, movieDetails, onMovieDelete, isLoggedIn };
 
}
