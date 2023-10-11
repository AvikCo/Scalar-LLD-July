import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "./redux/actions/incrementCounter";


function Counter(){

        const countState = useSelector((state)=>state.count);
        const dispatch = useDispatch();

    const onIncrement=(e)=>{
        e.preventDefault();

        dispatch(incrementCounter())
    }



    return <div>
    <h2>
        Value : {countState.countValue}
    </h2> 

    <input type="button" onClick={onIncrement} value="Increment" /> 

    </div>

  

}

export default Counter;