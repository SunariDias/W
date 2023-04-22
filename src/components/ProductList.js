import React from "react";
import Table from "react-bootstrap/Table";

export const ProductList = () => {
  return (
    <>
      <div class="t1">
        <p>Product list</p>{" "}
      </div>

      <Table className="t2" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Locaiton</th>
            <th>Price List</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>lpr</td>
            <td>@fat</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
