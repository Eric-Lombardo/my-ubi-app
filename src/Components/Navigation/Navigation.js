import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UbiLogo from '../../Assets/ubi-logo.svg'
import './Navigation.css'

const Navigation = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="mobile-row-reverse">
        <Navbar.Brand href="#home" className="mobile-margin-auto">
          <img
            alt="Ubisoft Logo"
            src={UbiLogo}
            width="30"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          <span className="brand-title">Ubisoft</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1 }}>
            <Nav.Link className="mx-2" href="#Uplay">Uplay+</Nav.Link>
            <Nav.Link className="mx-2" href="#Store">Store</Nav.Link>
            <Nav.Link className="mx-2" href="#MoreGames">More Games</Nav.Link>
            <Nav.Link className="mx-2" href="#News">News</Nav.Link>
            <Nav.Link className="mx-2" href="#Forums">Forums</Nav.Link>
            <Nav.Link className="mx-2" href="#Support">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Navigation;