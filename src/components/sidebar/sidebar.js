import React, { Component } from "react";
import "./sidebar.scss";
import Login from "../sidebar/login/login";
import Signup from "../sidebar/signUp/signup";

class sidebar extends Component {
  render() {
    var option = <Login />;
    if (this.props.option == "SignUp") {
      option = <Signup />;
    }
    return (
      <div class="sidebarContainer">
        <div class="sidebarLeft" />

            <div class="sidebar animated slideInRight">
                <div class="g-signin2" data-onsuccess="onSignIn" />
          <span class="closeBtn" onClick={this.props.close}>
            <i class="fa fa-times-circle" />
          </span>
          <div id="title">
            <h2>{this.props.option}</h2>
          </div>
          {option}
        </div>
      </div>
    );
  }
}

export default sidebar;
