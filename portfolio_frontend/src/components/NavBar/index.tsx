import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => (
  <Navbar collapseOnSelect bg="dark-opaque" variant="dark" fixed="top" expand="md">
    <Navbar.Brand>
      <Link className="navbar-brand-link" to="/">
        Dennis Pham
      </Link>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="navbar-nav ml-auto">
        <LinkContainer className="pr-3" to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer className="pr-3" to="/projects">
          <Nav.Link>Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer className="pr-3" to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
