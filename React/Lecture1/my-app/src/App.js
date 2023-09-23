
import MovieList from "./Components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar"

function App(){

  let name="Utkarsh";

  return(
    <div>
      <Navbar />
         <MovieList/>
    </div>
  ) 
}


export default App;