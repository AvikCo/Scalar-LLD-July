
import MovieList from "./pages/LandingPage/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar"
import UseEffectExamples from "./Components/useEffectExamples/useEffectExamples";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Bookings from "./pages/Bookings/Bookings";
import MovieTheatres from "./pages/MovieTheatres/MovieTheatres";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AuthHoc from "./hoc/AuthHOC";
import CreateMovie from "./pages/CreateMovie/CreateMovie";
import constants from "./utils/constants";


function App(){

  const roles = constants.roles;
  let name="Utkarsh";
  let initialValue="";

  

  return(

    <Router>

      <Routes>

        <Route path="/login" element={<Auth/>}/>
        <Route path="/signup" element={<Auth/>}/>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/movie/:movieId" element={ <MovieDetails/>}/>
        <Route path="/bookings" element={<AuthHoc allowedRoles={roles.bothCustomerAndAdmin}   ><Bookings/></AuthHoc>}/>
        <Route path="/theatres" element={  <AuthHoc allowedRoles={roles.bothCustomerAndAdmin} ><MovieTheatres/></AuthHoc>}/>
        <Route path="/movies/add" element={  <AuthHoc allowedRoles={roles.onlyAdmin} ><CreateMovie/></AuthHoc>}/>
        <Route path="*" element={<PageNotFound/>} />

      </Routes>


    </Router>
  
  ) 
}


export default App;