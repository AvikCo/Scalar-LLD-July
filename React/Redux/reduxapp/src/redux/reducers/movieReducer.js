import { MOVIE_DATA_FAILED, MOVIE_DATA_RECEIVED, MOVIE_DATA_REQUESTED } from "../actionConstants";


const initialState = {data:[], status:"", error:null};

function MovieReducer(state=initialState, action){

    console.log("Movie reducer called with state and action",state, action);

    switch(action.type){

        case MOVIE_DATA_REQUESTED:
            state = {...state, status:"waiting"}
            break;
        case MOVIE_DATA_RECEIVED:
            state={...state, status:"received", data:action.payload}
            break;
        case MOVIE_DATA_FAILED:
            state = {...state, status:"failed", error:action.payload}
    }


    return state;

}

export default MovieReducer;