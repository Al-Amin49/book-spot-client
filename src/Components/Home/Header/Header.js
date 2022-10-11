import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
const Header = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Orders</Nav.Link>
            <Nav.Link href="#pricing">Admin</Nav.Link>
            <Nav.Link href="#pricing">Deals</Nav.Link>
    
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link  href="#memes">
           Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

        </>
    );
};

export default Header;