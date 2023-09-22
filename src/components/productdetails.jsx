// import React, { Component } from "react";
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

// class ProductDetails extends Component {
//   handleSave = () => {
//     console.log("Save");
//     const navigate = useNavigate();
//     navigate("/cart");
//   };
//   // handleUse =() =>{
//   //   const location = useLocation();
//   //   // console.log(location.search);
//   //   const res = qs.parse(location.search);
//   //   console.log(res);
//   //   let { id } = useParams();
//   //   const product = this.props.products.filter((c) => c.id === parseInt(id))[0];
//   //   //   console.log(id);
//   // }

//   render() {
//     return (
//       <>
//         {/* <h1>Details No.{this.handleUse.id}</h1>
//         <h2>{this.handleUse.product.name}</h2>
//         <h2>Count in shopping cart: {this.handleUse.product.count}</h2> */}
//         <button className="btn btn-primary" onClick={this.handleSave}>
//           Save
//         </button>
//       </>
//     );
//   }
// }

// export default ProductDetails;



const ProductDetails = (props) => {
  const location = useLocation();
  // console.log(location.search);
  const res = qs.parse(location.search);
  console.log(res);
  let { id } = useParams();
  const product = props.products.filter((c) => c.id === parseInt(id))[0];
  //   console.log(id);
  const navigate = useNavigate();
  const handleSave = (props) => {
  console.log("Save");
  navigate("/cart", { replace: true });
  // console.log();
};
  return (
    <>
      <h1>Details No.{id}</h1>
      <h2>{product.name}</h2>
      <h2>Count in shopping cart: {product.count}</h2>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </>
  );
};

export default ProductDetails;
