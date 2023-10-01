import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

function NavbarComp(props) {

  const onButtonClick=()=>{
    props.setIsLoggedIn(!props.isLoggedIn);
  }

  return (
    <>
      <Navbar className='mb-3' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie Booking Application </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant='light' onClick={onButtonClick}>  {(props.isLoggedIn)?"Logout":"Login"} </Button>
        </Container>
   </Navbar>
    </>
  );
}

export default NavbarComp;