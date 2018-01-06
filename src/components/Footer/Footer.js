import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
     <div className="row">
     <div className="medium-12 columns">
       <label>Name
         <input type="text" placeholder="Name"/>
       </label>
       <label>Email
         <input type="text" placeholder="Email"/>
       </label>
       <label>
         Message
         <textarea placeholder="holla at a designerd"></textarea>
       </label>
       <input type="submit" className="button expanded" value="Submit"/>
     </div>
   </div>
    );
  }
}

export default Footer;
