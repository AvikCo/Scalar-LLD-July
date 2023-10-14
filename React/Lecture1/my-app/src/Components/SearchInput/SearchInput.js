import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function SearhInput(props){

    const [searchValue, setSearchValue] = useState("");

    function onInputChange(e){
        setSearchValue(e.target.value.toLowerCase());
    }

    return(
        <div>
         <input value={searchValue} onChange={onInputChange} type="text" placeholder="movieName"/>
        <Button onClick={()=>props.onSearchResults(searchValue)} variant="dark" className="m-4"> Search Results </Button>
        </div>
              
    ) 
}

export default SearhInput;