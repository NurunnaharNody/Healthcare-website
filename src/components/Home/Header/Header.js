import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'


const Header = () => {
  const {user, logOut} = useAuth();
    return (
       <div>
    <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand>
    <img
        src="https://i.ibb.co/VT47bjD/Untitled-design-42.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
  <Navbar.Brand href="#home">CARE MEDICO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto mx-auto header-links">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
      {user.email ?
        <Button onClick={logOut} className="btn-dark">Log Out </Button>
        :
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
     
      }
      {
       user.email && <Navbar.Text>Signed in as <a href="#login">{user.displayName}</a></Navbar.Text>
      }
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 </div>
    );
};

export default Header;