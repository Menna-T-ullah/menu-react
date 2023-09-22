import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Product extends Component {
  // props.product = {
  //   name: this.props.product.name,
  //   count: this.props.product.count,
  //   imgUrl: "logo192.png",
  //   names: ["Jhon", "Max", "Jake"],
  // };

  getClasses() {
    return this.props.product.count === 0
      ? "btn btn-warning pe-none m-3 btn-sm"
      : "btn btn-primary pe-none m-3 btn-sm";
  }


  // increment = () => {
  //   this.clickHandler(2);
  // };

  // renderNames(){
  //   if (this.props.product.names.length === 0) {
  //     return <h2>No Names</h2>;
  //   }
  //   return (
  //     <ul>
  //       {this.props.product.names.map((name) => (
  //         <li key={name}>{name}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="row">
        <div className="col-1">
        <span><Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link></span>
        </div>
        <div className="col">
        {/* {this.props.product.names.length === 0 && <h4>No Names</h4>} */}
        {/* <img src={this.props.product.imgUrl} /> */}
        
        <span className={this.getClasses()}>{this.props.product.count}</span>
        <button className="btn btn-primary" onClick={() => this.props.onIncrement(this.props.product)}>
          +
        </button>
        <span style={{cursor: "pointer"}} onClick={() => this.props.onDelete(this.props.product)}>
          <i className="fas fa-trash m-2" ></i>
        </span>
        {/* <ul>
          {this.props.product.names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul> */}
        </div>
      </div>
    );
  }
}

export default Product;
