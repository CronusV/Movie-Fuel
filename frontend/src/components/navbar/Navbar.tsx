import { Nav, Navbar, Button } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-tertiary">
      <div className="navbar-items">
        <Navbar.Brand as={Link} to={"/"}>
          Movie Fuel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link as={Link} to={"/postTest"}>PostTest</Nav.Link>
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
