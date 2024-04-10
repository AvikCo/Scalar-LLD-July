import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesData } from "./actions/fetchMovies";


function Movies(){
    console.log("Movies component got rendered");

    const dispatch = useDispatch();
    const movies = useSelector((state)=>state.movies);

    const fetchMovies=()=>{
          dispatch(fetchMoviesData());
    }


    const renderMovies=()=>{
        console.log(movies);

        if(movies.status==="waiting"){
            return <h1> Loading </h1>
        }

           if(movies.status==="failed"){
            return <h1> Error </h1>
        }

        return <div>
            {
                movies.data.map((movie)=><h2 key={movie._id}> {movie.name} </h2>)
            }

        </div>

    }

    return <div>

        <h1> I am a Movies Component </h1>


        <button onClick={fetchMovies}> Fetch Movies data </button>
            
            {renderMovies()}

        </div>

}

export default Movies;