import React, { useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Modal,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const SideNavigationbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    adress: "",
    city: "",
  });

  const handleDropdownClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("beep boop sending form to API:", formValues);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const renderProfileModal = () => {
    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>My Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group as={Row} controlId="formInput">
              <Form.Label column sm={4}>
                Full name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Enter a value"
                  name="fullname"
                  value={formValues.fullname}
                  onChange={handleInputChange}
                />
              </Col>

              <Form.Label column sm={4}>
                Email adress
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Enter a value"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </Col>
              <Form.Label column sm={4}>
                Telephone number
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  name="phonenumber"
                  type="text"
                  placeholder="Enter a value"
                  value={formValues.phonenumber}
                  onChange={handleInputChange}
                />
              </Col>
              <Form.Label column sm={4}>
                Adress
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  name="adress"
                  type="text"
                  placeholder="Enter a value"
                  value={formValues.adress}
                  onChange={handleInputChange}
                />
              </Col>
              <Form.Label column sm={4}>
                City
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  name="city"
                  type="text"
                  placeholder="Enter a value"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Button variant="dark" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <Navbar style={{ marginTop: "10px" }} bg="light" className="flex-column">
        <Container>
          <Navbar.Brand href="/customer/dashboard">Home</Navbar.Brand>
        </Container>
        <Container>
          <NavDropdown title="Manage my account" id="nav-dropdown">
            <NavDropdown.Item onClick={handleDropdownClick}>
              123123231321
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
        <Container>
          <NavDropdown title="My orders" id="nav-dropdown">
            <NavDropdown.Item>Orders</NavDropdown.Item>
            <NavDropdown.Item>Cancelled orders</NavDropdown.Item>
          </NavDropdown>
        </Container>
        <Container>
          <NavDropdown title="My bookings" id="nav-dropdown">
            <NavDropdown.Item>Cancel booking</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      {renderProfileModal()}
    </>
  );
};
export default SideNavigationbar;
