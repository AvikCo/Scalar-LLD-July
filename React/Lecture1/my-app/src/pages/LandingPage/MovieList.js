import { useContext, useEffect, useState } from "react";
import Movie from "../../Components/Movie/Movie";
import "./MovieList.css";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarComp from "../../Components/Navbar/Navbar";
import { getAllMovies } from "../../api/movie";
import DropDownComp from "../../Components/DropDown/DropDown";
import { ThemeContext } from "../../App";
import Button from "react-bootstrap/esm/Button";
import SearhInput from "../../Components/SearchInput/SearchInput";

    

var moviesData=[];

function MovieList(props){

    console.log("Movie List component rendered");


    const  [movieDetails, setMovieDetails] =  useState([]);
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



    console.log(theme);

    return  <div className = {"movieListContainer text-center " + ((theme=="dark")?"bg-dark":"bg-light") } >

        <NavbarComp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <SearhInput onSearchResults={filterResults}/>

        {
            (isLoading) ?    <Spinner/> : <div className="m-1">
           
                                         <DropDownComp onLanguageChange={onLanguageChange}/> 
                                <div className="movieList" >
                                        {
                                            movieDetails.map((movie)=>{
                                                console.log("re-rendering all the movies");
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