import { Component, useState } from "react";
import Button from "react-bootstrap/esm/Button";


class SearhInput extends Component {

    constructor(props){
        super(props);
        this.state={
            searchValue:""
        }
    }


    //ComponentDidMount
    componentDidMount(){

        //make an API call here 
        // once you have the results : change the isLoading state to false

        // this.setState({
        //     isLoading:false 
        // })
    }


    componentWillUnmount(){

        console.log("component is about to be un mounted");

    }


    onInputChange=(e)=>{
        console.log(this);
        this.setState({searchValue:e.target.value.toLowerCase()});
    }

    render(){

    return(
        <div>
         <input value={this.state.searchValue} onChange={this.onInputChange} type="text" placeholder="movieName"/>
        <Button onClick={()=>this.props.onSearchResults(this.state.searchValue)} variant="dark" className="m-4"> Search Results </Button>
        </div>
        ) 

    }
}


export default SearhInput;