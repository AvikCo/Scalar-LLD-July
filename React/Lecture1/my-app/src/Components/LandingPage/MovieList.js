import { useEffect, useState } from "react";
import Movie from "../../Components/Movie/Movie";
import "./MovieList.css";
import Spinner from "react-bootstrap/esm/Spinner";
    

var moviesData=[];

function MovieList(){

    console.log("component rendered");

    const  [movieDetails, setMovieDetails] =  useState([]);
    const [ searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    /**
     *  useEffectIsTriggered : ComponentDidMount + ComponentDidUpdate
     *  
     *    empty  dependencies : only on ComponentDidMount
     */
    
    useEffect(()=>{
        console.log("useEffect triggered");
        console.log("making a network call inside useEffect");
        //make a network call to fetch the data
        fetch("https://movie-booking-application.onrender.com/mba/api/v1/movies")
        .then(res => res.json())
        .then(movieData=>{
            moviesData=movieData;
            console.log(moviesData);
            setIsLoading(false);
            setMovieDetails(movieData);
        })

        .catch(err=>{
            console.log(err);
        })
    },[]);


    /*
       ComponentDidMount + everytime searchValue is updated 
    */
    useEffect(()=>{
        console.log(moviesData);
        console.log("useffect with dependency on searchValue triggered");
    // filter movies every time a searchValue state is changed 
    const filteredMovies = moviesData.filter((movie)=>{
        return movie.name.toLowerCase().startsWith(searchValue);
    })

    setMovieDetails(filteredMovies);

    },[searchValue, isLoading])


       function onMovieDelete(id){

        const filteredMovies = movieDetails.filter((movie)=>{
            return movie._id!==id;
        })

        setMovieDetails(filteredMovies);
    }


    function onInputChange(e){
        setSearchValue(e.target.value.toLowerCase());
        
        
    }

    return  <div className="movieListContainer">

        {
            (isLoading) ?    <Spinner/> : <div>
                                        <input value={searchValue} onChange={onInputChange} type="text" placeholder="movieName"/>
                                <div className="movieList" >
                                        {
                                            movieDetails.map((movie)=>{
                                                return <Movie key={movie._id} onDelete={onMovieDelete} movieDetails={movie} />
                                            })

                                        }
                                </div>
                            </div>    
        }
    </div>
}


export default MovieList;