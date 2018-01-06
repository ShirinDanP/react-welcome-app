import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      username: "",
      password: "",
      redirect: false
    };
    this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  signUp() {
    if (this.state.username && this.state.password) {
      PostData("signup", this.state).then(result => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", responseJson);
          this.setState({ redirect: true });
        } else {
          console.log("signUp error");
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/Welcome"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/Welcome"} />;
    }
    return (
      <div className="row">
        <div className="medium-12 columns">
          <h1>SignUp Nanaz</h1>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <label>User name</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.onChange}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <button type='button' value="Sign Up" onClick={this.signUp}>Sign Up</button>
          <a href='/Login'>Login</a>
          </div>
      </div>
    );
  }
}

export default SignUp;
