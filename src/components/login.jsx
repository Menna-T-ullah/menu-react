import React, { Component } from "react";
import Joi from "joi-browser";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    if (errors) return;
    console.log("submit");
  };

  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };

  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    this.setState({ errors });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              autoFocus
              type="text"
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          {this.state.errors.username && (
            <div className="alert alert-danger">
              {this.state.errors.username}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="Password"
              name="password"
            />
          </div>
          {this.state.errors.password && (
            <div className="alert alert-danger">
              {this.state.errors.password}
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Login;
