import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useSendLogoutMutation } from "../../state/auth/authApiSlice";
import "./navbar.css";

function Navigation() {
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  const token = useSelector((state: RootState) => state.auth.token); 

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

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
            <Nav.Link href="/Search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-actions">
          {token ? (
            <button onClick={() => sendLogout(null)}>Logout</button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </Navbar>
  );
}

export default Navigation;
