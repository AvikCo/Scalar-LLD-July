import { useContext, useEffect, useState } from "react";
import Movie from "../../Components/Movie/Movie";
import "./MovieList.css";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarComp from "../../Components/Navbar/Navbar";
import { getAllMovies } from "../../api/movie";
import DropDownComp from "../../Components/DropDown/DropDown";
import { ThemeContext } from "../../App";

    

var moviesData=[];

function MovieList(props){


    const  [movieDetails, setMovieDetails] =  useState([]);
    const [ searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
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


    /*
       ComponentDidMount + everytime searchValue is updated 
    */
    useEffect(()=>{
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

    console.log(theme);

    return  <div className = {"movieListContainer text-center " + ((theme=="dark")?"bg-dark":"bg-light") } >

        <NavbarComp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        {
            (isLoading) ?    <Spinner/> : <div className="m-1">
                                        <input value={searchValue} onChange={onInputChange} type="text" placeholder="movieName"/>
                                         <DropDownComp onLanguageChange={onLanguageChange}/> 
                                <div className="movieList" >
                                        {
                                            movieDetails.map((movie)=>{
                                                return <Movie key={movie._id} onDelete={onMovieDelete} movieDetails={movie}
                                                 isLoggedIn={isLoggedIn} />
                                            })

                                        }
                                </div>
                            </div>    
        }
    </div>
}


export default MovieList;