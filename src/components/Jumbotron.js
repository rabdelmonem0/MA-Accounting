/* eslint-disable react/style-prop-object */
import React from "react";
import logo from '../images/logo.PNG';

function Jumbotron() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img alt='logo' src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
