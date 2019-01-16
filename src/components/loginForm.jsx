import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

// how to do a basic form in sync with the state using bootstrap
// null or undefined cannot be used for controlled elements or components

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //call the server
    console.log("submited");
  };

  render() {
    // const { password, username } = this.state.data;
    return (
      <div>
        <h1> Log in</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
