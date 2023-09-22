import React from "react";

const Cart = (props) => {
  const style = !props.product.isInCart
    ? { color: "#a4c1d0", cursor: "pointer" }
    : { cursor: "pointer" };
  return (
    <i
      className="fas fa-cart-plus"
      style={style}
      onClick={() => props.onClick(props.product)}
    />
  );
};

export default Cart;
