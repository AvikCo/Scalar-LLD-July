
import { useEffect } from "react";

function UseEffectExamples(){

    console.log("Redering Component");

    useEffect(()=>{
        console.log("opening a new websocket connection");

      return function(){
            console.log("This function will run just before the component is unmounted")
        }
    },[])

    return <h1> Use Effect Examples </h1>
}


export default UseEffectExamples;