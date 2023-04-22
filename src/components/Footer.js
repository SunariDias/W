import react from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <footer className="bg-light pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Navbar.Brand href="#">Link 1</Navbar.Brand>
                </li>
                <li>
                  <Navbar.Brand href="#">Link 2</Navbar.Brand>
                </li>
                <li>
                  <Navbar.Brand href="#">Link 2</Navbar.Brand>
                </li>
                <li>
                  <Navbar.Brand href="#">Link 2</Navbar.Brand>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Address: 123 Main Street</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 Company, Inc.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Navbar.Brand href="#">Privacy Policy</Navbar.Brand>
                </li>
                <li className="list-inline-item">
                  <Navbar.Brand href="#">Terms of Use</Navbar.Brand>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
