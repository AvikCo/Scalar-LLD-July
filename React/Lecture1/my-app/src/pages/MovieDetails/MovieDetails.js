import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarComp from "../../Components/Navbar/Navbar";
import Spinner from "../../Components/common/Spinner/Spinner";
import { getMovieDetails } from "../../api/movie";
import ReactPlayer from "react-player";
import "./MovieDetails.css";
import Button from "react-bootstrap/esm/Button";
import { LangContext, ThemeContext } from "../../App";

function MovieDetails(props){

    const params = useParams();
    const [isLoading,setIsLoading] = useState(true);
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


    return <div className="">
        <NavbarComp  />
        {
            (isLoading) ? <Spinner/> : <div>

                <div className={"box " +((theme==="dark")?"bg-black":"bg-light")}>
                    <ReactPlayer url={movieData.trailerUrl}  controls={true} width="80%" height="80%" />
                </div>

                 <div className="container my-4 justify-content-center" >
            <div className='row'>
                <div className='col'>
                    <img src={movieData.posterUrl} height={400} width={300} />
                </div>

                <div className='col'>
                    <h2 className='fw-bolder'> About The Movie </h2>
                    
                    <div>
                        <span className='badge rounded-pill text-bg-danger m-1'> {movieData.description} </span>
                        <span className='badge rounded-pill text-bg-secondary m-1' > {movieData.language} </span>
                        <span className='badge rounded-pill text-bg-secondary m-1'> {movieData.releaseStatus}  </span>
                    </div>

                    <hr/>

                    <h3> {movieData.name} </h3>
                    <h6> {movieData.director} </h6>
                    <h6>  {movieData.releaseDate} </h6>
                    <hr/>

                    <h5>  Cast </h5>

                    {
                        movieData.casts.map(name => <li className='list-group-item' > {name} </li> )
                    }

                    <div className='text-center my-3' >
                    </div>

                    <Link to={`/buyTickets/${movieId}`}>
                          <Button className="text-white" variant="danger">
                                    Book Tickets
                    </Button>
                    </Link>
                  
                </div>

               

            </div>
        </div>

                </div>
        }



    </div>

}

export default MovieDetails;