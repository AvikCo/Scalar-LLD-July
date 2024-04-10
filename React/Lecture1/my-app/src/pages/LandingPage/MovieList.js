import Movie from "../../Components/Movie/Movie";
import "./MovieList.css";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarComp from "../../Components/Navbar/Navbar";
import DropDownComp from "../../Components/DropDown/DropDown";
import useMovieList from "../../hooks/useMovieList";
import SearchInput from "../../Components/SearchInput/SearchInput";
    


function MovieList(props){

    const {theme, filterResults, isLoading, onLanguageChange, movieDetails, onMovieDelete, isLoggedIn } = useMovieList();

    return  <div className = {"movieListContainer text-center " + ((theme=="dark")?"bg-dark":"bg-light") } >

        <NavbarComp/>

        <SearchInput onSearchResults={filterResults}/>

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