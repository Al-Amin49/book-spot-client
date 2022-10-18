import { signOut } from 'firebase/auth';
import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import auth from '../../../firebase.init';
const Header = () => {
  const [user]= useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">The Book Spot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/">Admin</Nav.Link>
            <Nav.Link as={Link} to="/">Deals</Nav.Link>
    
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          
          {user ? <button className="btn btn-light"  onClick={logout} >Sign Out</button> :   <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

        </>
    );
};

export default Header;