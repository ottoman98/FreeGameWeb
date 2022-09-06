import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/header/header.css';
import genres from '../utils/genresArray';

function NavScroll() {
  genres.sort();

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h1 className="brand">FreeGamesWeb</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Random Game
            </Nav.Link>
            <NavDropdown title="Genres" id="navbarScrollingDropdown">
              {genres.map((x) => {
                const spacesOut = x.trim().replace(/\s/g, '-');
                return (
                  <NavDropdown.Item
                    key={spacesOut}
                    as={Link}
                    to={'/' + spacesOut.toLowerCase()}
                  >
                    <p className="genres-items">{x}</p>
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Coming Soon...
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
