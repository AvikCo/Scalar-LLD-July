import  React, { useState , createContext, Suspense} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar"
import UseEffectExamples from "./Components/useEffectExamples/useEffectExamples";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
// import MovieDetails from "./pages/MovieDetails/MovieDetails";


import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AuthHoc from "./hoc/AuthHOC";
import constants from "./utils/constants";
import MovieList from "./pages/LandingPage/MovieList";
const MovieTheatres = React.lazy(()=> import("./pages/MovieTheatres/MovieTheatres"));
const MovieDetails = React.lazy(()=> import("./pages/MovieDetails/MovieDetails"));
const Bookings = React.lazy(()=> import("./pages/Bookings/Bookings"));
const CreateMovie = React.lazy(()=> import("./pages/CreateMovie/CreateMovie"));

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
      <Suspense fallback={<div style={{backgroundColor:"black", height:"100vh"}}> Loading your component ........... </div>}>


    <Router>

      <Routes>

        <Route path="/login" element={<Auth />}/>
        <Route path="/signup" element={<Auth />}/>
        {/* <Route path="/example" element={<Example />}/> */}

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
          </Suspense>
      </ThemeContext.Provider>

  
  ) 
}


export default App;