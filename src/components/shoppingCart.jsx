import React, { Component } from "react";
import Product from "./product";
class shoppingCart extends Component {
  render() {
    const { products, onReset, onDelete, onIncrement } = this.props;
    return (
      <>
        <h1>Shopping Cart</h1>
        <button className="btn btn-secondary m-2" onClick={onReset}>
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </>
    );
  }
}

export default shoppingCart;
