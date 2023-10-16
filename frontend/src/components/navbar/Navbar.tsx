import { Nav, Navbar, Button } from "react-bootstrap";

import "./navbar.css";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-tertiary">
      <div className="navbar-items">
        <Navbar.Brand>Movie Fuel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="/post">Reviews</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-actions">
          <Button as="a" variant="outline-danger">
            SIGN IN
          </Button>
          <Button as="a" variant="warning">
            SIGN UP
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default Navigation;
