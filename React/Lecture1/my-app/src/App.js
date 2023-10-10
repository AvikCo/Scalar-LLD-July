
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
import  { useState , createContext} from "react";

export const LangContext = createContext();
export const ThemeContext = createContext();


function App(){

  const roles = constants.roles;
  let name="Utkarsh";
  let initialValue="";

  const [theme , setTheme] = useState("light");
  const [language , setLanguage] = useState("english");
  

  return(

     <ThemeContext.Provider value={{theme,setTheme}}>
    <Router>

      <Routes>



        <Route path="/login" element={<Auth />}/>
        <Route path="/signup" element={<Auth />}/>

        <Route path="/" element={<MovieList/>}/>

        <Route path="/movie/:movieId" element=
        { 
          <LangContext.Provider value={language}>
        <MovieDetails />
          </LangContext.Provider>
        
        }/>

        <Route path="/bookings" element={<AuthHoc allowedRoles={roles.bothCustomerAndAdmin}   ><Bookings theme={theme}  /></AuthHoc>}/>
        <Route path="/movies/add" element={  <AuthHoc allowedRoles={roles.onlyAdmin} ><CreateMovie theme={theme}/></AuthHoc>}/>
        <Route path="/buyTickets/:movieId" element={  <AuthHoc allowedRoles={roles.bothCustomerAndAdmin} ><MovieTheatres theme={theme}/></AuthHoc>}/>
        <Route path="/buyTickets/:movieId/:theatreId" element={  <AuthHoc allowedRoles={roles.bothCustomerAndAdmin} ><Bookings theme={theme}/></AuthHoc>}/>
        <Route path="*" element={<PageNotFound theme={theme}/>} />


      </Routes>


    </Router>
      </ThemeContext.Provider>

  
  ) 
}


export default App;