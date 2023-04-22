import React from "react";
import { ListGroup, Button, Card } from "react-bootstrap";

export const DashboardSideBar = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/images/cv pic.jpg" />
      <Card.Body>
        <Card.Title>Md Shuvo1111111111</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Actions</ListGroup.Item>
        <Button variant="outline-success">Edit Profile  1</Button>{" "}
        <Button variant="outline-dark">Set up service</Button>{" "}
        <Button variant="outline-success">Service re-sechduling</Button>{" "}
        <Button variant="outline-dark">View product/serice</Button>{" "}
        <Button variant="outline-success">Delete service</Button>{" "}
      </ListGroup>
    </Card>
  );
};
export default DashboardSideBar;
