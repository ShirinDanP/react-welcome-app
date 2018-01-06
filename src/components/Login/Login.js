import React, { Component } from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '', 
      redirect: false
    }

    this.Login=this.Login.bind(this);
    this.onChange= this.onChange.bind(this);
  }

  Login(){

    if(this.state.username && this.state.password){
      PostData('login', this.state).then((result)=>{
        let responseJson = result;
        if(responseJson.userData){
          sessionStorage.setItem('userData', responseJson);
          this.setState({redirect: true});
        }
        else{
          console.log('Login error');
        }
      });
    }

 }


  onChange(e){
    this.setState ({
     [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  //signUp(){
   //<Redirect to={'/SignUp'}/>
  //}

  render() {
  if (this.state.redirect){
    return <Redirect to={"/Welcome"} />;    
  }
  
  if (sessionStorage.getItem('userData')){
    return <Redirect to={"/Welcome"} />;    
  }
   
    return (
      <div className="row">
     <div className="medium-12 columns">
       <h1>Login Nanaz</h1>
     <label>User name</label>
     <input type='text' name="username" placeholder='username' onChange={this.onChange}  />
     <label>Password</label>
     <input type='text' name ="password" placeholder='Password' onChange={this.onChange}/>
     <input type='submit' value="Login" onClick={this.Login}/>
     <a href='/SignUp'>Register</a>
   </div>
   </div>
    );
  }
}

export default Login;
