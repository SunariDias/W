import React from "react";
import Navigationbar from "../components/Navigationbar";
import SellerDashboardPage from "../components/seller/SellerDashboard";
import SellerDashboardSideBar from "../components/seller/SellerDashboardSideBar";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

export const SellerDashboard = () => {
  return (
    <>
      <Navigationbar isLogged={true} />
      <Container>
        <Row>
          {/*<Col>
            <SellerDashboardSideBar />
  </Col>
          <Col>
            <SellerDashboardPage />
  </Col>*/}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SellerDashboard;
