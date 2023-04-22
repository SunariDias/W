import { Navbar, Table } from "react-bootstrap";

const CategoryRow = (name, icon) => {
  return (
    <tr key={name}>
      <td colSpan={2}>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {name}{" "}
        </Navbar.Brand>
      </td>
    </tr>
  );
};

const CategoriesTable = ({ categories }) => {
  if (categories) {
    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>Categories</th>
          </tr>
        </thead>
        <tbody>
          {categories.categoryName.map((name, index) =>
            CategoryRow(name, categories.categoryIcon[index])
          )}
        </tbody>
      </Table>
    );
  } else {
    return <></>;
  }
};

export default CategoriesTable;
