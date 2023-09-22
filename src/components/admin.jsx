import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/addproduct/new");
  };
  // const editChange = () =>{
  //     navigate(`/productform/${product.id}`);
  //   }
  return (
    <>
      <h1>Admin</h1>
      <button className="btn btn-primary" onClick={routeChange}>
        Add
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <i
                  style={{ cursor: "pointer" }}
                  className="fa-solid fa-pen-to-square"
                  onClick={() => navigate(`/addproduct/${product.id}`)}
                ></i>
              </td>
              <td>
                <i
                  style={{ cursor: "pointer" }}
                  className="fas fa-trash"
                  onClick={() => props.onDelete(product)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
// this.props.history.push(`/productform/${product.id}`)
export default Admin;
