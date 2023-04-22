import { CardGroup, Card, Button } from "react-bootstrap";

const ItemTable = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/images/Carousell-img-1.jpg"}
        />
        <Card.Body>
          <Card.Title>T-shirt: POLO</Card.Title>
          <Card.Text>Lorem ipsum ja sillai</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center justify-content-between">
          <p className="m-0">from 99€</p>
          <Button className="ml-auto" variant="outline-dark">
            Buy
          </Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/images/Carousell-img-2.jpg"}
        />
        <Card.Body>
          <Card.Title>Jackets</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center justify-content-between">
          <p className="m-0">from 99€</p>
          <Button className="ml-auto" variant="outline-dark">
            Buy
          </Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/images/Carousell-img-3.jpg"}
        />
        <Card.Body>
          <Card.Title>Shoes</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center justify-content-between">
          <p className="m-0">from 99€</p>
          <Button className="ml-auto" variant="outline-dark">
            Buy
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};
export default ItemTable;
