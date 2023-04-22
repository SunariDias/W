import React from "react";
import Navigationbar from "../components/Navigationbar";
import DashboardSideBar from "../components/DashboardSideBar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

export const PartnerDashboard = () => {
  <>
    <div>
      <Navigationbar isLogged={false} />
    </div>
  </>;
  return (
    <Container>
      <div className="Welcome">
        <center>
          <h1>Welcome to dashboard Parner:Shuvo111111</h1>
        </center>{" "}
      </div>

      <row>
        <ProductList />
        <DashboardSideBar />
      </row>

      <Footer />
    </Container>
  );
};

export default PartnerDashboard;
