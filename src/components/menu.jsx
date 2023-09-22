import React from "react";
import Cart from "./cart";

const Menu = (props) => {
  return (
    <>
      <h1>Menu</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Cart onClick={props.onClick} product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Menu;
