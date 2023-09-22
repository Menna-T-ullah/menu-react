import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./navbar";
import About from "./about";
import ShoppingCart from "./shoppingCart";
import ProductDetails from "./productdetails";
import NotFound from "./notFound";
import Team from "./team";
import Company from "./company";
import Menu from "./menu";
import Login from "./login";
import Admin from "./admin";
import AddProduct from "./addproduct";

class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3000/products/");
    this.setState({ products: data });
  }

  handleDelete = (product) => {
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });
  };
  handleDelete2 = async (product) => {
    const oldproducts = [...this.state.products];
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });
    try {
      await axios.delete("http://localhost:3000/products/" + product.id);
    } catch (ex) {
      toast.error("Canot Delete");
      this.setState({ products: oldproducts });
    }
  };

  handleReset = () => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };

  clickHandler = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };
  handleInCartChange = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].isInCart = !products[index].isInCart;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/addproduct/:id" Component={AddProduct} />
            <Route
              path="/admin"
              element={
                <Admin
                  products={this.state.products}
                  onDelete={this.handleDelete2}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              }
            />
            <Route path="/about" Component={About}>
              <Route path="/about/team" Component={Team} />
              <Route path="/about/company" Component={Company} />
            </Route>
            <Route
              path={"/products/:id/:name?"}
              element={<ProductDetails products={this.state.products} />}
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onDelete={this.handleInCartChange}
                  onIncrement={this.clickHandler}
                  onReset={this.handleReset}
                />
              }
            />
            <Route path="/notfound" Component={NotFound} />
            <Route path="*" element={<Navigate to="/notfound" />} />
            <Route path="/" element={<Navigate to="/menu" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
