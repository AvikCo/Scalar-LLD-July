import Movie from "../Movie/Movie";
import movieData from "./MovieData";

function MovieList(){
    return  <div>
        {
            movieData.map((movie)=>{
                return <Movie name={movie.name} />
            })

        }
    </div>
}


export default MovieList;