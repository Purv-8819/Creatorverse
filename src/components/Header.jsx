import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };


  }

  render() {
    return (
      <div id="header">
       <h1 id="title">CREATORVERSE</h1>
       <div className="container">
         <a href="/">
            <button className="header-button">VIEW ALL CREATORS</button>
         </a>
         <a href="/add">
            <button className="header-button">ADD A CREATOR</button>
         </a>
       </div>
      </div>
    );
  }
}

export default Header;