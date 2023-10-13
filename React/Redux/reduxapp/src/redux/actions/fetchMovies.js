import { MOVIE_DATA_FAILED, MOVIE_DATA_RECEIVED, MOVIE_DATA_REQUESTED } from "../actionConstants"


export const fetchMoviesData=()=>{

    console.log("action creator called");
    console.log("function returned from action creator");
    return function(dispatch){
        console.log("dispatching a MOVIE_DATA_REQUESTED action");
        dispatch({
            type:MOVIE_DATA_REQUESTED
        });

    fetch("https://movie-booking-application.onrender.com/mba/api/v1/movies")
    .then(res => res.json())
    .then(data=>{
                console.log("dispatching a MOVIE_DATA_RECEIVED action");
        dispatch({type:MOVIE_DATA_RECEIVED,
        payload:data
        }) 
    })
    .catch(err=>{
        console.log("dispatching a MOVIE_DATA_FAILED action");
          dispatch({type:MOVIE_DATA_FAILED,
           payload:err
        }) 
    })
    }
}