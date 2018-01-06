import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Mobile from "./components/MobileDevelop/Mobile";
import Welcome from "./components/Welcome/Welcome";
import Routes from "./Routes";
import "./styles/foundation.min.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      'yourName': 'Shirin Khanoom'
    }
  }
  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <Header name={this.state.yourName}/>
            <Routes/>
            <hr/>
            <Mobile/>
            <hr/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
