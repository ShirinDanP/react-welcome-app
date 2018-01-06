import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.LogOut= this.LogOut.bind(this);
  }

  componentWillMount(){
    if(sessionStorage.getItem('userData')){
      console.log('call user feed');
    }
    else {
      this.setState({redirect: true})
    }
  }


  LogOut(){
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    this.setState({redirect: true});
    }


  render() {
    if (this.state.redirect) {
    return (<Redirect to={"/Login"} />)
    }

    return (
      <div className="row">
        <div className="medium-12 columns">
          <h1>Welcome {this.props.name}</h1>
          <a href="/Login" className="button primary">
            Login
          </a>
          <a href="/SignUp" className="button primary">
            Sign up
          </a>
          <button type='button' className="button" onClick={this.LogOut}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
