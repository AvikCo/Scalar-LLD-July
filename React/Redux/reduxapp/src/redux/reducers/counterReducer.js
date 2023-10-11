

const intialState = {countValue:0};


function counterReducer(state=intialState,action){
    console.log("counter reducer called");

    if(action.type==="INCREMENT_COUNTER"){
        return {
            ...state,
            countValue:state.countValue+1
        }
    }
    
    return state;

}

export default counterReducer;