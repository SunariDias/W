import Navigationbar from "../components/Navigationbar";
import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import CategoriesTable from "../components/CategoriesTable";
import ItemTable from "../components/ItemTable";
import Footer from "../components/Footer";

const CustomerHomepage = () => {
  const customerCategories = {
    categoryName: ["Repair", "Kitchen", "Hair Care"],
    categoryIcon: ["/favicon.ico", "/favicon.ico", "/favicon.ico"],
  };

  return (
    <>
      <Navigationbar isLogged={false} />
      <Container>
        <Row>
          <Col sm={12}>
            <ImageCarousel />
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <CategoriesTable categories={customerCategories} />
          </Col>
          <Col sm={10}>
            <ItemTable />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CustomerHomepage;
