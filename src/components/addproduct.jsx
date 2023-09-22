import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AddProduct extends Component {
  state = { id:"", name: "", price: "" };

  async componentDidMount() {
    const id = this.props.params.id;
    if (id !== "new") {
      const { data } = await axios.get("http://localhost:3000/products/" + id);
      const state = { ...this.state };
      state.id=data.id;
      state.name = data.name;
      state.price = data.price;
      this.setState(state);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if(this.props.params.id === 'new'){
    const obj = { ...this.state, count: 0, isInCart: false };
    await axios.post("http://localhost:3000/products/", obj);
    }else{
      const obj = {...this.state, count:0, isInCount:false};
      delete obj.id;
      await axios.put("http://localhost:3000/products/" + this.state.id,obj)
    }
    
    window.location.href = "http://localhost:3001/admin";
  };
  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  render() {
    return (
      <>
        <h1>
          {this.props.params.id === "new" ? "Add Product" : "Edit Product"}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              autoFocus
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              value={this.state.price}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="price"
              name="price"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {this.props.params.id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      </>
    );
  }
}

export default withParams(AddProduct);
