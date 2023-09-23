import { useState } from "react";
import Movie from "../Movie/Movie";
import movieData from "./MovieData";
import "./MovieList.css";

function MovieList(){

    const  [movieDetails, setMovieDetails] =  useState(movieData);

       function onMovieDelete(id){

        const filteredMovies = movieDetails.filter((movie)=>{
            return movie._id!==id;
        })

        setMovieDetails(filteredMovies);
    }

    console.log("Rendering Movie List Compoent with movieDetails:",movieDetails);

    function onInputChange(e){

        const searchValue = e.target.value;

        const filteredMovies = movieData.filter((movie)=>{
           return movie.name.toLowerCase().startsWith(searchValue.toLowerCase());
        })
        console.log("updating the movie details state")
         setMovieDetails(filteredMovies);
    }

    return  <div className="movieListContainer">

        <input onChange={onInputChange} type="text" placeholder="movieName"/>
 <div className="movieList" >
        {
            movieDetails.map((movie)=>{
                return <Movie key={movie._id} onDelete={onMovieDelete} movieDetails={movie} />
            })

        }

        </div>
    </div>
}


export default MovieList;