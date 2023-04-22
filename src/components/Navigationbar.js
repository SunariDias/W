import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigationbar = ({ isLogged }) => {
  const logged = isLogged ? "Log out" : "Log in";
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate("/customer/dashboard");
  };
  const HandleLogout = () => {
    navigate("/customer");
  };

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand style={{ paddingLeft: "00px" }}>Stockmann</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Dashboard</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Category 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Category after divider
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="outline-dark"
          onClick={isLogged ? HandleLogout : HandleLogin}
        >
          {logged}
        </Button>
      </Navbar>
    </Container>
  );
};
export default Navigationbar;
