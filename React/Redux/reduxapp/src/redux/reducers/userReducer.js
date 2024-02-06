

const intitalState = {name:"", age:null};


function UserReducer(state=intitalState, action){

    console.log("reducer called with state and action : ", state, action);

    if(action.type==="CHANGE_USER_DETAILS"){
        return {
            ...state,
            name:action.payload.name,
            age:action.payload.age
        };
    }

    return state;
}

export default UserReducer;
