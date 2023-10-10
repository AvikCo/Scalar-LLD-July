import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { getUserName, isUserLoggedIn } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { LangContext, ThemeContext } from '../../App';

function NavbarComp(props) {

    const isLoggedIn = isUserLoggedIn();
    const navigate = useNavigate();

    const value = useContext(LangContext);
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(value);

  const onButtonClick=()=>{

    if(isLoggedIn){
      localStorage.clear();
    }

    navigate("/login");
    
  }

  const onToggleTheme = ()=>{
    if(theme==="dark"){
      setTheme("light");
    }else{
      setTheme("dark");
    }
  }

  return (
    <>
      <Navbar className='mb-3' bg={(theme==="dark")?"dark":"light"} data-bs-theme={(theme==="dark")?"dark":"light"}>
        <Container className='d-flex align-items-center'>
          <Navbar.Brand href="#home">Movie Booking Application </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant='light' onClick={onButtonClick}>  {(isLoggedIn)?"Logout":"Login"} </Button>
           { isLoggedIn && <p className='py-2 m-1 text-light d-flex text-center justify-content-center align-items-center'> Hii {getUserName()} </p>} 
        </Container>

        <Button onClick={onToggleTheme} className='m-2' variant="light">
          Toggle Theme
        </Button>
   </Navbar>
    </>
  );
}

export default NavbarComp;