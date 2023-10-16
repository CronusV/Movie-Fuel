import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./navbar.css";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-tertiary">
      <div className="navbar-items">
        <LinkContainer to="/">
          <Navbar.Brand as="a">Movie Fuel</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-actions">
          <LinkContainer to="/login">
            <Button as="a" variant="outline-danger">
              SIGN IN
            </Button>
          </LinkContainer>
          <LinkContainer to="/register">
            <Button as="a" variant="warning">
              SIGN UP
            </Button>
          </LinkContainer>
        </div>
      </div>
    </Navbar>
  );
}

export default Navigation;
