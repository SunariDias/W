import Navigationbar from "../components/Navigationbar";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import SideNavigationbar from "../components/SideNavigationbar";

const CustomerDashboard = () => {
  return (
    <>
      <Navigationbar isLogged={true} />
      <Container>
        <Row>
          <Col sm={3}>
            <SideNavigationbar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default CustomerDashboard;
