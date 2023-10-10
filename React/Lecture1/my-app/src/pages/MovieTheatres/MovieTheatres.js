import { useEffect, useState } from "react";
import { getTheatresForAMovie } from "../../api/theatre";
import { Link, useParams } from "react-router-dom";
import NavbarComp from "../../Components/Navbar/Navbar";
import SpinnerComp from "../../Components/common/Spinner/Spinner";
import { getMovieDetails } from "../../api/movie";

function MovieTheatres(){

      const params = useParams();
    const [isLoading,setIsLoading] = useState(true);
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

    
    return <div>

        <NavbarComp/>

        { isLoading && <SpinnerComp/>}

        {

            !isLoading && <div className="bg-black vh-100 text-center">

                <h2 className="text-white fw-bolder"> {movieDetails.name} </h2>

                <div className="text-white">

                    <span> {movieDetails.description} </span>

                    <div className="">

                        <span className="badge text-bg-danger rounded-pill m-2 p-3 text-white"> {movieDetails.language} </span>
                        <span className="badge text-bg-danger rounded-pill m-2 p-3 text-white"> {movieDetails.releaseStatus} </span>
                     </div>   

                </div> 


                <div className="bg-dark">

                    {
                        theatreDetails.map((theatre)=>{
                            return <div>
                              <Link to={`/buyTickets/${movieId}/${theatre._id}`}>
                                  <div className="py-2">
                            <h3> {theatre.name}</h3>
                            </div>
                              </Link>
                              </div>
                        })
                    }
                    

                </div>   


            </div>    
        }

    </div>

}

export default MovieTheatres;